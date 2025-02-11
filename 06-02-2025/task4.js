// **Assignment 4: Working with map(), filter(), and **reduce()
// Task 1: Use map() to transform data
// Create an array of product objects with properties name, price, and category.
// Use map() to create a new array with product names in uppercase.
// Task 2: Use filter() to extract specific data
// Use filter() to create an array of products that belong to the 'Electronics' category.
// Task 3: Use reduce() to calculate a total
// Use reduce() to calculate the total price of all products in the array.
// Task 4: Combine map(), filter(), and reduce()
// Create a function that calculates the total price of products from a specific category using map(), filter(), and reduce().


const products = [
    { name: 'laptop', price: 52000, category: 'electronics' },
    { name: 'phone', price: 15000, category: 'electronics' },
    { name: 'watch', price: 800, category: 'fashion' },
    { name: 'headphones', price: 1000, category: 'electronics' },
    { name: 'chair', price: 1000, category: 'furniture' }
];

//Task1
const productNamesUpperCase = products.map(product => product.name.toUpperCase());
console.log(productNamesUpperCase);

// Task2
const productsinElectronics = products.filter(product => product.category === 'electronics');
console.log(productsinElectronics);

//Task3
const totalPrice = products.reduce((acc, product) => {
    return acc + product.price;
}, 0);
console.log('Total price of all the products is : ', totalPrice);

//Task4
function calculateTotalPrice(category) {
    const productsInCategory = products.filter(product => product.category === category);
    const productPrices = productsInCategory.map(product => product.price);
    const totalPrice = productPrices.reduce((acc, price) => acc + price, 0);
    return totalPrice;
}

console.log('Total price of electronics products are : ', calculateTotalPrice('electronics'));
console.log('Total price of fashion products are : ', calculateTotalPrice('fashion'));
console.log('Total price of furniture products are : ', calculateTotalPrice('furniture'));


// output:

// [ 'LAPTOP', 'PHONE', 'WATCH', 'HEADPHONES', 'CHAIR' ]
// [
//     { name: 'laptop', price: 52000, category: 'electronics' },
//     { name: 'phone', price: 15000, category: 'electronics' },
//     { name: 'headphones', price: 1000, category: 'electronics' }
//   ]
// Total price of all the products is :  69800
// Total price of electronics products are :  68000
// Total price of fashion products are :  800
// Total price of furniture products are :  1000