// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Container from "../components/Container";
// import { CartContext } from "../context/CartContextProvider";
// import ProductSkeleton from "../components/ProductSkeleton";

// export default function ProductPage() {
//   const { id } = useParams();
//   const { cart, addToCart } = useContext(CartContext);

//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   console.log(cart);
//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await fetch(`https://dummyjson.com/products/${id}`);
//         const data = await res.json();
//         setProduct(data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   // skeleton loading
//   if (loading) {
//     return <ProductSkeleton />;
//   }

//   if (!product) {
//     return <div>Product not found</div>;
//   }

//   return (
//     <Container className="flex justify-center gap-4 pt-16">
//       <div className="w-1/2 flex items-center justify-center flex-col">
//         <div className="mb-4 w-1/2">
//           <img
//             src={product.images?.[0]}
//             alt={product.title}
//             className="w-full h-full object-cover border-2 border-gray-200 "
//             id="main-image"
//           />
//         </div>
//         <div className="flex gap-2 items-center justify-between w-1/2">
//           {product.images.map((image, index) => (
//             <img
//               key={index}
//               src={image}
//               alt={product.title}
//               className="w-1/5 border-2 border-gray-200 cursor-pointer"
//               onClick={() => {
//                 document.getElementById("main-image").src = image;
//               }}
//             />
//           ))}
//         </div>
//       </div>

//       <div className="w-1/2 pt-16">
//         <h2 className="text-6xl font-bold text-primary-500 mb-3">
//           {product.title}
//         </h2>
//         <p className="text-3xl font-bold text-primary-500 mb-3">
//           {product.price}$
//         </p>
//         <p className="w-full mb-3 text-gray-500">{product.description}</p>
//         <button
//           onClick={() => addToCart(product)}
//           className="bg-primary-500 text-white px-4 py-2 rounded-lg cursor-pointer"
//         >
//           add to cart
//         </button>
//       </div>
//     </Container>
//   );
// }



import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import { CartContext } from "../context/CartContextProvider";
import ProductSkeleton from "../components/ProductSkeleton";

export default function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProduct(data);
        setMainImage(data.images?.[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  /* ------------------ LOADING ------------------ */
  if (loading) {
    return <ProductSkeleton />;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  /* ------------------ RENDER ------------------ */
  return (
    <Container className="flex justify-center gap-10 pt-16">
      {/* Images */}
      <div className="w-1/2 flex flex-col items-center">
        <div className="mb-4 w-1/2">
          <img
            src={mainImage}
            alt={product.title}
            className="w-full h-full object-cover border-2 border-gray-200 rounded-lg"
          />
        </div>

        <div className="flex gap-2 w-1/2">
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.title}
              onClick={() => setMainImage(image)}
              className={`w-1/5 border-2 rounded cursor-pointer transition
                ${
                  mainImage === image
                    ? "border-primary-500"
                    : "border-gray-200 hover:border-primary-400"
                }
              `}
            />
          ))}
        </div>
      </div>

      {/* Details */}
      <div className="w-1/2 pt-10">
        <h2 className="text-5xl font-bold text-primary-500 mb-3">
          {product.title}
        </h2>

        <p className="text-3xl font-semibold text-primary-500 mb-4">
          ${product.price}
        </p>

        <p className="mb-6 text-gray-500 leading-relaxed">
          {product.description}
        </p>

        <button
          onClick={() =>
            addToCart({
              id: product.id,
              title: product.title,
              price: product.price,
              thumbnail: product.thumbnail,
            })
          }
          className="bg-primary-500 text-white px-6 py-3 rounded-lg
          hover:bg-primary-600 hover:scale-105
          transition-all duration-300"
        >
          Add to Cart
        </button>
      </div>
    </Container>
  );
}
