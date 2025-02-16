"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const productForm = document.getElementById('product-form');
document.addEventListener('DOMContentLoaded', () => { productForm.addEventListener('submit', handleFormSubmit); });
const handleFormSubmit = (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const price = parseFloat(document.getElementById('price').value);
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const category = document.getElementById('description').value;
    const newProduct = {
        title: title,
        price: price,
        description: description,
        image: image,
        category: category
    };
    addNewProduct(newProduct);
});
const addNewProduct = (newProduct) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(newProduct);
        const res = yield fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
        });
        const data = yield res.json();
        console.log("Data:", data);
        let products = JSON.parse(localStorage.getItem('products') || '[]');
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        console.log("Products : ", products);
        window.alert(`Product ${newProduct.title} Added successfully`);
        const addedProducts = JSON.parse(localStorage.getItem('addedProducts') || '[]');
        addedProducts.push({
            id: data.id,
            title: data.title,
            image: data.image,
            price: data.price,
            quantity: 1
        });
        localStorage.setItem('addedProducts', JSON.stringify(addedProducts));
        displayNewProduct(data);
        window.location.href = 'index.html';
    }
    catch (error) {
        console.error("Error adding the product ", error);
    }
});
const displayNewProduct = (newProduct) => {
    const convertedProduct = {
        id: newProduct.id,
        title: newProduct.title,
        image: newProduct.image,
        price: newProduct.price,
        quantity: 1
    };
};
