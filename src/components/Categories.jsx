import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import { IoStarSharp } from "react-icons/io5";

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
            c.slug === "sunglasses",
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
          `https://dummyjson.com/products/category/${selectedSlug}`,
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
    <section className="bg-primary-50 py-12 ">
      <Container>
        {/* Categories */}
        <div className="flex gap-4 flex-wrap mb-4 items-center justify-center">
          {categories.map((c) => (
            <button
              key={c.slug}
              onClick={() => {
                setSelectedSlug(c.slug);
              }}
              className={` border-b-2  hover:border-b-primary-500 duration-300 transition-all cursor-pointer  ${
                selectedSlug === c.slug
                  ? "border-b-primary-500"
                  : "border-b-transparent "
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Products */}
        <div className="flex gap-2 items-center justify-center flex-wrap">
          {loading
            ? //skeleton loading
              Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="inline-block h-[361px]">
                  <div className=" border border-primary-200 p-4 w-fit flex flex-col gap-2">
                    <div className="w-[200px] aspect-square flex items-center justify-center bg-white">
                      <div className="w-full h-full bg-gray-200 animate-pulse" />
                    </div>
                    <div className="w-full h-4 bg-gray-200 animate-pulse" />
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-gray-200 animate-pulse" />
                    </div>
                    <div className="w-4 h-4 bg-gray-200 animate-pulse" />
                    <div className="inline-block w-fit bg-gray-200  px-2 py-1 animate-pulse"></div>
                  </div>
                </div>
              ))
            : products.map((p) => (
                <Link
                  to={`/products/${p.id}`}
                  key={p.id}
                  className="inline-block"
                >
                  <div className=" border border-primary-200 p-4 w-fit flex flex-col gap-2">
                    <div className="w-[200px] aspect-square flex items-center justify-center bg-white">
                      <img
                        src={p.images[0]}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3>
                      {p.title.split(" ").length > 4
                        ? p.title.split(" ").slice(0, 4).join(" ") + "…"
                        : p.title}
                    </h3>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) =>
                        i < Math.round(p.rating) ? (
                          <IoStarSharp key={i} className="text-yellow-400" />
                        ) : (
                          <IoStarSharp key={i} className="text-gray-300" />
                        ),
                      )}
                    </div>
                    <div>${p.price}</div>
                    <button
                      to={`/products/${p.id}/cart`}
                      className="inline-block w-fit bg-primary-500 text-white px-2 py-1 cursor-pointer"
                    >
                      More Details
                    </button>
                  </div>
                </Link>
              ))}
        </div>
      </Container>
    </section>
  );
}
