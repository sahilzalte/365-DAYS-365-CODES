// 16. Skip number 3 using continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;
    console.log(i); // 1 2 4 5
}

// 17. Nested loop: Print table of 2
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(i * j);
    }
}

// 18. Print numbers 1-10, stop at first even number using break
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) break;
    console.log(i); // 1
}

// 19. Print numbers 1-10, skip even numbers using continue
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) continue;
    console.log(i); // 1 3 5 7 9
}

// 20. Count down from 10 to 1, skip 5 using continue
for (let i = 10; i >= 1; i--) {
    if (i === 5) continue;
    console.log(i); // 10 9 8 7 6 4 3 2 1
}
