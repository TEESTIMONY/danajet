import { apiRequest } from "./client";

export async function subscribeToNewsletter(email) {
  const cleanEmail = String(email || "").trim();
  if (!cleanEmail) {
    throw new Error("Enter your email address.");
  }

  return apiRequest("/api/newsletter-subscriptions/", {
    method: "POST",
    body: {
      email: cleanEmail,
      source: "Footer newsletter",
      is_active: true,
    },
  });
}
