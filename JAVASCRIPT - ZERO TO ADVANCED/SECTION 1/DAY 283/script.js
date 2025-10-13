// 6. Print numbers from 10 to 1 using a while loop
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// 7. Print numbers 1 to 5 using do...while loop
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);

// 8. Print first 5 multiples of 2 using for loop
for (let i = 1; i <= 5; i++) {
    console.log(i * 2); // 2 4 6 8 10
}

// 9. Sum of numbers from 1 to 5
let sum = 0;
for (let i = 1; i <= 5; i++) {
    sum += i;
}
console.log(sum); // 15

// 10. Find factorial of 5
let factorial = 1;
for (let i = 1; i <= 5; i++) {
    factorial *= i;
}
console.log(factorial); // 120
