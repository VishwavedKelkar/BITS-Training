import React from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ProductType } from '../../Types/ProductType';
import { Button } from './button';
import { useNavigate } from 'react-router-dom';

const fetchProducts = async () => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
};

type UpdateProductPayload = {
    id: number;
    updates: { 
        title: string
        description: string;
        price: number;
        image: string
    };
};

const updateProduct = async ({ id, updates }: UpdateProductPayload) => {
    const res = await axios.put(`https://fakestoreapi.com/products/${id}`, updates);
    return res.data;
};

const deleteProduct = async (id: number) => {
    const res = await axios.delete(`https://fakestoreapi.com/products/${id}`);
    return res.data;
};

const Admin: React.FC = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { data: products, isLoading, error, refetch } = useQuery<ProductType[]>({
        queryKey: ['products'],
        queryFn: fetchProducts,
    });

    const updateMutation = useMutation({
        mutationFn: updateProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            window.alert('Product updated successfully');
        },
    });

    const deleteMutation = useMutation({
        mutationFn: deleteProduct,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
            window.alert('Product deleted successfully');
        },
    });

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error instanceof Error) {
        return <div>Error: {error.message}</div>;
    }

    const handleEdit = (id: number) => {
        navigate(`/editProduct/${id}`);
    };

    const handleDelete = (id: number) => {
        if (window.confirm('Are you sure you want to delete this product?')) {
            deleteMutation.mutate(id, {
                onSuccess: () => {
                    refetch();
                }
            });
        }
    };

    return (
        <div className="p-4 bg-gray-900 text-white min-h-screen">
            <header className="flex justify-between items-center py-4">
                <Button onClick={() => navigate('/')} className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md mx-2">
                    Back
                </Button>
                <Button onClick={() => navigate('/addProduct')} className="py-2 px-4 bg-green-500 hover:bg-green-600 text-white rounded-lg shadow-md mx-2">
                    Add Product
                </Button>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products?.map((product: ProductType) => (
                    <div key={product.id} className="cursor-pointer bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col justify-between">
                        <div>
                            <div className="w-full h-48 mb-4">
                                <img src={product.image} alt={product.title} className="w-full h-full object-contain rounded-lg" />
                            </div>
                            <h3 className="text-lg font-bold mb-2">{product.title}</h3>
                            <p className="text-gray-400 mb-2">₹{product.price}</p>
                            <Button onClick={(e) => { handleEdit(product.id); e.stopPropagation(); }} className="py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md mx-2">
                                Edit
                            </Button>
                            <Button onClick={(e) => { handleDelete(product.id); e.stopPropagation(); }} className="py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md mx-2">
                                Delete
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin