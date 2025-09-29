// Loops 

// Break

for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        break; // Exit the loop when i is 5
    }
}

// Continue

for (let j = 0; j < 10; j++) {
    if (j % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(j);
}