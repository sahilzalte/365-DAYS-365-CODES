// 1. ⚙️ Variable Scope: Global, Block, Functional

// Global Scope
const globalVar = "I'm everywhere!";

function showScope() {
    // Functional Scope (local to this function)
    const functionalVar = "I'm only in this function.";
    console.log(globalVar); // Accessible

    if (true) {
        // Block Scope (local to this 'if' block)
        let blockVar = "I'm only in this block.";
        console.log(blockVar); // Accessible inside the block
    }

    // console.log(blockVar); // ERROR: BlockVar is not defined here
    console.log(functionalVar); // Accessible
}

showScope();
// console.log(functionalVar); // ERROR: functionalVar is not defined here



// 2. 🧠 Execution Context

console.log(varVariable); // Output: undefined (var is hoisted and initialized)
// console.log(letVariable); // ERROR: Cannot access 'letVariable' before initialization (let is hoisted but not initialized)

var varVariable = "I'm defined later";
let letVariable = "I'm defined later too";

greet(); // Output: Hello! (Function declaration is fully hoisted)

function greet() {
    console.log("Hello!");
}


// 3. 🗺️ Lexical Scope vs Dynamic Scope

const x = 10; // Outer scope variable

function first() {
    const x = 20; // x in the scope of first()
    second(); // When second() runs, it looks up 'x' where it was DEFINED (in global scope)
}

function second() {
    // Lexical Scope: The engine looks for 'x' in the scope where second() was WRITTEN (Global)
    console.log(x);
}

first(); // Output: 10
// If JavaScript used Dynamic Scope, the output would be 20 because second() was CALLED from first().


// 4. 📦 Closure Definition and Preservation

function createCounter() {
    let count = 0; // This variable is the "preserved" state

    // This inner function is the closure
    return function () {
        count++;
        return count;
    };
}

// 'counter1' is a new closure instance.
const counter1 = createCounter();

// Each call to counter1 remembers and updates its own separate 'count' variable.
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2

// 'counter2' is a *separate* closure instance with its own 'count'.
const counter2 = createCounter();
console.log(counter2()); // Output: 1



// 5. 🛠️ Use Cases: Private Counters, Encapsulation

// Function defined in section 4
function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();
console.log(counter()); // 1
// console.log(counter.count); // undefined - cannot access 'count' directly

// Encapsulation Example (Module Pattern)

const User = (function () {
    let name = "Alice"; // This is a PRIVATE variable

    // This object contains the PUBLIC methods
    return {
        getName: function () {
            return name;
        },
        setName: function (newName) {
            name = newName;
        }
    };

})(); // The () at the end immediately executes the function

console.log(User.getName()); // Output: Alice (Access via public method)
User.setName("Bob");
console.log(User.getName()); // Output: Bob
// console.log(User.name); // Output: undefined - cannot access 'name' directly