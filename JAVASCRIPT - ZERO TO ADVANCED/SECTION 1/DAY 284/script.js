// 11. Print elements of an array using for loop
let arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // 1 2 3 4 5
}

// 12. Print elements of an array using for...of loop
for (let value of arr) {
    console.log(value); // 1 2 3 4 5
}

// 13. Print keys of an object using for...in loop
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key); // a b c
}

// 14. Print values of an object using for...in loop
for (let key in obj) {
    console.log(obj[key]); // 1 2 3
}

// 15. Stop loop when number is 3 using break
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;
    console.log(i); // 1 2
}