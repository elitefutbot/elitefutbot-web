import { NextResponse } from "next/server";
import {
  fetchReleaseAssetBody,
  getLatestReleaseAsset,
  NoReleaseError,
} from "@/lib/github/releases";

export async function GET() {
  let release;
  try {
    release = await getLatestReleaseAsset();
  } catch (error) {
    if (error instanceof NoReleaseError) {
      return NextResponse.json({ message: error.message }, { status: 404 });
    }
    console.error("Failed to look up the latest release", error);
    return NextResponse.json(
      {
        message:
          "Couldn't reach GitHub to check for a release. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  let assetRes;
  try {
    assetRes = await fetchReleaseAssetBody(release.asset.id);
  } catch (error) {
    console.error("Failed to fetch the release asset", error);
    return NextResponse.json(
      {
        message:
          "Couldn't download the release file. Please try again shortly.",
      },
      { status: 502 },
    );
  }

  return new NextResponse(assetRes.body, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${release.asset.name}"`,
      "Content-Length": String(release.asset.size),
    },
  });
}
