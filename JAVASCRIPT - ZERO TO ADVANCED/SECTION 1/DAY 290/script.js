// Q.1 Skip Multiples of 3

// Write a loop from 1 to 20 that:
// Skips multiples of 3
// Prints all other numbers

// Use continue statement

// Expected Output: 
// 1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)

for (let i = 1; i <= 20; i++) {
    if (i % 3 == 0) {
        continue
    }
    // console.log(i);
}



// Q2: Print First 5 Odd Numbers Only

// Write a loop from 1 to 100 that:
// ---> Prints only 5 odd numbers
// ---> Then stops the loop

// 💡 Use both if, continue, and a counter + break

// Expected output:
// 1 3 5 7 9

for (let i = 1, count = 0; i <= 100; i++) {

    if (i % 2 !== 0) {
        if (count === 5) {
            break
        }
        count = count + 1
        console.log(i);
    }
}
