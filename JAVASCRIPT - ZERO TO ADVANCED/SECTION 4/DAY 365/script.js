

// Event Loop

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 1000);

setTimeout(() => {
    console.log("Timeout 2");
}, 0);

console.log("End");
