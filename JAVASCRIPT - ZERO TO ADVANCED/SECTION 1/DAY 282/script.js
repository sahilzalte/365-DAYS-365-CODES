// 1. Print numbers from 1 to 5 using a for loop
for (let i = 1; i <= 5; i++) {
    console.log(i); // 1 2 3 4 5
}

// 2. Print numbers from 5 to 1 using a for loop
for (let i = 5; i >= 1; i--) {
    console.log(i); // 5 4 3 2 1
}

// 3. Print all even numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) console.log(i); // 2 4 6 8 10
}

// 4. Print all odd numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) console.log(i); // 1 3 5 7 9
}

// 5. Print numbers from 1 to 10 using a while loop
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}