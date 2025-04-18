import React,{ useContext} from 'react'
import {CartContext} from "../Context/Cart";

const Item = (props) => {
    const cart = useContext(CartContext);
     return (
        <div className='item-card'>
           <h4>{props.name}</h4>
           <p>price: ${props.price}</p>
           <button onClick={() => cart.setItems([...cart.items,{name: props.name,price: props.price},])}>Add to cart</button>

        </div>
     );
};

export default Item;