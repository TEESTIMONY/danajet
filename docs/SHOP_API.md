# Shop API contract

The React shop uses `VITE_API_BASE_URL` and expects these Django REST Framework endpoints:

- `GET /api/shop/products/`
- `GET /api/shop/products/<slug>/`

The list endpoint may return either an array or a paginated DRF response with `results`.

## Product fields

```json
{
  "id": 1,
  "slug": "little-wings-big-dreams",
  "title": "Little Wings, Big Dreams",
  "subtitle": "A bright story about finding your own way",
  "category": "childrens",
  "category_label": "Children's book",
  "author": "Dana A.",
  "price": "14.99",
  "compare_at_price": null,
  "currency": "USD",
  "rating": 4.9,
  "review_count": 18,
  "inventory": 24,
  "badge": "Bestseller",
  "cover": "sky",
  "accent": "#ef5b4f",
  "is_featured": true,
  "description": "Product description",
  "features": ["32 full-color pages"]
}
```

Until the API is configured, `src/api/shop.js` returns the mock data from `src/data/products.js`.
