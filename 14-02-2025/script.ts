const productList = document.getElementById('product-list') as HTMLElement;

type Product = {
    id: number,
    image: string,
    title: string,
    price: number,
    quantity: number
}

document.addEventListener('DOMContentLoaded', () => {
    fetchApi();
});

const fetchApi = async (): Promise<void> => {
    try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await res.json();
        console.log(`Data fetched : ${data}`);
        localStorage.setItem('products', JSON.stringify(data));
        displayProducts(data);
    } catch (error) {
        window.alert("Error fetching API :");
        console.log(error);
    }
}

(window as any).addToCart = (productId: number) => {
    console.log("Add to cart button clicked");
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const products: Product[] = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find(p => p.id === productId);
    window.alert(`Product ${productId} is added to cart`);

    if (!product) {
        window.alert('Product not found.');
        return;
    }

    const existingItem = cart.find((item: Product) => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        const newCartItem: Product = {
            id: product.id,
            image: product.image,
            title: product.title,
            price: product.price,
            quantity: 1
        };
        cart.push(newCartItem);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
}

const displayProducts = (products: Product[]) => {
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
    })
}


const displayStoredProduct = () => {
    const addedProducts: Product[] = JSON.parse(localStorage.getItem('addedProducts') || '[]');
    displayProducts(addedProducts);
}

