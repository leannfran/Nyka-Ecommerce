import React from "react";
import { slide as Menu } from "react-burger-menu";

import Link from "next/link";
import CardCart from "./cards/CardCart";
import InputPostalCode from "./inputs/InputPostalCode";
import CardPaymentMethod from "./cards/CardPaymentMethod";
import { IconCloseSvg } from "./Svgs";

const Cart = ({ closeCartSideBar, open }) => {
  return (
    <Menu isOpen={false} right width={600}>
      <div
      id="without-scroll"
        className={`h-screen p-6 bg-white shadow-xl rounded-l-lg overflow-scroll text-black ${
          open ? "" : ""
        }`}
      >
        <div className="flex flex-col gap-5 ">
          <div className="flex items-center justify-between">
          <h2 className="font-normal text-3xl">Carrito de compras</h2>
          <IconCloseSvg/>
          </div>
          <CardCart />
          <CardCart />
          <CardCart />
          <button className="font-bold text-lg border rounded p-2 shadow-sm w-56 m-auto">
            Agregar mas productos
          </button>
          <h3 className="font-bold text-lg">Calcular envío</h3>
          <div>
            <div className="flex items-center gap-3">
              <InputPostalCode />
              <Link href="#" className="underline block">
                Consultar mi código postal
              </Link>
            </div>
          </div>
          <h3 className="font-bold text-lg">Método de pago</h3>
          <div className="flex flex-col gap-4 font-bold">
            <CardPaymentMethod />
            <CardPaymentMethod />
          </div>
        </div>
      </div>
    </Menu>
  );
};

export default Cart;
