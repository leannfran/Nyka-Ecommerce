import { onAuthStateChanged } from "firebase/auth";
import { useContext, useEffect } from "react";
import { auth } from "../firebase/firebase";
import { useRouter } from "next/router";
import AuthContext from "../context/authContext";

// Hook para verificar si el usuario esta logueado
export function useAuthUser() {
  const { push, pathname } = useRouter();

  const { setIsLogged } = useContext(AuthContext);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      let userLogged = user === null ? false : true;
      if (!userLogged) {
        setIsLogged(false);
      } else {
        setIsLogged(true);
        if (pathname === "/auth/login" || pathname === "/auth/register") {
          push("/");
        }
      }
    });
  }, []);
}
