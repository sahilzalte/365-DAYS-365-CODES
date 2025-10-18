// Default, and Rest Parameters
// Default Parameters
function add(x = 2, y = 10) {
    return x + y;
}
// console.log(add(15)); // 25

// Rest Parameters
function abcd(a, b, ...val) {
    // console.log(a, b, val);
}
abcd(1, 2, 3, 4, 5); // [3, 4, 5]

// Return and Early Return
function add(val) {
    return 12 + val;
}
let val = add(5);
// console.log(val);

// First Class Functions

function abc(val) {
    val();
}
abc(function () {
    // console.log("Hello from first class function");
});

// Higher Order Functions

function hof(val) {
    return function () {
        // console.log(val);

    }
}
hof('Hello from higher order function')()

// Pure Functions Vs Impure Functions

let x = 10
function pureFunction() {
    console.log(x);
}

function impureFunction() {
    console.log(x);
    return x += 5
}

// Closures and Lexical Scoping

// Closure
function outer() {
    let count = 0;
    return function inner() {
        count++;
        // console.log(count);
    }
}
let fn = outer();
fn(); // 1
fn(); // 2

// Lexical Scoping

function lexical() {
    let ab = 10;
    function a() {
        let b = 20;
        function c() {
            let d = 30;
        }
    }
}

// IIFE - Immediately Invoked Function Expression

(function () {
    // console.log("Hello from IIFE");
})();


// Function Hoisting

hoistedFunction();

function hoistedFunction1() {

    console.log("This function is hoisted");
}

let hoistedFunction = function () {
    console.log("This function is hoisted");
}