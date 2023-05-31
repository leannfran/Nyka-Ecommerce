import React from "react";
import NavBar from "../navbar/NavBar";
import Footer from "../Footer";
import Cart from "../Cart";
import CartProvider from "../context/CartContext";

const Layout = ({ children }) => {


  return (
    <CartProvider>
      <NavBar />

      <Cart />

      {children}
      <Footer />
    </CartProvider>
  );
};

export default Layout;
