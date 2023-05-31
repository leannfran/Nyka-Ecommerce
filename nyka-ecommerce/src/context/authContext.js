import { createContext, useState } from "react";

const AuthContext = createContext({});

export function ContextAuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
