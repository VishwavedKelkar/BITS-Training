import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from './button';

const fetchProductDetails = async (id: string) => {
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return res.data;
};

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const { data, isLoading, error } = useQuery({
    queryKey: ['product', id],
    queryFn: () => fetchProductDetails(id!),
  });

  if (!id) return <div className="text-center mt-10">Product ID is required</div>;
  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10">Error fetching product details: {error.message}</div>;

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <Button onClick={() => navigate('/')} className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md mx-2">Back</Button>
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">{data.title}</h1>
        <div className="w-full h-96 mb-4">
          <img src={data.image} alt={data.title} className="w-full h-full object-contain rounded-lg" />
        </div>
        <p className="text-xl text-gray-300 mb-4">Price: ₹{data.price}</p>
        <div className="text-gray-400">
          <h2 className="text-lg font-semibold mb-2">Description</h2>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
    