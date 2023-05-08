import React from "react";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Cart from "../Cart";

const Layout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <div className="static bg-green-500">
        <Cart open={false} />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
