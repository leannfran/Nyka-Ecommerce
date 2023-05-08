import React from "react";
import { slide as Menu } from "react-burger-menu";

const Cart = ({ closeCartSideBar, open }) => {
  return (
    <Menu isOpen={open} right>
      <div
        className={`h-96 w-96 flex flex-col py-6 bg-white shadow-xl overflow-y-scroll ${
          open ? "" : ""
        }`}
      >
       
      </div>
    </Menu>
  );
};

export default Cart;
