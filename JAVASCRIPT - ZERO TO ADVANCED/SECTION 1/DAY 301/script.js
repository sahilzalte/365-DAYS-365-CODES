// 1️⃣ Regular Function vs Arrow Function
function regularFunc(name) {
  return "Hello " + name + " (Regular Function)";
}

const arrowFunc = (name) => {
  return "Hello " + name + " (Arrow Function)";
};

console.log(regularFunc("Sahil"));
console.log(arrowFunc("Sahil"));

// Difference in 'this' behavior
const user = {
  name: "Sahil",
  regular: function () {
    console.log("Regular this.name =", this.name); // Works ✅
  },
  arrow: () => {
    console.log("Arrow this.name =", this.name); // Undefined ❌
  },
};

user.regular();
user.arrow();

// 2️⃣ Function Hoisting and Temporary Dead Zone (TDZ)

// ✅ Regular function is hoisted
sayHello();
function sayHello() {
  console.log("Hello! (Function Hoisting works)");
}

// ❌ Arrow function is not hoisted
// sayHi(); // Uncomment → ReferenceError
const sayHi = () => {
  console.log("Hi! (Arrow function not hoisted)");
};
sayHi();

// ❌ TDZ example with let
// console.log(age); // Uncomment → ReferenceError: Cannot access 'age' before initialization
let age = 21;
console.log("Age =", age);
