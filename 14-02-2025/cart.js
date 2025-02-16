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
const cartList = document.getElementById('cart-list');
document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
});
const displayCartItems = () => __awaiter(void 0, void 0, void 0, function* () {
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    cartList.innerHTML = '';
    cartItems.map((item) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
                                <img src=${item.image} alt = "${item.title}">
                                <h2>${item.title}</h2>
                                <div class = 'cart-item-details'>
                                    <p> Price : ${item.price}</p>
                                    <p> Quantity : ${item.quantity}</p>
                                    <button type="button" class = "minusQuantity" onClick="minusQuantity(${item.id})">-</button>
                                    <button type="button" class = "addQuantity" onClick="addQuantity(${item.id})">+</button>
                                    <button type="button" class = "deleteItem" onClick="deleteFromCart(${item.id})">Delete</button>
                                </div>
                             `;
        cartList.appendChild(cartItem);
    });
    if (cartItems.length === 0) {
        cartList.innerHTML = `<h2 class = "empty-cart"> Your Cart is empty!<h2>`;
    }
});
window.addQuantity = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex((item) => item.id === productId);
    if (productIndex !== -1) {
        try {
            const res = yield fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: 'test product',
                    price: 150,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                })
            });
            cart[productIndex].quantity++;
        }
        catch (error) {
            console.error("Error adding quantity to the cart", error);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart) || '');
    displayCartItems();
});
window.minusQuantity = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex((item) => item.id === productId);
    if (productIndex !== -1) {
        try {
            const res = yield fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    title: 'test product 2',
                    price: 135,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'furniture'
                })
            });
            cart[productIndex].quantity--;
            if (cart[productIndex].quantity === 0) {
                cart.splice(productIndex, 1);
            }
        }
        catch (error) {
            console.error("Error removing quantity from the cart", error);
        }
        ;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
});
window.deleteFromCart = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex = cart.findIndex((item) => item.id === productId);
    if (productIndex !== -1) {
        try {
            const res = yield fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'DELETE'
            });
            if (window.confirm(`You are about to delete '${cart[productIndex].title}' from your cart`)) {
                cart.splice(productIndex, 1);
            }
            else {
                return;
            }
        }
        catch (error) {
            console.error("Error deleting product from the cart", error);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
});
