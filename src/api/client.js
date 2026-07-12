function defaultApiBaseUrl() {
  if (typeof window === "undefined") return "http://127.0.0.1:8000";
  const host = window.location.hostname === "localhost" ? "localhost" : "127.0.0.1";
  return `http://${host}:8000`;
}

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || defaultApiBaseUrl();

export function resolveMediaUrl(value) {
  if (!value) return "";
  const rawValue = String(value);
  if (rawValue.startsWith("blob:") || rawValue.startsWith("data:")) return rawValue;
  if (rawValue.startsWith("/assets/")) return rawValue;

  try {
    const url = new URL(rawValue);
    if (url.pathname.includes("/api/media-assets/media/")) {
      url.pathname = url.pathname.replace("/api/media-assets/media/", "/media/");
      return url.toString();
    }
    return rawValue;
  } catch {
    // Fall through for relative paths.
  }

  const cleaned = rawValue
    .replace(/^\/api\/media-assets\/media\//, "/media/")
    .replace(/^api\/media-assets\/media\//, "media/");

  if (cleaned.startsWith("/media/")) return `${API_BASE_URL}${cleaned}`;
  if (cleaned.startsWith("media/")) return `${API_BASE_URL}/${cleaned}`;
  if (cleaned.startsWith("uploads/")) return `${API_BASE_URL}/media/${cleaned}`;
  return cleaned;
}

function getCookie(name) {
  if (typeof document === "undefined") return "";
  return document.cookie
    .split(";")
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split("=")
    .slice(1)
    .join("=") || "";
}

async function ensureCsrfToken() {
  let token = getCookie("csrftoken");
  if (token) return decodeURIComponent(token);

  const response = await fetch(`${API_BASE_URL}/api/auth/csrf/`, {
    credentials: "include",
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error("Unable to prepare secure request.");
  }

  token = getCookie("csrftoken");
  return token ? decodeURIComponent(token) : "";
}

export async function apiRequest(path, options = {}) {
  const method = (options.method || "GET").toUpperCase();
  const headers = {
    Accept: "application/json",
    ...(options.headers || {}),
  };

  const requestOptions = {
    ...options,
    method,
    headers,
    credentials: "include",
  };

  if (options.body instanceof FormData) {
    requestOptions.body = options.body;
  } else if (options.body !== undefined) {
    headers["Content-Type"] = "application/json";
    requestOptions.body = JSON.stringify(options.body);
  }

  if (!["GET", "HEAD", "OPTIONS"].includes(method)) {
    const csrfToken = await ensureCsrfToken();
    if (csrfToken) headers["X-CSRFToken"] = csrfToken;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, requestOptions);
  const contentType = response.headers.get("content-type") || "";
  const data = contentType.includes("application/json") ? await response.json() : null;

  if (!response.ok) {
    const message = data?.detail || Object.values(data || {}).flat().join(" ") || `API request failed with ${response.status}`;
    throw new Error(message);
  }

  return data;
}

export function extractResults(data) {
  return data?.results || data || [];
}

export async function apiListAll(path) {
  let nextPath = path;
  const results = [];

  while (nextPath) {
    const data = await apiRequest(nextPath);
    if (!data?.results) return extractResults(data);

    results.push(...data.results);
    if (!data.next) {
      nextPath = "";
    } else {
      const nextUrl = new URL(data.next);
      nextPath = `${nextUrl.pathname}${nextUrl.search}`;
    }
  }

  return results;
}
