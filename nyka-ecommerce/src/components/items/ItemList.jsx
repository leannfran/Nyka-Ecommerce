import React from 'react';
import Item from './Item';

const ItemList = ({products, plantilla}) => {
    return (
        <>
        {
            plantilla ===  'item'
            ?
            products.map((producto) =>(<Item item={producto} key={producto.id} /> ))
            :
            false
          //  products.map((producto) => (<ItemCart item={producto} key={producto.id} />))

        }
            
        </>
    );
}

export default ItemList;
