// Q1. Find the sum of numbers from 1 to 100 using a loop.

let sum = 0
for (let i = 1; i <= 100; i++) {
    sum = sum + i
}
// console.log(sum);

// Q2. Print all numbers between 1 to 50 that are divisible by 3.

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        // console.log(i);
    }
}

// Q3. Ask the user for a number and print whether each number from 1 to that number is even or odd.

let val = prompt("Give a Number")

for (i = 1; i <= val; i++) {
    if (i % 2 === 0) {
        // console.log(`${i} is Even`);
    }
    else {
        // console.log(`${i} is Odd`);
    }
}

// Q4. Count how many numbers between 1 to 100 are divisible by both 3 and 5

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`${i} is Divisible by both 3 and 5 `);
    }
}