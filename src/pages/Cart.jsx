// import { useContext, useMemo } from "react";
// import { CartContext } from "../context/CartContextProvider";
// import Container from "../components/Container";

// export default function Cart() {
//   const { cart } = useContext(CartContext);

//   const subtotal = useMemo(
//     () => cart.reduce((acc, item) => acc + Number(item.price || 0), 0),
//     [cart],
//   );

//   const shipping = cart.length > 0 ? 10 : 0;
//   const total = subtotal + shipping;

//   return (
//     <section className="py-8 sm:py-12">
//       <Container className="px-4 sm:px-6 lg:px-8">
//         <div className="grid gap-8 lg:grid-cols-3">
//           {/* Cart items */}
//           <div className="lg:col-span-2">
//             <div className="flex items-end justify-between gap-4">
//               <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
//                 Your cart
//               </h1>
//               <p className="text-sm text-gray-500">
//                 {cart.length} {cart.length === 1 ? "item" : "items"}
//               </p>
//             </div>

//             <div className="mt-6 rounded-2xl border border-gray-200 bg-white">
//               {cart.length === 0 ? (
//                 <div className="p-6 sm:p-8 text-center">
//                   <p className="text-gray-600">Your cart is empty.</p>
//                 </div>
//               ) : (
//                 <div className="max-h-[60vh] overflow-y-auto">
//                   <ul className="divide-y divide-gray-200">
//                     {cart.map((item) => (
//                       <li
//                         key={item.id}
//                         className="p-4 sm:p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
//                       >
//                         <div className="flex items-center gap-4">
//                           <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
//                             <img
//                               src={item.images?.[0]}
//                               alt={item.name || "Cart item"}
//                               className="h-full w-full object-cover"
//                               loading="lazy"
//                             />
//                           </div>

//                           <div className="min-w-0">
//                             <p className="truncate text-base font-medium text-gray-900">
//                               {item.name}
//                             </p>
//                             <p className="mt-1 text-sm text-gray-500">
//                               ID: {item.id}
//                             </p>
//                           </div>
//                         </div>

//                         <div className="flex items-center justify-between sm:justify-end gap-6">
//                           <p className="text-sm text-gray-600 sm:hidden">
//                             Price
//                           </p>
//                           <p className="text-lg font-semibold text-gray-900">
//                             ${Number(item.price || 0).toFixed(2)}
//                           </p>
//                         </div>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* Order summary */}
//           <aside className="lg:sticky lg:top-6 h-fit">
//             <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6">
//               <h2 className="text-lg font-semibold text-gray-900">
//                 Order summary
//               </h2>

//               <div className="mt-4 space-y-3 text-sm">
//                 <div className="flex items-center justify-between text-gray-700">
//                   <span>Subtotal</span>
//                   <span className="font-medium text-gray-900">
//                     ${subtotal.toFixed(2)}
//                   </span>
//                 </div>

//                 <div className="flex items-center justify-between text-gray-700">
//                   <span>Shipping</span>
//                   <span className="font-medium text-gray-900">
//                     ${shipping.toFixed(2)}
//                   </span>
//                 </div>

//                 <div className="h-px bg-gray-200" />

//                 <div className="flex items-center justify-between">
//                   <span className="text-base font-semibold text-gray-900">
//                     Total
//                   </span>
//                   <span className="text-base font-semibold text-gray-900">
//                     ${total.toFixed(2)}
//                   </span>
//                 </div>
//               </div>

//               <button
//                 type="button"
//                 disabled={cart.length === 0}
//                 className="mt-6 w-full cursor-pointer rounded-xl bg-primary-400 hover:bg-primary-500  px-4 py-3 text-sm font-semibold text-white shadow-sm transition disabled:cursor-not-allowed disabled:opacity-50"
//               >
//                 Checkout
//               </button>

//               <p className="mt-3 text-xs text-gray-500">
//                 Taxes calculated at checkout (if applicable).
//               </p>
//             </div>
//           </aside>
//         </div>
//       </Container>
//     </section>
//   );
// }



import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContextProvider";
import Container from "../components/Container";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

export default function Cart() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  /* ------------------ CALCULATIONS ------------------ */
  const totalItems = useMemo(
    () => cart.reduce((acc, item) => acc + item.quantity, 0),
    [cart]
  );

  const subtotal = useMemo(
    () =>
      cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      ),
    [cart]
  );

  const shipping = cart.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  /* ------------------ RENDER ------------------ */
  return (
    <section className="py-8 sm:py-12">
      <Container className="px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Cart items */}
          <div className="lg:col-span-2">
            <div className="flex items-end justify-between gap-4">
              <h1 className="text-2xl font-semibold sm:text-3xl">
                Your cart
              </h1>
              <p className="text-sm text-gray-500">
                {totalItems} {totalItems === 1 ? "item" : "items"}
              </p>
            </div>

            <div className="mt-6 rounded-2xl border border-gray-200 bg-white">
              {cart.length === 0 ? (
                <div className="p-8 text-center text-gray-600">
                  Your cart is empty.
                </div>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {cart.map((item) => (
                    <li
                      key={item.id}
                      className="p-4 sm:p-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      {/* Product */}
                      <div className="flex items-center gap-4">
                        <div className="h-20 w-20 overflow-hidden rounded-xl border bg-gray-50">
                          <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="h-full w-full object-cover"
                            loading="lazy"
                          />
                        </div>

                        <div className="min-w-0">
                          <p className="truncate font-medium text-gray-900">
                            {item.title}
                          </p>
                          <p className="text-sm text-gray-500">
                            ${item.price.toFixed(2)}
                          </p>
                        </div>
                      </div>

                      {/* Quantity + Price */}
                      <div className="flex items-center justify-between gap-6 sm:justify-end">
                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 border rounded-lg px-2 py-1">
                          <button
                            onClick={() =>
                              decreaseQuantity(item.id)
                            }
                            className="p-1 hover:text-primary-500 transition"
                          >
                            <FaMinus size={12} />
                          </button>

                          <span className="w-6 text-center text-sm font-medium">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() =>
                              increaseQuantity(item.id)
                            }
                            className="p-1 hover:text-primary-500 transition"
                          >
                            <FaPlus size={12} />
                          </button>
                        </div>

                        {/* Item total */}
                        <p className="text-lg font-semibold text-gray-900">
                          $
                          {(item.price * item.quantity).toFixed(
                            2
                          )}
                        </p>

                        {/* Remove */}
                        <button
                          onClick={() =>
                            removeFromCart(item.id)
                          }
                          className="text-red-500 hover:text-red-600 transition"
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Order summary */}
          <aside className="lg:sticky lg:top-6 h-fit">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h2 className="text-lg font-semibold">
                Order summary
              </h2>

              <div className="mt-4 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="h-px bg-gray-200" />

                <div className="flex justify-between text-base font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                disabled={cart.length === 0}
                className="mt-6 w-full rounded-xl bg-primary-400 hover:bg-primary-500
                px-4 py-3 text-sm font-semibold text-white transition
                disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Checkout
              </button>

              <p className="mt-3 text-xs text-gray-500">
                Taxes calculated at checkout.
              </p>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  );
}
