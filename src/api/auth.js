import { apiRequest } from "./client";

const CART_SESSION_KEY = "danajet-api-cart-session";

function getCartSessionKey() {
  if (typeof window === "undefined") return "";
  return localStorage.getItem(CART_SESSION_KEY) || "";
}

function normalizeUser(payload) {
  if (!payload) return null;
  if (Object.prototype.hasOwnProperty.call(payload, "user")) return payload.user || null;
  return payload;
}

export async function getCurrentUser() {
  try {
    return normalizeUser(await apiRequest("/api/auth/me/"));
  } catch {
    return null;
  }
}

export async function loginUser(credentials) {
  const payload = await apiRequest("/api/auth/login/", {
    method: "POST",
    body: { ...credentials, cart_session_key: getCartSessionKey() },
  });
  return normalizeUser(payload);
}

export async function registerUser(details) {
  const payload = await apiRequest("/api/auth/register/", {
    method: "POST",
    body: { ...details, cart_session_key: getCartSessionKey() },
  });
  return normalizeUser(payload);
}

export async function logoutUser() {
  await apiRequest("/api/auth/logout/", { method: "POST" });
}
