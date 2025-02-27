import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/ui/Home';
import Cart from './components/ui/Cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ProductDetails from './components/ui/ProductDetails';
import Navbar from './components/ui/navbar';
import Login from './components/ui/Login';
import Admin from './components/ui/Admin';
import EditProduct from './components/ui/EditProduct';
import AddProduct from './components/ui/AddProducts';

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path = '/editProduct/:id' element={<EditProduct/>}/>
          <Route path='/addProduct' element={<AddProduct/>}/>
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
