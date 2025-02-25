import React, { useContext } from 'react'
import { GlobalContexts } from '../Contexts/GlobalContexts';
import { Product } from '../Types/types';
import { useNavigate } from 'react-router-dom';
import BackToHomeButton from '../Components/BackToHomeButton';

const Cart:React.FC= () => {
    const context = useContext(GlobalContexts);
    const navigate = useNavigate();

    if(!context){
        return <div>Loading...</div>
    }

    const {state,dispatch} = context;

    const handleRemoveFromCart = (product:Product) => {
        dispatch({type:'REMOVE_FROM_CART',payload:product.id});
        window.alert(`Product ${product.title.toUpperCase()} removed from the cart`);
    }

    const handleDecrementQuantity = (product:Product) => {
        dispatch({ type: 'DECREMENT_QUANTITY', payload: product.id });
    }
    
    const handleIncrementQuantity = (product:Product) => {
        dispatch({ type: 'INCREMENT_QUANTITY', payload: product.id });
    }

  return (
    <>
        <div>
            <BackToHomeButton/>
        </div>
        <div>
            <h1>Your Cart</h1>
            {state.cart.length === 0 ? (<p>Your cart is empty</p>) : (
                state.cart.map(item=>(
                    <div key={item.id} className='cart-item'>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                        <p>₹{item.price}</p>
                        <p>Quantity : {item.quantity}</p>
                        <div className='quantity-controls'>
                                <button onClick={() => handleDecrementQuantity(item)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => handleIncrementQuantity(item)}>+</button>
                        </div>
                        <button onClick={()=>handleRemoveFromCart(item)}>Remove From Cart</button>
                    </div>
                ))
            )}
        </div>
    </>
  )
}

export default Cart