import {createContext , useState} from 'react';

export const CartContext = createContext();

const CartProvider = ({children}) => {
  const [isCartOpen,setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <CartContext.Provider value={{isCartOpen,openCart,closeCart}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;