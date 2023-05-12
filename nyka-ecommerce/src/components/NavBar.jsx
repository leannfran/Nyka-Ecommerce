import React from "react";
import { IconBagSvg, IconLensSvg, IconMenuSvg, LogoProfileSvg } from "./Svgs";
import  {CartContext}  from "../components/context/CartContext";
import Link from "next/link";


const NavBar = () => {

  const { openCart, } = React.useContext(CartContext);
  
  return (
    <nav className="navbar md:px-5 z-[2] absolute">
      <div className="navbar-start">
        <div className="dropdown md:hidden">
          <label tabIndex={0} className="btn btn-ghost btn-circle w-9">
            <IconMenuSvg />
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10"
          >
            <li>
              <a>Perfil</a>
            </li>
            <li>
              <a>Tienda</a>
            </li>
            <li>
              <a>¿Cómo comprar?</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
        <div className="hidden md:block font-semibold text-white">
          <ul className="flex gap-5">
            <li>
              <a>Tienda</a>
            </li>
            <li>
              <a>¿Cómo comprar?</a>
            </li>
            <li>
              <a>Contacto</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost normal-case text-xl">SomosNyka</Link>
      </div>
      <div className="navbar-end flex gap-8 ">
        <button className="btn btn-ghost btn-circle w-6 hidden md:block ">
          <div className="indicator  ">
            <LogoProfileSvg color="currentColor" />
          </div>
        </button>

        <button className="btn btn-ghost btn-circle w-6 ">
          <div className="indicator  ">
            <IconLensSvg />
          </div>
        </button>

        <button className="btn btn-ghost btn-circle w-6 " onClick={() => openCart()}>
          <div className="indicator">
            <IconBagSvg color="currentColor" />

            <span className="badge badge-xs bg-[#8D4925] indicator-item"></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
