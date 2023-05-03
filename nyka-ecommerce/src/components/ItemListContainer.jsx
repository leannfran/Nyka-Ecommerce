import { useState, useEffect } from "react";
import { getProductos } from "@/firebase/firebase";
import ItemList from "./ItemList";
const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    
    useEffect(() => {       
      getProductos()
     .then(products => {
        console.log(products);
      const productsList = (<ItemList products={products} plantilla={'item'}/> )
      setProductos(productsList);
            });
        
      }, []);

    return (
        <div>
            {productos}
        </div>
    );
}

export default ItemListContainer;
