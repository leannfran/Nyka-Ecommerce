import React from "react";
import { IconBagSvg, IconLensSvg, IconMenuSvg } from "./Svgs";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-start">
        <div className="dropdown ">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <IconMenuSvg />
          </label>
          <ul
            tabIndex={0}
            className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
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
        <a className="btn btn-ghost normal-case text-xl">SomosNyka</a>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <IconLensSvg />
        </button>

        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <IconBagSvg color="currentColor"/>

            <span className="badge badge-xs bg-[#8D4925] indicator-item"></span>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
