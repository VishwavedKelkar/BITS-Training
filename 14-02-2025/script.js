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
const productList = document.getElementById('product-list');
document.addEventListener('DOMContentLoaded', () => {
    fetchApi();
});
const fetchApi = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res = yield fetch('https://fakestoreapi.com/products');
        const data = yield res.json();
        console.log(`Data fetched : ${data}`);
        localStorage.setItem('products', JSON.stringify(data));
        displayProducts(data);
    }
    catch (error) {
        window.alert("Error fetching API :");
        console.log(error);
    }
});
window.addToCart = (productId) => {
    console.log("Add to cart button clicked");
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find(p => p.id === productId);
    window.alert(`Product ${productId} is added to cart`);
    if (!product) {
        window.alert('Product not found.');
        return;
    }
    const existingItem = cart.find((item) => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    }
    else {
        const newCartItem = {
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price,
            quantity: 1
        };
        cart.push(newCartItem);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
};
const displayProducts = (products) => {
    productList.innerHTML = '';
    products.map((element) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
        <img src= "${element.image}" alt="${element.title}" class = "product-image">
        <div class="product-details">
            <h2>${element.title}</h2>
            <p class='product-price'>${element.price}</p>
            <button class = "add-to-cart-btn" onclick="addToCart(${element.id})" type="button">Add to Cart</button>
        </div>
                                    `;
        productList.appendChild(productElement);
        console.log("Child appended to parent");
    });
};
const displayStoredProduct = () => {
    const addedProducts = JSON.parse(localStorage.getItem('addedProducts') || '[]');
    displayProducts(addedProducts);
};
