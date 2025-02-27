import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { ProductType } from '../../Types/ProductType';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../Store/Store';
import { Button } from './button';
import { Alert, AlertDescription, AlertTitle } from "./alert"
import { Terminal } from "lucide-react";

const fetchProducts = async (): Promise<ProductType[]> => {
  const { data } = await axios.get('https://fakestoreapi.com/products');
  return data.map((p: any) => ({ ...p, id: p.id.toString() }));
};

const Home: React.FC = () => {
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const { data: products, error, isLoading } = useQuery<ProductType[]>({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  const navigate = useNavigate();
  const addToCart = useCartStore((state) => state.addToCart);

  const handleProductClick = (id: string) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (product: ProductType) => {
    addToCart(product);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching products</div>;

  return (
    <div className="p-4 bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center py-4">
      </header>
      {showAlert && (
        <Alert>
          <Terminal className="h-4 w-4" />
          <AlertTitle>Congratulations 🎉</AlertTitle>
          <AlertDescription>
            You have successfully added the product to your cart!
          </AlertDescription>
        </Alert>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product) => (
          <div
            key={product.id}
            onClick={() => handleProductClick(product.id)}
            className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between h-full"
          >
            <div className="flex-grow">
              <div className="w-full h-48 mb-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <h3 className="text-lg font-bold mb-2 flex justify-center text-white">{product.title}</h3>
              <p className="text-gray-400 mb-2 flex justify-center text-white">₹{product.price}</p>
            </div>
            <div className="flex justify-center mt-auto">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                onClick={(e: { stopPropagation: () => void; }) => {
                  e.stopPropagation();
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
