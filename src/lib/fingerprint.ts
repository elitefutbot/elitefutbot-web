const DEVICE_ID_KEY = "_efb_did";

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16).padStart(8, "0");
}

function getCanvasFingerprint(): string {
  try {
    const canvas = document.createElement("canvas");
    canvas.width = 120;
    canvas.height = 30;
    const ctx = canvas.getContext("2d");
    if (!ctx) return "nocanvas";
    ctx.textBaseline = "top";
    ctx.font = "14px 'Arial'";
    ctx.fillStyle = "#f60";
    ctx.fillRect(10, 1, 62, 20);
    ctx.fillStyle = "#069";
    ctx.fillText("EliteFutBot,dev#1", 2, 15);
    ctx.fillStyle = "rgba(102, 204, 0, 0.7)";
    ctx.fillText("EliteFutBot,dev#1", 4, 17);
    return simpleHash(canvas.toDataURL());
  } catch {
    return "canvaserr";
  }
}

export function getDeviceId(): string {
  if (typeof window === "undefined") return "server";

  try {
    const stored = window.localStorage.getItem(DEVICE_ID_KEY);
    if (stored && stored.length > 8) {
      return stored;
    }
  } catch {
    // localStorage might fail in restricted iframe / incognito modes
  }

  // Generate a stable fingerprint from available hardware/browser properties
  const components = [
    navigator.userAgent || "",
    navigator.language || "",
    screen.colorDepth || "",
    screen.width || "",
    screen.height || "",
    screen.pixelDepth || "",
    Intl.DateTimeFormat().resolvedOptions().timeZone || "",
    getCanvasFingerprint(),
  ];

  const entropyHash = simpleHash(components.join("~~~"));
  const randomPart = Math.random().toString(36).substring(2, 10);
  const deviceId = `dev_${entropyHash}_${randomPart}`;

  try {
    window.localStorage.setItem(DEVICE_ID_KEY, deviceId);
  } catch {
    // Ignore storage errors
  }

  return deviceId;
}
