import { useState, useEffect } from "react";
import { getProductos } from "../../firebase/firebase";
import ItemList from "./ItemList";
const ItemListContainer = (props) => {
  const wrap = props.wrap;
  const [productos, setProductos] = useState([]);
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
});


  useEffect(() => {
    
    getProductos().then((products) => {
      const productsList = <ItemList products={products} plantilla={"item"} />;
      setProductos(productsList);
    });
  }, []);



  return wrap === true ? (
    <div className="flex flex-row flex-wrap gap-3 m-3">{productos}</div>
  ) : (
    <div className="flex flex-row  gap-4">{productos}</div>
  );
};

export default ItemListContainer;
