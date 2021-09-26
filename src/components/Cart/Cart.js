import React from 'react';
import { useState } from 'react/cjs/react.development';
import './Cart.css'

const Cart = (props) => {
    const {cart,selected}=props;
    console.log(props);

    

    let total=0;
    for(const cast of selected){
        total=total+ cast.cost;
    }

    

    return (
        <div >
            <h3>Selected Cast Quantity: {selected.length}</h3>
            <h3>Total Casting cost: ${total}</h3>
            {selected.map(cast=><h3>{cast.name}</h3>)}
        </div>
    );
};

export default Cart;