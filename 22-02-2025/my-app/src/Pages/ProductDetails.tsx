import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { Product } from '../Types/types';
import axios from 'axios';
import BackToHomeButton from '../Components/BackToHomeButton';


const fetchProductDetails = async(id:string) => {
    const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return data;
}

const ProductDetails = () => {

    const {id} = useParams<{id:string}>();
    
    const { data: product, isLoading, error } = useQuery<Product>({
        queryKey : ['product', id], 
        queryFn: () => fetchProductDetails(id!)
    });

    if(!id){
        return <div>Product ID is required</div>
    }

    if(isLoading){
        return <div>Loading...</div>
    }
    if(error){
        return <div>Error fetching the product details</div>
    }

    if(!product){
        return <div>Loading...</div>
    }

  return (
    <>
        <BackToHomeButton/>
        <div className='product-details'>
            <h1>{product.title}</h1>
            <img src={product.image} alt={product.title}/>
            <p>Price : ₹{product.price}</p>
            <p>Description</p>
            <div className='product-description'>
            {product.description}
            </div>
        </div>
    </>
  )
}

export default ProductDetails