<<<<<<< HEAD
// Assignment 1: Callback Functions
// Task: Write a function fetchData that simulates fetching data from a server using a callback function.
// The function should take a callback that processes the data after a delay of 2 seconds.
// Use setTimeout to simulate the server delay.
// The data should be an array of user names. Bonus Task: Implement error handling in the callback function to simulate a case where the server might fail.

const fetchData = (callback) => {
    console.log('fetching the data ...');

    setTimeout(() => {
        const success = Math.trunc(Math.random() * 10) > 3;
        if (success) {
            const data = ['Alice', 'Bob', 'John', 'Smith'];
            callback(null, data);
            console.log('Data fetched successfully')
        }
        else {
            const error = 'Failed to fetch the data! ';
            callback(error, null);
        }
    }, 2000);
}

const dataProcess = (error, data) => {
    if (error) {
        console.log('Error : ', error);
    }
    else {
        console.log('Data : ', data);
    }
}

fetchData(dataProcess);


//output 1:

// fetching the data ...
// Data :  [ 'Alice', 'Bob', 'John', 'Smith' ]
// Data fetched successfully

//output 2:

// fetching the data ...
=======
// Assignment 1: Callback Functions
// Task: Write a function fetchData that simulates fetching data from a server using a callback function.
// The function should take a callback that processes the data after a delay of 2 seconds.
// Use setTimeout to simulate the server delay.
// The data should be an array of user names. Bonus Task: Implement error handling in the callback function to simulate a case where the server might fail.

const fetchData = (callback) => {
    console.log('fetching the data ...');

    setTimeout(() => {
        const success = Math.trunc(Math.random() * 10) > 3;
        if (success) {
            const data = ['Alice', 'Bob', 'John', 'Smith'];
            callback(null, data);
            console.log('Data fetched successfully')
        }
        else {
            const error = 'Failed to fetch the data! ';
            callback(error, null);
        }
    }, 2000);
}

const dataProcess = (error, data) => {
    if (error) {
        console.log('Error : ', error);
    }
    else {
        console.log('Data : ', data);
    }
}

fetchData(dataProcess);


//output 1:

// fetching the data ...
// Data :  [ 'Alice', 'Bob', 'John', 'Smith' ]
// Data fetched successfully

//output 2:

// fetching the data ...
>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
// Error :  Failed to fetch the data! 