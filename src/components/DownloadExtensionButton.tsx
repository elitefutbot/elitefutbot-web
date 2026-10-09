"use client";

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

// Temporary: the extension zip (v1.0.21) is served from Google Drive while
// /api/download can't reach the private GitHub release (GITHUB_RELEASE_TOKEN
// gets a 403). Drive's direct-download URL for the shared file — switch back
// to /api/download once the token is fixed.
const EXTENSION_DOWNLOAD_URL =
  "https://drive.google.com/uc?export=download&id=1-zLAbOT7pUYlkZq8Wvp8CtkrMVHY7PVd";

export function DownloadExtensionButton({
  className,
}: {
  className?: string;
}) {
  return (
    <div className="relative w-full sm:w-auto">
      <a
        href={EXTENSION_DOWNLOAD_URL}
        rel="noopener noreferrer"
        className={cn(
          "px-6 py-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-black text-xs uppercase tracking-widest hover:bg-primary/20 hover:border-primary/50 transition-colors",
          className,
        )}
      >
        <Download className="size-4" />
        <span>Download Extension</span>
      </a>
    </div>
  );
}
