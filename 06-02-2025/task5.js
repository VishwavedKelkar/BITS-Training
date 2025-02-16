<<<<<<< HEAD
<<<<<<< HEAD
// **Assignment 5: Callback Functions with map(), filter(), and **reduce()
// Task: Create a processData function that accepts an array of numbers and a callback.
// If the callback is filterOdd, filter out even numbers.
// If the callback is doubleNumbers, double each number.
// If the callback is calculateSum, return the sum of all numbers. Bonus Task: Implement a callback to find the maximum number in the array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const processData = (arr, callback) => {
    return callback(arr);
}

const filterOdd = (arr) => {
    console.log('Filtering out the even numbers...');
    return arr.filter(num => num % 2 !== 0);
}

const doubleNumbers = (arr) => {
    console.log('Doubling the numbers...');
    return arr.map(num => num * 2);
}

const calculateSum = (arr) => {
    console.log('Calculating the total sum ...');
    return arr.reduce((acc, sum) => acc + sum, 0);
}

const maxNumInArray = (arr) => {
    console.log('The maximum number is ...');
    return arr.reduce((max, num) => max > num ? max : num);
}



console.log(processData(array, filterOdd));
console.log(processData(array, doubleNumbers));
console.log(processData(array, calculateSum));
console.log(processData(array, maxNumInArray));

//output:
// Filtering out the even numbers...
// [ 1, 3, 5, 7, 9 ]
// Doubling the numbers...
// [
//    2,  4,  6,  8, 10,
//   12, 14, 16, 18, 20
// ]
// Calculating the total sum ...
// 55
// The maximum number is ...
// 10
=======
// **Assignment 5: Callback Functions with map(), filter(), and **reduce()
// Task: Create a processData function that accepts an array of numbers and a callback.
// If the callback is filterOdd, filter out even numbers.
// If the callback is doubleNumbers, double each number.
// If the callback is calculateSum, return the sum of all numbers. Bonus Task: Implement a callback to find the maximum number in the array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const processData = (arr, callback) => {
    return callback(arr);
}

const filterOdd = (arr) => {
    console.log('Filtering out the even numbers...');
    return arr.filter(num => num % 2 !== 0);
}

const doubleNumbers = (arr) => {
    console.log('Doubling the numbers...');
    return arr.map(num => num * 2);
}

const calculateSum = (arr) => {
    console.log('Calculating the total sum ...');
    return arr.reduce((acc, sum) => acc + sum, 0);
}

const maxNumInArray = (arr) => {
    console.log('The maximum number is ...');
    return arr.reduce((max, num) => max > num ? max : num);
}



console.log(processData(array, filterOdd));
console.log(processData(array, doubleNumbers));
console.log(processData(array, calculateSum));
console.log(processData(array, maxNumInArray));

//output:
// Filtering out the even numbers...
// [ 1, 3, 5, 7, 9 ]
// Doubling the numbers...
// [
//    2,  4,  6,  8, 10,
//   12, 14, 16, 18, 20
// ]
// Calculating the total sum ...
// 55
// The maximum number is ...
// 10
>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
=======
// **Assignment 5: Callback Functions with map(), filter(), and **reduce()
// Task: Create a processData function that accepts an array of numbers and a callback.
// If the callback is filterOdd, filter out even numbers.
// If the callback is doubleNumbers, double each number.
// If the callback is calculateSum, return the sum of all numbers. Bonus Task: Implement a callback to find the maximum number in the array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const processData = (arr, callback) => {
    return callback(arr);
}

const filterOdd = (arr) => {
    console.log('Filtering out the even numbers...');
    return arr.filter(num => num % 2 !== 0);
}

const doubleNumbers = (arr) => {
    console.log('Doubling the numbers...');
    return arr.map(num => num * 2);
}

const calculateSum = (arr) => {
    console.log('Calculating the total sum ...');
    return arr.reduce((acc, sum) => acc + sum, 0);
}

const maxNumInArray = (arr) => {
    console.log('The maximum number is ...');
    return arr.reduce((max, num) => max > num ? max : num);
}



console.log(processData(array, filterOdd));
console.log(processData(array, doubleNumbers));
console.log(processData(array, calculateSum));
console.log(processData(array, maxNumInArray));

//output:
// Filtering out the even numbers...
// [ 1, 3, 5, 7, 9 ]
// Doubling the numbers...
// [
//    2,  4,  6,  8, 10,
//   12, 14, 16, 18, 20
// ]
// Calculating the total sum ...
// 55
// The maximum number is ...
// 10
>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
