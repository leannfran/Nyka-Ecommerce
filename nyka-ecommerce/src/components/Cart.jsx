import React from "react";
import Link from "next/link";
import CardCart from "./cards/CardCart";
import InputPostalCode from "./inputs/InputPostalCode";
import CardPaymentMethod from "./cards/CardPaymentMethod";
import { IconCloseSvg } from "./Svgs";
import { CartContext } from "./context/CartContext";

const Cart = () => {
  const { isCartOpen, closeCart } = React.useContext(CartContext);

  console.log(isCartOpen);
  return (
    <>
    {isCartOpen && (<div className="fixed z-[2] bg-[#ffac5f5d] opacity-50 w-screen h-screen right-0 cursor-pointer" onClick={() => closeCart()}></div>)}
   
      <div
        id="without-scroll"
        className={`h-screen fixed z-[3] right-0 bg-white shadow-xl rounded-l-lg overflow-scroll text-black duration-300 ease-in-out ${
          isCartOpen ? "w-[600px] p-6" : "w-0 p-0"
        }`}
      >
        <div className={`flex flex-col gap-5 ${
          isCartOpen ? "block" : "hidden"
        }`}>
          <div className="flex items-center justify-between">
            <h2 className="font-normal text-3xl">Carrito de compras</h2>
            <div onClick={() => closeCart()}>
              <IconCloseSvg />
            </div>
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
    </>
  );
};

export default Cart;
