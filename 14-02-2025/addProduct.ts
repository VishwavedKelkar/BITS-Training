type addProduct = { title: string, price: number, description: string, image: string, category: string }
const productForm = document.getElementById('product-form') as HTMLFormElement;
document.addEventListener('DOMContentLoaded', () => { productForm.addEventListener('submit', handleFormSubmit); });

const handleFormSubmit = async (event: Event): Promise<void> => {
    event.preventDefault();
    const title: string = (document.getElementById('title') as HTMLInputElement).value;
    const price: number = parseFloat((document.getElementById('price') as HTMLInputElement).value);
    const description: string = (document.getElementById('description') as HTMLInputElement).value;
    const image: string = (document.getElementById('image') as HTMLInputElement).value;
    const category: string = (document.getElementById('description') as HTMLInputElement).value;
    const newProduct: addProduct = {
        title: title,
        price: price,
        description: description,
        image: image,
        category: category
    }
    addNewProduct(newProduct)
}

const addNewProduct = async (newProduct: addProduct): Promise<void> => {
    try {
        console.log(newProduct);
        const res = await fetch('https://fakestoreapi.com/products', {
            method: 'POST',
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        console.log("Data:", data);
        let products: addProduct[] = JSON.parse(localStorage.getItem('products') || '[]');
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        console.log("Products : ", products);
        window.alert(`Product ${newProduct.title} Added successfully`);
        const addedProducts: Product[] = JSON.parse(localStorage.getItem('addedProducts') || '[]');
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
    } catch (error) {
        console.error("Error adding the product ", error);
    }
}

const displayNewProduct = (newProduct: Product) => {
    const convertedProduct: Product = {
        id: newProduct.id,
        title: newProduct.title,
        image: newProduct.image,
        price: newProduct.price,
        quantity: 1
    }
}