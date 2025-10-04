// Q1 Print numbers from 1 to 10 using for loop

for (let i = 1; i <= 10; i++) {
    // console.log(i);
}

// Q2 Print numbers from 10 to 1 using for loop

for (let i = 10; i >= 1; i--) {
    // console.log(i);
}

// Q3 Print even numbers from 1 to 20 using for loop

for (let i = 1; i <= 20; i++) {
    if (i % 2 != 0) {
        continue;
    }
    // console.log(i);
}

// Q4 Print odd numbers from 1 to 15 using while loop

let i = 1
while (i <= 15) {
    i = i + 1
    if (i % 2 == 0) {
        continue;
    }
    // console.log(i);
}

// Q5 Print multiplication table of 5
const num = 5
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}
