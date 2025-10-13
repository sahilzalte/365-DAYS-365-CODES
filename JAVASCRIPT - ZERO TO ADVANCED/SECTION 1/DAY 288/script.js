// 31. Nested loop: multiplication table of 1 to 3
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} x ${j} = ${i*j}`);
    }
}

// 32. Print array elements until number 4 is found using break
let arr2 = [1, 2, 3, 4, 5];
for (let num of arr2) {
    if (num === 4) break;
    console.log(num); // 1 2 3
}

// 33. Skip negative numbers in array using continue
let arr3 = [1, -2, 3, -4, 5];
for (let num of arr3) {
    if (num < 0) continue;
    console.log(num); // 1 3 5
}

// 34. Print numbers 1-5 using recursion (alternative to loops)
function printNums(n) {
    if (n > 5) return;
    console.log(n);
    printNums(n+1);
}
printNums(1);

// 35. Print only odd numbers using while loop
let c = 1;
while (c <= 10) {
    if (c % 2 === 0) {
        c++;
        continue;
    }
    console.log(c); // 1 3 5 7 9
    c++;
}