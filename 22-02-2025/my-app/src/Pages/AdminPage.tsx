import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { GlobalContexts } from '../Contexts/GlobalContexts';
import { Product } from '../Types/types';
import BackToHomeButton from '../Components/BackToHomeButton';
import {useQuery,useMutation,useQueryClient} from '@tanstack/react-query'

const AdminPage: React.FC = () => {
  const context = useContext(GlobalContexts);
  const queryClient = useQueryClient();
  const [newProduct, setNewProduct] = useState<Product>({
    id: 0,
    title: '',
    price: 0,
    description: '',
    image: '',
    category: '',
    quantity: 0,
  });
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editProductId, setEditProductId] = useState<number | null>(null);

  if (!context) {
    return <div>Context not available</div>;
  }

  const { state, dispatch } = context;

  const getProductsInAdminPage = async() => {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  }

  const {data:products,isLoading,isError,error} = useQuery({
    queryKey:['products'],
    queryFn:getProductsInAdminPage,
    refetchOnWindowFocus: false,
  })

  const addProduct = async(newProduct:Product) => {
    const res = await axios.post('https://fakestoreapi.com/products',newProduct);
    console.log("New Product added");
    return res.data;
  }

  const mutation = useMutation({
    mutationFn: addProduct,
  })

  if(isLoading){
    return <h2>Loading...</h2>
  }
  if(isError){
    return <h2>Error : {error.message}</h2>
  }
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEditing) {
      axios.put(`https://fakestoreapi.com/products/${editProductId}`, newProduct)
        .then(res => {
          window.alert(`Product updated successfully\nStatus:${res.status}`);
          dispatch({ type: 'SET_PRODUCTS', payload: products.map(p => p.id === editProductId ? res.data : p) });
          setIsEditing(false);
          setNewProduct({ id: 0, title: '', price: 0, description: '', image: '', category: '', quantity: 0 });
          setEditProductId(null);
        })
        .catch(err => console.log('Error updating product', err));
    } else {
        mutation.mutate(
            newProduct,{
                onSuccess: ()=> {
                    queryClient.invalidateQueries({
                        queryKey: ['products'],
                    });
                    setNewProduct({
                    id: 0,
                    title: '',
                    price: 0,
                    description: '',
                    image: '',
                    category: '',
                    quantity: 0,
                })
            }}
        )
        window.alert(`New Product ${newProduct.title} added successfully!`);
    }
  };

  const handleEdit = (product: Product) => {
    setIsEditing(true);
    setEditProductId(product.id);
    setNewProduct({
        id: product.id || 0,
        title: product.title || '',
        price: product.price || 0,
        description: product.description || '',
        image: product.image || '',
        category: product.category || '',
        quantity: product.quantity || 0,
      });

      console.log(product.title)
  };

  return (
    <div className='admin-page'>
        <BackToHomeButton/>
      <h1>Admin Page</h1>
      <form onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='Title' value={newProduct.title} onChange={handleInputChange} required />
        <input type='number' name='price' placeholder='Price' value={newProduct.price} onChange={handleInputChange} required />
        <textarea name='description' placeholder='Description' value={newProduct.description} onChange={handleInputChange} required />
        <input type='text' name='image' placeholder='Image URL' value={newProduct.image} onChange={handleInputChange} required />
        <input type='text' name='category' placeholder='Category' value={newProduct.category} onChange={handleInputChange} required />
        <input type='number' name='quantity' placeholder='Quantity' value={newProduct.quantity} onChange={handleInputChange} required />
        <button type='submit'>{isEditing ? 'Update Product' : 'Add Product'}</button>
      </form>
      <div className='product-list'>
        {products.map(product => (
          <div key={product.id} className='product'>
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>₹{product.price}</p>
            <button onClick={() => handleEdit(product)}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPage