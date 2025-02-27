import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';


const addProduct = async ({ title, description, price, image }: { title: string, description: string, price: number, image: string }) => {
    const res = await axios.post('https://fakestoreapi.com/products', { title, description, price, image });
    return res.data;
};

const AddProduct: React.FC = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const [newProduct, setNewProduct] = useState({
        title: '',
        description: '',
        price: 0,
        image: ''
    });

    const addMutation = useMutation({
        mutationFn: addProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            window.alert('Product added successfully');
            navigate('/');
        },
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setNewProduct(prevState => ({ ...prevState, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        addMutation.mutate(newProduct);
    };

    return (
        <div className="p-4 bg-gray-900 text-white min-h-screen">
            <header className="flex justify-between items-center py-4">
                <Button onClick={() => navigate('/')} className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md mx-2">
                    Back
                </Button>
            </header>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-400">Product Title</label>
                    <input type="text" id="title" value={newProduct.title} onChange={handleChange} className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-400">Product Description</label>
                    <textarea id="description" value={newProduct.description} onChange={handleChange} className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md w-full"></textarea>
                </div>
                <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-400">Product Price</label>
                    <input type="number" id="price" value={newProduct.price} onChange={handleChange} className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md w-full" />
                </div>
                <div>
                    <label htmlFor="image" className="block text-sm font-medium text-gray-400">Product Image URL</label>
                    <input type="text" id="image" value={newProduct.image} onChange={handleChange} className="mt-1 p-2 bg-gray-800 border border-gray-700 rounded-md w-full" />
                </div>
                <Button type="submit" className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md">
                    Add Product
                </Button>
            </form>
        </div>
    );
};

export default AddProduct;