import React, { useContext, useEffect, useState } from 'react'
import { GlobalContexts } from '../Contexts/GlobalContexts';
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { Product } from '../Types/types';
import { useNavigate } from 'react-router-dom';

const fetchProducts = async() =>{
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
}

const HomePage: React.FC = () => {
    const context = useContext(GlobalContexts);
    const navigate = useNavigate();

    const {data:products,isLoading,error} = useQuery<Product[]>({
      queryKey:['products'],    
      queryFn : fetchProducts
    });
    
    const [selectedCategory, setSelectedCategory] = useState<string>('All');

    if (!context) {
      return (
        <>
          <div>Loading...</div>
        </>
      );
    }

    const { state, dispatch } = context;

    const handleAddToCart = (product: Product) => {
        dispatch({ type: 'ADD_TO_CART', payload: { ...product, quantity: 1 } });
    }
    
    const handleRemoveFromCart = (product: Product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product.id });
    }
    
    const isProductInCart = (productId: number) => {
        return state.cart.some((item) => item.id === productId);
    };
    
    const categories = Array.from(new Set(products?.map(item => item.category)));
    const filteredProducts = selectedCategory === 'All' ? products : products!.filter(product => product.category === selectedCategory);
    
    const handleProductDetails = (productId: number) => {
        navigate(`/product/${productId}`);
    }

    if(isLoading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error : {error.message}</div>
    }

  return (
    <div>
        <div className='header-container'>
            <header className='header-title'>Ecommerce Website</header>
            <button className='login' onClick={() => navigate('/admin')}>Login</button>
            <button className='cart' onClick={() => navigate('/cart')}>Your Cart</button>
        </div>

      <div className='filter-section'>
        <label htmlFor='category'>Filter By category</label>
        <select id='category' value={selectedCategory} onChange={(e) => { setSelectedCategory(e.target.value) }}>
          <option value='All'>All</option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className='product-list'>
        {filteredProducts?.map(product => (
          <div key={product.id} className='product' onClick={() => handleProductDetails(product.id)}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>₹{product.price}</p>
            {isProductInCart(product.id) ? (
              <button className='remove-from-cart' onClick={(e) => { 
                e.stopPropagation();
                handleRemoveFromCart(product);
             }}>Remove From Cart</button>
            ) : (
              <button onClick={(e) => { 
                e.stopPropagation();
                handleAddToCart(product);
             }}>Add To Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
