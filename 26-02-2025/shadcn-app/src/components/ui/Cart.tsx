import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ProductType } from '../../Types/ProductType';


const fetchCartData = async () => {
  const { data } = await axios.get('/api/cart'); // Replace with your actual API endpoint
  return data;
};

const Cart: React.FC = () => {
  const navigate = useNavigate();
  const { data: cart, error, isLoading } = useQuery({
    queryKey: ['cart'],
    queryFn: fetchCartData,
  });
  const [localCart, setLocalCart] = useState<ProductType[]>(cart || []);

  const handleRemoveFromCart = (product: ProductType) => {
    const updatedCart = localCart.filter(item => item.id !== product.id);
    setLocalCart(updatedCart);
    window.alert(`Product ${product.title.toUpperCase()} removed from the cart`);
  };

  const handleDecrementQuantity = (product: ProductType) => {
    const updatedCart = localCart.map(item =>
      item.id === product.id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setLocalCart(updatedCart);
  };

  const handleIncrementQuantity = (product: ProductType) => {
    const updatedCart = localCart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setLocalCart(updatedCart);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching cart data</div>;

  return (
    <>
      <div>
        <h1>Your Cart</h1>
        {localCart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          localCart.map(item => (
            <div key={item.id} className='cart-item'>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p>₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <div className='quantity-controls'>
                <button onClick={() => handleDecrementQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleIncrementQuantity(item)}>+</button>
              </div>
              <button onClick={() => handleRemoveFromCart(item)}>Remove From Cart</button>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default Cart;
