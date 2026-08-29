"use client";

import { useState } from "react";
import { Download, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Status = "idle" | "loading" | "error";

export function DownloadExtensionButton({
  className,
}: {
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleDownload = async () => {
    setStatus("loading");
    setError(null);

    let res: Response;
    try {
      res = await fetch("/api/download");
    } catch {
      setError(
        "Couldn't reach the server. Check your connection and try again.",
      );
      setStatus("error");
      return;
    }

    if (!res.ok) {
      const data = await res.json().catch(() => null);
      setError(data?.message ?? "Download failed. Please try again.");
      setStatus("error");
      return;
    }

    const blob = await res.blob();
    const disposition = res.headers.get("Content-Disposition") ?? "";
    const filename =
      disposition.match(/filename="([^"]+)"/)?.[1] ?? "elite-fut-sniper.zip";

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);

    setStatus("idle");
  };

  return (
    <div className="relative w-full sm:w-auto">
      <button
        type="button"
        onClick={handleDownload}
        disabled={status === "loading"}
        className={cn(
          "px-6 py-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 text-primary font-black text-xs uppercase tracking-widest hover:bg-primary/20 hover:border-primary/50 transition-colors disabled:opacity-60 disabled:hover:bg-primary/10",
          className,
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            <span>Preparing…</span>
          </>
        ) : (
          <>
            <Download className="size-4" />
            <span>Download Extension</span>
          </>
        )}
      </button>
      {status === "error" && error ? (
        <p
          role="alert"
          className="absolute top-full right-0 mt-2 w-56 text-right text-[10px] text-red-500"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
