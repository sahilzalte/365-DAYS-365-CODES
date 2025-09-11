// Hoisting impact per type

console.log(a); // undefined
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// console.log(c); // ReferenceError: Cannot access 'c' before initialization

var a = 1;
let b = 2;
const c = 3;
console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
