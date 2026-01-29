// import React, { createContext, useEffect, useState } from "react";

// export const CartContext = createContext();

// export default function CartContextProvider({ children }) {
//     const [cart, setCart] = useState(() => {
//     const storedCart = localStorage.getItem("cart item");
//     return storedCart ? JSON.parse(storedCart) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("cart item", JSON.stringify(cart));
//   }, [cart]);

//   function addToCart(product) {
//       setCart([...cart, product]);
//   }

//   return (
//     <CartContext.Provider value={{ cart, addToCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// }



import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  /* ------------------ PERSIST ------------------ */
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  /* ------------------ ADD TO CART ------------------ */
  function addToCart(product) {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });
  }

  /* ------------------ REMOVE ITEM ------------------ */
  function removeFromCart(productId) {
    setCart((prevCart) =>
      prevCart.filter((item) => item.id !== productId)
    );
  }

  /* ------------------ INCREASE QUANTITY ------------------ */
  function increaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  /* ------------------ DECREASE QUANTITY ------------------ */
  function decreaseQuantity(productId) {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  /* ------------------ CLEAR CART (OPTIONAL) ------------------ */
  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
