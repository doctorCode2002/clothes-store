import { useEffect, useState } from "react";

const DEFAULT_CATEGORY = "mens-shirts";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(DEFAULT_CATEGORY);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products/categories");
        const data = await res.json(); // this method will convert the json data to js object
        const clothingCategories = data.filter(
          (c) =>
            c.slug.startsWith("mens-") ||
            c.slug.startsWith("womens-") ||
            c.slug === "tops" ||
            c.slug === "sunglasses"
        );

        setCategories(clothingCategories);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch products (runs immediately because selectedSlug is preset)
  useEffect(() => {
    if (!selectedSlug) return;

    const fetchProducts = async () => {
      setLoading(true);

      try {
        const res = await fetch(
          `https://dummyjson.com/products/category/${selectedSlug}`
        );
        const data = await res.json();
        setProducts(data.products || []);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedSlug]);

  return (
    <div>
      {/* Categories */}
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
        {categories.map((c) => (
          <button
            key={c.slug}
            onClick={() => setSelectedSlug(c.slug)}
            style={{
              padding: "8px 12px",
              borderRadius: 10,
              border: "1px solid #ccc",
              background: selectedSlug === c.slug ? "#000" : "transparent",
              color: selectedSlug === c.slug ? "#fff" : "#000",
              cursor: "pointer",
            }}
          >
            {c.name}
          </button>
        ))}
      </div>

      {/* Products */}
      <div style={{ marginTop: 20 }}>
        {loading ? (
          <p>Loading products...</p>
        ) : (
          products.map((p) => (
            <div key={p.id}>
              <strong>{p.title}</strong> — ${p.price}
              <img src={p.images[0]} alt="" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}


