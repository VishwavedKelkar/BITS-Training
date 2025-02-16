<<<<<<< HEAD
<<<<<<< HEAD
// Assignment 3: Analyzing JavaScript Heap Memory
// Task: Create a program that continuously adds data to an array to simulate a memory leak.
// Monitor heap memory usage using Chrome DevTools or performance.memory.
// Implement a cleanup mechanism to prevent memory issues.
// Use Chrome DevTools to capture a memory snapshot and analyze retained objects to observe the simulated memory leak.

document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.querySelector(".generate");
    const clearBtn = document.querySelector(".clear");

    let memoryArray = [];

    function addData() {
        for (let i = 0; i < 1000; i++) {
            memoryArray.push(new Array(1000).fill("*"));
        }
        console.log(memoryArray.length);
    }

    let interval = null;

    generateBtn.addEventListener("click", () => {
        if (!interval) {
            interval = setInterval(addData, 1500);
        }
    });

    clearBtn.addEventListener("click", () => {
        clearInterval(interval);
        interval = null;
        memoryArray = [];
        console.log("Memory cleared!");
    });
});
=======
// Assignment 3: Analyzing JavaScript Heap Memory
// Task: Create a program that continuously adds data to an array to simulate a memory leak.
// Monitor heap memory usage using Chrome DevTools or performance.memory.
// Implement a cleanup mechanism to prevent memory issues.
// Use Chrome DevTools to capture a memory snapshot and analyze retained objects to observe the simulated memory leak.

document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.querySelector(".generate");
    const clearBtn = document.querySelector(".clear");

    let memoryArray = [];

    function addData() {
        for (let i = 0; i < 1000; i++) {
            memoryArray.push(new Array(1000).fill("*"));
        }
        console.log(memoryArray.length);
    }

    let interval = null;

    generateBtn.addEventListener("click", () => {
        if (!interval) {
            interval = setInterval(addData, 1500);
        }
    });

    clearBtn.addEventListener("click", () => {
        clearInterval(interval);
        interval = null;
        memoryArray = [];
        console.log("Memory cleared!");
    });
});
>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
=======
// Assignment 3: Analyzing JavaScript Heap Memory
// Task: Create a program that continuously adds data to an array to simulate a memory leak.
// Monitor heap memory usage using Chrome DevTools or performance.memory.
// Implement a cleanup mechanism to prevent memory issues.
// Use Chrome DevTools to capture a memory snapshot and analyze retained objects to observe the simulated memory leak.

document.addEventListener("DOMContentLoaded", () => {
    const generateBtn = document.querySelector(".generate");
    const clearBtn = document.querySelector(".clear");

    let memoryArray = [];

    function addData() {
        for (let i = 0; i < 1000; i++) {
            memoryArray.push(new Array(1000).fill("*"));
        }
        console.log(memoryArray.length);
    }

    let interval = null;

    generateBtn.addEventListener("click", () => {
        if (!interval) {
            interval = setInterval(addData, 1500);
        }
    });

    clearBtn.addEventListener("click", () => {
        clearInterval(interval);
        interval = null;
        memoryArray = [];
        console.log("Memory cleared!");
    });
});
>>>>>>> c2b5a87dca8ce0d93ff35090e2151aee56ee7736
