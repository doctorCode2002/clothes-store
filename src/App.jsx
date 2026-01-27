import React from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <>
      <Header />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </main>
      <Footer/>
    </>
  );
}
