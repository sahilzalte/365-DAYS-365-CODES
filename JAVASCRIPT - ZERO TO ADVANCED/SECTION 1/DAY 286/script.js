// 21. Print first 5 numbers using while loop
let n = 1;
while (n <= 5) {
    console.log(n);
    n++;
}

// 22. Print numbers until total sum reaches 10 using while loop
let total = 0;
let x = 1;
while (total < 10) {
    total += x;
    console.log(x);
    x++;
}

// 23. Do...while loop example printing 1-3
let a = 1;
do {
    console.log(a);
    a++;
} while (a <= 3);

// 24. Break inner loop in nested loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) break;
        console.log(i, j); // (1,1) (2,1) (3,1)
    }
}

// 25. Continue inner loop in nested loop
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) continue;
        console.log(i, j); // (1,1)(1,3)(2,1)(2,3)
    }
}