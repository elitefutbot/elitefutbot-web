"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "error";

export function DownloadExtensionButton() {
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
    <div className="relative">
      <button
        type="button"
        onClick={handleDownload}
        disabled={status === "loading"}
        className="shrink-0 px-3 sm:px-4 py-2 rounded-full bg-primary text-dark font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform disabled:opacity-60 disabled:hover:scale-100"
      >
        {status === "loading" ? (
          "Preparing…"
        ) : (
          <>
            <span className="hidden sm:inline">Download Extension</span>
            <span className="sm:hidden">Download</span>
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
