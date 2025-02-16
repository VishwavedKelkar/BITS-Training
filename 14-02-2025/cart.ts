const cartList = document.getElementById('cart-list') as HTMLElement;

document.addEventListener('DOMContentLoaded', () => {
    displayCartItems();
})

const displayCartItems = async (): Promise<void> => {
    const cartItems: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');


    cartList.innerHTML = '';
    cartItems.map((item: Product) => {
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
    })

    if (cartItems.length === 0) {
        cartList.innerHTML = 'Your Cart is empty!';
    }
}

(window as any).addQuantity = async (productId: number) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex: number = cart.findIndex((item: Product) => item.id === productId);

    if (productIndex !== -1) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'PATCH',
                body: JSON.stringify(
                    {
                        title: 'test product',
                        price: 150,
                        description: 'lorem ipsum set',
                        image: 'https://i.pravatar.cc',
                        category: 'electronic'
                    }
                )
            }
            );
            cart[productIndex].quantity++;
        } catch (error) {
            console.error("Error adding quantity to the cart", error);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart) || '');
    displayCartItems();
}

(window as any).minusQuantity = async (productId: number) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex: number = cart.findIndex((item: Product) => item.id === productId);

    if (productIndex !== -1) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
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
        } catch (error) {
            console.error("Error removing quantity from the cart", error);
        };
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}

(window as any).deleteFromCart = async (productId: number) => {
    let cart: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');
    const productIndex: number = cart.findIndex((item: Product) => item.id === productId);

    if (productIndex !== -1) {
        try {
            const res = await fetch(`https://fakestoreapi.com/products/${productId}`, {
                method: 'DELETE'
            });
            if (window.confirm(`You are about to delete '${cart[productIndex].title}' from your cart`)) {
                cart.splice(productIndex, 1);
            } else {
                return;
            }
        } catch (error) {
            console.error("Error deleting product from the cart", error);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
}