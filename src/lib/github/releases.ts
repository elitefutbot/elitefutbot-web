const GITHUB_API_BASE = "https://api.github.com";
const RELEASE_REPO = "bytesquadlabs/fifa-snipe-bot";

// Avoid hitting GitHub's API on every button click.
const CACHE_TTL_MS = 5 * 60 * 1000;

export class NoReleaseError extends Error {
  constructor() {
    super("No releases have been published yet");
    this.name = "NoReleaseError";
  }
}

export interface ReleaseAsset {
  id: number;
  name: string;
  size: number;
}

export interface LatestRelease {
  tagName: string;
  asset: ReleaseAsset;
}

let cache: { data: LatestRelease; fetchedAt: number } | null = null;

// Exported for tests — production code never needs to call this.
export function resetReleaseCache(): void {
  cache = null;
}

function githubHeaders(accept: string): HeadersInit {
  const token = process.env.GITHUB_RELEASE_TOKEN;
  if (!token) {
    throw new Error("GITHUB_RELEASE_TOKEN is not configured");
  }
  return {
    Authorization: `Bearer ${token}`,
    Accept: accept,
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

// Only the uploaded build artifact (the .zip the release workflow attaches)
// counts — not GitHub's auto-generated "Source code" zipball/tarball, which
// every release also gets for free but isn't what we want users downloading.
function findZipAsset(
  assets: Array<{ id: number; name: string; size: number }>,
): ReleaseAsset | undefined {
  return assets.find((asset) => asset.name.endsWith(".zip"));
}

export async function getLatestReleaseAsset(): Promise<LatestRelease> {
  if (cache && Date.now() - cache.fetchedAt < CACHE_TTL_MS) {
    return cache.data;
  }

  const res = await fetch(
    `${GITHUB_API_BASE}/repos/${RELEASE_REPO}/releases/latest`,
    {
      headers: githubHeaders("application/vnd.github+json"),
      cache: "no-store",
    },
  );

  if (res.status === 404) {
    throw new NoReleaseError();
  }
  if (!res.ok) {
    throw new Error(`GitHub API error fetching latest release: ${res.status}`);
  }

  const data = await res.json();
  const asset = findZipAsset(data.assets ?? []);

  if (!asset) {
    throw new Error("Latest release has no .zip asset");
  }

  const result: LatestRelease = {
    tagName: data.tag_name,
    asset: { id: asset.id, name: asset.name, size: asset.size },
  };

  cache = { data: result, fetchedAt: Date.now() };
  return result;
}

// Fetches the actual asset bytes. Private-repo release assets can't be
// downloaded via their plain browser_download_url without auth — this API
// endpoint + Accept: application/octet-stream is GitHub's documented way to
// pull the binary with a token instead.
export async function fetchReleaseAssetBody(
  assetId: number,
): Promise<Response> {
  const res = await fetch(
    `${GITHUB_API_BASE}/repos/${RELEASE_REPO}/releases/assets/${assetId}`,
    {
      headers: githubHeaders("application/octet-stream"),
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error(`GitHub API error fetching release asset: ${res.status}`);
  }

  return res;
}
