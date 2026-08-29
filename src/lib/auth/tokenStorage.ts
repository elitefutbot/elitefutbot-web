export interface SessionUser {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  isPaid: boolean;
  isTrialActive: boolean;
  hasAccess: boolean;
}

export interface LoginResponse {
  _id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  purchases: number;
  profits: number;
  isPaid: boolean;
  createdAt: string;
  isTrialActive: boolean;
  hasAccess: boolean;
  token: string;
  refreshToken: string;
}

const ACCESS_TOKEN_KEY = "EliteFutBot_access_token";
const REFRESH_TOKEN_KEY = "EliteFutBot_refresh_token";
const USER_KEY = "EliteFutBot_user";

// Next.js renders on the server too, where `window` doesn't exist — every
// read/write here must no-op there rather than throw.
const hasStorage = () => typeof window !== "undefined";

export function getAccessToken(): string | null {
  if (!hasStorage()) return null;
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getRefreshToken(): string | null {
  if (!hasStorage()) return null;
  return window.localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function getUser(): SessionUser | null {
  if (!hasStorage()) return null;
  const raw = window.localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as SessionUser;
  } catch {
    return null;
  }
}

export function setSession(data: LoginResponse): void {
  if (!hasStorage()) return;
  window.localStorage.setItem(ACCESS_TOKEN_KEY, data.token);
  window.localStorage.setItem(REFRESH_TOKEN_KEY, data.refreshToken);
  const user: SessionUser = {
    id: data._id,
    name: data.name,
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    createdAt: data.createdAt,
    isPaid: data.isPaid,
    isTrialActive: data.isTrialActive,
    hasAccess: data.hasAccess,
  };
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
}

export function updateTokens(tokens: {
  accessToken: string;
  refreshToken: string;
}): void {
  if (!hasStorage()) return;
  window.localStorage.setItem(ACCESS_TOKEN_KEY, tokens.accessToken);
  window.localStorage.setItem(REFRESH_TOKEN_KEY, tokens.refreshToken);
}

export function clearSession(): void {
  if (!hasStorage()) return;
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.localStorage.removeItem(USER_KEY);
}
