// ------------------------------
// RANDOM TIME DELAY
// ------------------------------
let c = Math.floor(Math.random() * 10);
console.log("Random Delay:", c);

// ------------------------------
// SIMPLE CALLBACK
// ------------------------------
let callbackFn = (value, cb) => {
    setTimeout(() => {
        console.log("Callback Value:", value);
        cb && cb();
    }, c * 1000);
};

callbackFn(10, () => {
    console.log("Callback Completed\n");
});

// ------------------------------
// CALLBACK HELL EXAMPLE
// ------------------------------
let step1 = (cb) => {
    setTimeout(() => {
        console.log("Step 1 Done");
        cb();
    }, 500);
};

let step2 = (cb) => {
    setTimeout(() => {
        console.log("Step 2 Done");
        cb();
    }, 500);
};

let step3 = (cb) => {
    setTimeout(() => {
        console.log("Step 3 Done");
        cb();
    }, 500);
};

console.log("\n--- CALLBACK HELL START ---");
step1(() => {
    step2(() => {
        step3(() => {
            console.log("Callback Hell Completed\n");
        });
    });
});

// ------------------------------
// PROMISE (res, rej)
// ------------------------------
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let randomNum = Math.floor(Math.random() * 10);
        randomNum > 5 ? resolve(randomNum) : reject(randomNum);
    }, 1000);
});

// ------------------------------
// USING PROMISE .then() .catch()
// ------------------------------
myPromise
    .then((result) => {
        console.log("Promise Resolved:", result);
    })
    .catch((err) => {
        console.log("Promise Rejected:", err);
    });

// ------------------------------
// ASYNC - AWAIT WITH TRY CATCH
// ------------------------------
async function handlePromise() {
    try {
        let value = await myPromise;
        console.log("Async/Await Value:", value);
    } catch (error) {
        console.log("Async/Await Error:", error);
    }
}

handlePromise();
