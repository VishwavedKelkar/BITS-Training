<<<<<<< HEAD
<<<<<<< HEAD
const deleteCart = document.getElementById('removeFromCart');
const cartList = document.getElementById('cart-list');

document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
})

const displayCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h2>${item.title}</h2>
            <div class = "cart-items-details">
                <p>Price: ${item.price}$</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="btnRemove" onclick="deleteFromCart(${item.productId})">Remove</button>
                <button class="addProduct" onclick="addQuantity(${item.productId})">+</button>

            </div>
        `;
        cartList.appendChild(cartItemElement);
    });
    if (cartItems.length === 0) {
        cartList.innerHTML = `<h1 class="emptyCart">Your Cart is Empty</h1>`;
    }
}

//PUT method
const addQuantity = async (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.productId === productId);
    if (productIndex !== -1) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'PUT'
            });
            cart[productIndex].quantity++;
        } catch (error) {
            console.error("Error updating the quantity", error);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

//DELETE method
const deleteFromCart = async (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.productId === productId);

    if (productIndex !== -1) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'DELETE'
            });
            if (res.status === 200) {
                if (cart[productIndex].quantity > 1) {
                    cart[productIndex].quantity--;
                } else {
                    cart.splice(productIndex, 1);
                }
            }
        }
        catch (error) {
            console.error("Error deleting the item from the cart", error);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

=======
const deleteCart = document.getElementById('removeFromCart');
const cartList = document.getElementById('cart-list');

document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
})

const displayCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h2>${item.title}</h2>
            <div class = "cart-items-details">
                <p>Price: ${item.price}$</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="btnRemove" onclick="deleteFromCart(${item.productId})">Remove</button>
                <button class="addProduct" onclick="addQuantity(${item.productId})">+</button>

            </div>
        `;
        cartList.appendChild(cartItemElement);
    });
    if (cartItems.length === 0) {
        cartList.innerHTML = `<h1 class="emptyCart">Your Cart is Empty</h1>`;
    }
}

//PUT method
const addQuantity = async (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.productId === productId);
    if (productIndex !== -1) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'PUT'
            });
            cart[productIndex].quantity++;
        } catch (error) {
            console.error("Error updating the quantity", error);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

//DELETE method
const deleteFromCart = async (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.productId === productId);

    if (productIndex !== -1) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'DELETE'
            });
            if (res.status === 200) {
                if (cart[productIndex].quantity > 1) {
                    cart[productIndex].quantity--;
                } else {
                    cart.splice(productIndex, 1);
                }
            }
        }
        catch (error) {
            console.error("Error deleting the item from the cart", error);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
=======
const deleteCart = document.getElementById('removeFromCart');
const cartList = document.getElementById('cart-list');

document.addEventListener('DOMContentLoaded', function () {
    displayCartItems();
})

const displayCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    cartList.innerHTML = '';
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <h2>${item.title}</h2>
            <div class = "cart-items-details">
                <p>Price: ${item.price}$</p>
                <p>Quantity: ${item.quantity}</p>
                <button class="btnRemove" onclick="deleteFromCart(${item.productId})">Remove</button>
                <button class="addProduct" onclick="addQuantity(${item.productId})">+</button>

            </div>
        `;
        cartList.appendChild(cartItemElement);
    });
    if (cartItems.length === 0) {
        cartList.innerHTML = `<h1 class="emptyCart">Your Cart is Empty</h1>`;
    }
}

//PUT method
const addQuantity = async (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.productId === productId);
    if (productIndex !== -1) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'PUT'
            });
            cart[productIndex].quantity++;
        } catch (error) {
            console.error("Error updating the quantity", error);
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

//DELETE method
const deleteFromCart = async (productId) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(item => item.productId === productId);

    if (productIndex !== -1) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'DELETE'
            });
            if (res.status === 200) {
                if (cart[productIndex].quantity > 1) {
                    cart[productIndex].quantity--;
                } else {
                    cart.splice(productIndex, 1);
                }
            }
        }
        catch (error) {
            console.error("Error deleting the item from the cart", error);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
