import React, { useContext, useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import { CartContext } from "../context/CartContextProvider";

export default function Shop() {
  const { addToCart } = useContext(CartContext);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [maxPrice, setMaxPrice] = useState(2000);

  /* ------------------ FETCH PRODUCTS ------------------ */
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://dummyjson.com/products?limit=100");
        const data = await res.json();
        setProducts(data.products);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  /* ------------------ CATEGORIES ------------------ */
  const categories = useMemo(() => {
    const unique = new Set(products.map((p) => p.category));
    return ["all", ...unique];
  }, [products]);

  /* ------------------ FILTERED PRODUCTS ------------------ */
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = product.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCategory =
        category === "all" || product.category === category;

      const matchesPrice = product.price <= maxPrice;

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [products, search, category, maxPrice]);

  /* ------------------ LOADING ------------------ */
  if (loading) {
    return (
      <Container className="py-16 text-center text-gray-500">
        Loading products...
      </Container>
    );
  }

  /* ------------------ RENDER ------------------ */
  return (
    <section className="py-12">
      <Container>
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Filters */}
          <aside className="space-y-6">
            <h2 className="text-xl font-semibold">Filters</h2>

            {/* Search */}
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-4 py-2
              focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none"
            />

            {/* Category */}
            <div>
              <p className="mb-2 font-medium">Category</p>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Price */}
            <div>
              <p className="mb-2 font-medium">
                Max price: ${maxPrice}
              </p>
              <input
                type="range"
                min="0"
                max="2000"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(Number(e.target.value))
                }
                className="w-full accent-primary-500"
              />
            </div>
          </aside>

          {/* Products */}
          <div className="lg:col-span-3">
            {filteredProducts.length === 0 ? (
              <p className="text-center text-gray-500">
                No products found.
              </p>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="rounded-2xl border border-gray-200 bg-white p-4
                    hover:shadow-xl transition"
                  >
                    {/* CLICKABLE AREA */}
                    <Link to={`/products/${product.id}`}>
                      <div className="h-48 mb-4 overflow-hidden rounded-xl bg-gray-50">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="h-full w-full object-cover hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>

                      <h3 className="font-semibold truncate">
                        {product.title}
                      </h3>

                      <p className="text-sm text-gray-500 mb-2">
                        {product.category}
                      </p>
                    </Link>

                    <p className="font-semibold text-primary-500 mb-4">
                      ${product.price}
                    </p>

                    {/* ADD TO CART */}
                    <button
                      onClick={() =>
                        addToCart({
                          id: product.id,
                          title: product.title,
                          price: product.price,
                          thumbnail: product.thumbnail,
                        })
                      }
                      className="w-full rounded-lg bg-primary-500 text-white
                      py-2 hover:bg-primary-600 transition"
                    >
                      Add to cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
