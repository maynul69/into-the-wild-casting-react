import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Cast from '../Cast/Cast';
import './Castings.css'

const Castings = () => {
    const[casts,setCasts]=useState([]);
    const[cart, setCart]=useState([]);
    const [selected, setSelected]=useState([]);

    useEffect(()=>{
        fetch('./database.JSON')
        .then(res=>res.json())
        .then(data=>setCasts(data));
    },[])
    const handleAddingToCart=cast=>{
        const neWcart=[...cart,cast]
        setCart(neWcart);    
    }
    return (
        <div className='castings-container'>
            <div className="casts-container">
            {
                casts.map(cast=> <Cast 
                    selected={selected}
                    setSelected={setSelected}
                    key={cast.key} 
                    cast={cast}  
                    handleAddingToCart={handleAddingToCart}>
                    </Cast>)
            }
            
            </div>
           

            <div className="cast-cost">
                <Cart cart={cart} selected={selected}></Cart>
            </div>
        </div>
    );
};

export default Castings;