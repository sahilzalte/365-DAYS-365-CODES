// Assignment Operators , Comparison Operators, and Logical Operators, Unary Operators, Ternary Operator, typeof Operator, instanceof Operator
// Assignment Operators
let a = 10;
let b = 5;
let c = a + b; // Addition
console.log("c (a + b):", c);
// Assignment with addition
a += b;
a -= b;
console.log("a (a - b):", a);

a *= b;
console.log("a (a * b):", a);

a /= b;
console.log("a (a / b):", a);

a %= b;
console.log("a (a % b):", a);

a **= 2;
console.log("a (a ** 2):", a);

// Comparison Operators
console.log("a == b:", a == b);
console.log("a != b:", a != b);
console.log("a === b:", a === b);
console.log("a !== b:", a !== b);
console.log("a > b:", a > b);
console.log("a < b:", a < b);
console.log("a >= b:", a >= b);
console.log("a <= b:", a <= b);

// Logical Operators
console.log("a > 0 && b > 0:", a > 0 && b > 0);
console.log("a > 0 || b < 0:", a > 0 || b < 0);
console.log("!(a > 0):", !(a > 0));

// Unary Operators
let d = 5;
console.log("d++:", d++);
console.log("After d++:", d);
console.log("++d:", ++d);
console.log("d--:", d--);
console.log("After d--:", d);
console.log("--d:", --d);

// Ternary Operator
let result = (a > b) ? "a is greater than b" : "a is not greater than b";
console.log("Ternary result:", result);

// typeof Operator
console.log("typeof a:", typeof a);
console.log("typeof 'Hello':", typeof 'Hello');
console.log("typeof true:", typeof true);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
console.log("typeof function() {}:", typeof function() {});
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null); // Note: this returns 'object' due to a historical bug in JavaScript
console.log("typeof NaN:", typeof NaN); // Note: this returns 'number'
console.log("typeof Infinity:", typeof Infinity); // Note: this returns 'number'
console.log("typeof Symbol('id'):", typeof Symbol('id')); // Note: this returns 'symbol'

// instanceof Operator
console.log("[] instanceof Array:", [] instanceof Array);
console.log("{} instanceof Object:", {} instanceof Object);
console.log("new Date() instanceof Date:", new Date() instanceof Date);
console.log("function() {} instanceof Function:", function() {} instanceof Function);