import React from "react";
import { IconBagSvg, IconLensSvg, IconMenuSvg, LogoProfileSvg } from "../Svgs";
import { CartContext } from "../context/CartContext";
import Link from "next/link";
import UserMenu from "./UserMenu";
import AuthContext from "../../context/authContext";
import { auth } from "../../firebase/firebase";
import { useRouter } from "next/router";
import { useAuthUser } from "../../hooks/useAuthUser";

const NavBar = () => {
  const { push } = useRouter();

  const [search, setSearch] = React.useState(false);

  const { openCart } = React.useContext(CartContext);

  const { isLogged } = React.useContext(AuthContext);

  useAuthUser();

  const signOut = async () => {
    try {
      await auth.signOut();
      push("/auth/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className="navbar md:px-5 z-[2] absolute">
      <div className="navbar-start">
        <div className="dropdown lg:hidden" >
          <label tabIndex={0} className="btn btn-ghost btn-circle w-9" >
            <IconMenuSvg />
          </label>
          <ul className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-10">
            {!isLogged ? (
              <>
                <li>
                  <Link href="/auth/login" className="md:hidden">
                    Iniciar Sesión
                  </Link>
                </li>
                <li>
                  <Link href="/auth/register" className="md:hidden">
                    Registrarme
                  </Link>
                </li>
              </>
            ): (
              <li>
              <Link href="#" className="md:hidden">
                Mis compras
              </Link>
            </li>
            )}
            
            <li>
              <Link href="/store">Tienda</Link>
            </li>
            <li>
              <Link href="/questions">¿Cómo comprar?</Link>
            </li>
            <li>
              <Link href="#">Contacto</Link>
            </li>
            {isLogged && (
              <li>
                <button className="md:hidden" onClick={signOut}>
                  Cerrar Sesión
                </button>
              </li>
            )}
          </ul>
        </div>
        <div className={`hidden lg:block font-semibold`}>
          <ul className="flex gap-5">
            <li>
              <Link href="/store">Tienda</Link>
            </li>
            <li>
              <Link href="/questions">¿Cómo comprar?</Link>
            </li>
            <li>
              <Link href="#">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        {search ? (
          <input
            type="text"
            placeholder="Buscar"
            className="rounded-lg bg-white text-black px-2 border border-black"
          />
        ) : (
          <Link href="/" className="btn btn-ghost normal-case text-xl">
            SomosNyka
          </Link>
        )}
      </div>
      <div className="navbar-end flex gap-12 ">
        <button className=" w-6 h-6 hidden md:block ">
          <div className="indicator">
            <UserMenu isLogged={isLogged} signOut={signOut} />
          </div>
        </button>

        <button className="btn btn-ghost btn-circle w-6 ">
          <div
            className="indicator text-gray"
            onClick={() => setSearch(!search)}
          >
            <IconLensSvg />
          </div>
        </button>

        {isLogged && (
          <button
            className="btn btn-ghost btn-circle w-6 pr-3 md:p-0"
            onClick={() => openCart()}
          >
            <div className="indicator">
              <IconBagSvg color="currentColor" />

              <span className="badge badge-xs bg-[#8D4925] indicator-item"></span>
            </div>
          </button>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
