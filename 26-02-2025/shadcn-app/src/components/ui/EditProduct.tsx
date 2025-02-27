import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from './button';
import { ProductType } from '../../Types/ProductType';

const fetchProductById = async (id: string) => {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return res.data;
};

const updateProduct = async ({ id, updates }: { id: string; updates: { title: string, description: string, price: number, image: string } }) => {
    const res = await axios.put(`https://fakestoreapi.com/products/${id}`, updates);
    return res.data;
};

const EditProduct: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const { data: product, isLoading } = useQuery<ProductType>({
        queryKey: ['product', id],
        queryFn: () => fetchProductById(id!),
    });

    const [updatedProduct, setUpdatedProduct] = useState({
        title: '',
        description: '',
        price: 0,
        image: ''
    });

    const updateMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            window.alert('Product updated successfully');
            navigate('/');
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setUpdatedProduct(prevState => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (product) {
            updateMutation.mutate({ id: id!, updates: { 
                title: updatedProduct.title || product.title,
                description: updatedProduct.description || product.description,
                price: updatedProduct.price || product.price,
                image: updatedProduct.image || product.image
             } });
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="p-4 bg-gray-900 text-white min-h-screen">
            <header className="flex justify-between items-center py-4">
                <Button onClick={() => navigate('/')} className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md mx-2">
                    Back
                </Button>
            </header>
            <form onSubmit={handleSubmit} className="space-y-4">
                {product?.image && (
                    <div className="w-full h-48 mb-4">
                        <img src={product.image} alt={product.title} className="w-full h-full object-contain rounded-lg" />
                    </div>
                )}
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-400">Product Title</label>
                    <input type="text" id="title" value={updatedProduct.title || product?.title} onChange={handleChange} className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-400">Product Description</label>
                    <textarea id="description" value={updatedProduct.description || product?.description} onChange={handleChange} className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md w-full"></textarea>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-400">Product Price</label>
                    <input type="number" id="price" value={updatedProduct.price || product?.price} onChange={handleChange} className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md w-full" />
                </div>
                <Button type="submit" className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md">
                    Save Changes
                </Button>
            </form>
        </div>
    );
};

export default EditProduct;
