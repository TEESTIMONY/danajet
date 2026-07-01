import { mockProducts } from "../data/products";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

async function request(path) {
  if (!API_BASE_URL) return null;

  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Shop API request failed with ${response.status}`);
  }

  return response.json();
}

export async function getProducts() {
  try {
    const data = await request("/api/shop/products/");
    return data?.results || data || mockProducts;
  } catch {
    return mockProducts;
  }
}

export async function getProduct(slug) {
  try {
    const data = await request(`/api/shop/products/${slug}/`);
    return data || mockProducts.find((product) => product.slug === slug);
  } catch {
    return mockProducts.find((product) => product.slug === slug);
  }
}
