import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { useParams } from "react-router-dom";
import { Product } from '../types';

const fetchProductDetails = async(id:string):Promise<Product> => {
    if(!id){
        throw new Error('ID is required');
    }
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
}

const ProductDetails = () => {

    const {id} = useParams<{id:string}>();
    const {data,isLoading,error} = useQuery<Product>({
        queryKey : ['product',id],
        queryFn : ()=>fetchProductDetails(id!)
    })

    if(isLoading){
        return <h1>Loading...</h1>
    }
    if(error){
        return <div>Error : {error.message}</div>
    }
  return (
    <>
        <div>
            <h1>Product Details</h1>
            <img src={data?.image} alt={data?.title}/>
            <h2>{data?.title}</h2>
            <p>{data?.description}</p>
            <p>Price : {data?.price}</p>
        </div>
    </>
  )
}

export default ProductDetails