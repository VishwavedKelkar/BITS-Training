const product_list = document.getElementById('product-list');
const cart_list = document.getElementById('cart-list');

document.addEventListener('DOMContentLoaded', () => {
    fetchApi();
});

//GET method
const fetchApi = async () => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        localStorage.setItem('products', JSON.stringify(data));
        displayProducts(data);
        return data;
    }
    catch (error) {
        window.alert('Error fetching API:', error);
    }
}

const displayProducts = (products) => {
    product_list.innerHTML = '';
    products.forEach(element => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${element.image}" alt="${element.title}" class="product-image">
            <div class="product-details">
                <h2>${element.title}</h2>
                <p class="product-price">${element.price}$</p>
                <div class="product-buttons">
                    <button onclick="addToCart(${element.id})" type="button" class="btn btn-outline-primary">Add to Cart</button>
                </div>
            </div>
        `;
        product_list.appendChild(productElement);
    });
}

const addToCart = (productId) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id === productId);

    if (!product) {
        window.alert('Product not found.');
        return;
    }

    const existingItem = cart.find(item => item.productId === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, productId: productId, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    window.alert(`Product " ${product.title} " has been added to the cart.`);
}

