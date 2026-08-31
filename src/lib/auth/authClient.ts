import {
  clearSession,
  getAccessToken,
  getRefreshToken,
  setSession,
  updateTokens,
  type LoginResponse,
} from "./tokenStorage";

export type LoginResult =
  { ok: true; data: LoginResponse } | { ok: false; message: string };

export async function login(
  email: string,
  password: string,
  deviceId?: string,
): Promise<LoginResult> {
  let res: Response;
  try {
    res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, deviceId }),
    });
  } catch {
    return {
      ok: false,
      message:
        "Couldn't reach the server. Check your connection and try again.",
    };
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    return {
      ok: false,
      message: data?.message ?? "Login failed. Please try again.",
    };
  }

  setSession(data as LoginResponse);
  return { ok: true, data: data as LoginResponse };
}

export type RegisterResult =
  { ok: true; data: LoginResponse } | { ok: false; message: string };

export async function register(params: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  licenseKey?: string;
  referralCode?: string;
  referralClickedAt?: string;
  deviceId?: string;
}): Promise<RegisterResult> {
  let res: Response;
  try {
    res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(params),
    });
  } catch {
    return {
      ok: false,
      message:
        "Couldn't reach the server. Check your connection and try again.",
    };
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    return {
      ok: false,
      message: data?.message ?? "Registration failed. Please try again.",
    };
  }

  setSession(data as LoginResponse);
  return { ok: true, data: data as LoginResponse };
}

export type ForgotPasswordResult =
  { ok: true; message: string } | { ok: false; message: string };

export async function forgotPassword(
  email: string,
): Promise<ForgotPasswordResult> {
  let res: Response;
  try {
    res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
  } catch {
    return {
      ok: false,
      message:
        "Couldn't reach the server. Check your connection and try again.",
    };
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    return {
      ok: false,
      message: data?.message ?? "Something went wrong. Please try again.",
    };
  }

  return {
    ok: true,
    message: data?.message ?? "Check your email for a reset link.",
  };
}

export type ResetPasswordResult =
  { ok: true; message: string } | { ok: false; message: string };

export async function resetPassword(
  token: string,
  password: string,
): Promise<ResetPasswordResult> {
  let res: Response;
  try {
    res = await fetch("/api/auth/reset-password", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token, password }),
    });
  } catch {
    return {
      ok: false,
      message:
        "Couldn't reach the server. Check your connection and try again.",
    };
  }

  const data = await res.json().catch(() => null);

  if (!res.ok) {
    return {
      ok: false,
      message: data?.message ?? "This reset link is invalid or has expired.",
    };
  }

  return { ok: true, message: data?.message ?? "Password reset successfully." };
}

// Dedupes concurrent refresh attempts so multiple 401s in flight only hit
// /api/auth/refresh once, mirroring the extension's httpClient.ts pattern.
let refreshPromise: Promise<boolean> | null = null;

async function doRefresh(): Promise<boolean> {
  const refreshToken = getRefreshToken();
  if (!refreshToken) return false;

  try {
    const res = await fetch("/api/auth/refresh", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });

    if (!res.ok) {
      clearSession();
      return false;
    }

    const data = await res.json();
    updateTokens({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    });
    return true;
  } catch {
    return false;
  }
}

export function refreshSession(): Promise<boolean> {
  if (!refreshPromise) {
    refreshPromise = doRefresh().finally(() => {
      refreshPromise = null;
    });
  }
  return refreshPromise;
}

export async function logout(): Promise<void> {
  const refreshToken = getRefreshToken();
  clearSession();

  if (!refreshToken) return;

  try {
    await fetch("/api/auth/logout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken }),
    });
  } catch {
    // Best-effort — the local session is already cleared either way.
  }
}

export function hasSession(): boolean {
  return Boolean(getAccessToken());
}

// Unlike hasSession(), this actually confirms the token still works against
// the backend (refreshing it first if needed) rather than trusting local
// presence — used by SiteNav to decide between "Log In" and "Dashboard".
export async function validateSession(): Promise<boolean> {
  if (!getAccessToken() && !getRefreshToken()) return false;

  try {
    const res = await authFetch("/api/users/stats");
    if (!res.ok) {
      clearSession();
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

// Attaches the access token to a request against the backend, and retries
// once after a silent refresh if the server responds 401.
export async function authFetch(
  path: string,
  options: RequestInit = {},
): Promise<Response> {
  const doFetch = () => {
    const token = getAccessToken();
    const headers = new Headers(options.headers);
    if (token) headers.set("Authorization", `Bearer ${token}`);
    return fetch(path, { ...options, headers });
  };

  let res = await doFetch();

  if (res.status === 401) {
    const refreshed = await refreshSession();
    if (refreshed) {
      res = await doFetch();
    }
  }

  return res;
}
