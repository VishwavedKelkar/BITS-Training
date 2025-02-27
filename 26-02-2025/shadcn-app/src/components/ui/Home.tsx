import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProductType } from '../../Types/ProductType';
import { useNavigate } from 'react-router-dom';

const fetchProducts = async () => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data;
};

const Home: React.FC = () => {
  const { data: products, error, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const navigate = useNavigate();

  const handleProductClick = (id: number) => {
    navigate(`/products/${id}`);
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center py-4">
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: ProductType) => (
          <div key={product.id} onClick={() => handleProductClick(product.id)} className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
            <div>
              <div className="w-full h-48 mb-4">
                <img src={product.image} alt={product.title} className="w-full h-full object-contain rounded-lg" />
              </div>
              <h3 className="text-lg font-bold mb-2">{product.title}</h3>
              <p className="text-gray-400 mb-2">₹{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
