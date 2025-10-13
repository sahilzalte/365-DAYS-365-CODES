
// 26. Print all characters of a string
let str = "hello";
for (let char of str) {
    console.log(char); // h e l l o
}

// 27. Print only vowels in a string using continue
let s = "javascript";
for (let char of s) {
    if (!'aeiou'.includes(char)) continue;
    console.log(char); // a a i
}

// 28. Print numbers 1 to 5 using infinite loop with break
let b = 1;
for (;;) {
    if (b > 5) break;
    console.log(b);
    b++;
}

// 29. Print sum of first 5 numbers using for loop
let ssum = 0;
for (let i = 1; i <= 5; i++) {
    ssum += i;
}
console.log(ssum); // 15

// 30. Print multiples of 3 less than 20
for (let i = 1; i < 20; i++) {
    if (i % 3 !== 0) continue;
    console.log(i); // 3 6 9 12 15 18
}