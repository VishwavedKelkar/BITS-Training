import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

const fetchProducts = async() => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
}

const Home = () => {
    const {data,isLoading,error} = useQuery({
        queryKey: ['products'],
        queryFn: fetchProducts
    });

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <div>Error : {error.message}</div>
    }
  return (
    <>
        <h1>Home</h1>
        <ul className='product-list'>
            {data.map(product => (
                <li key={product.id} className='product'>
                    <Link to={`/product/${product.id}`}>
                        <img src={product.image} alt={product.title} />
                        <h2>{product.title}</h2>
                        <p>₹{product.price}</p>
                    </Link>
                </li>
            ))}
        </ul>
    </>
  )
}

export default Home