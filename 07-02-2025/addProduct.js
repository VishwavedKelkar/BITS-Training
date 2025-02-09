document.addEventListener('DOMContentLoaded', () => {
    const productForm = document.getElementById('product-form');
    productForm.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = async (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const category = document.getElementById('category').value;

    const newProduct = {
        title: title,
        price: price,
        description: description,
        image: image,
        category: category
    };

    //POST method
    try {
        console.log('Product added successfully');
        const res = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        const addedProduct = await res.json();
        console.log('New product created:', addedProduct);
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products.push(addedProduct);

        window.alert(`New product ${addedProduct.title} is added`);

        localStorage.setItem('products', JSON.stringify(products));
        window.location.href = 'index.html';
    }
    catch (error) {
        console.error("Error adding the product ", error);
    }
}