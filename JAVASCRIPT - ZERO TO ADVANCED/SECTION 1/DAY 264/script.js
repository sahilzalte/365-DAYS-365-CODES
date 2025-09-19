// Comparison Operators

//  = === != !== >= <= < > 
const a = 5;
const b = '5';

// Equality vs strict equality
console.log('a == b:', a == b);     // true (type coercion)
console.log('a === b:', a === b);   // false (different types)

// Inequality vs strict inequality
console.log('a != b:', a != b);     // false
console.log('a !== b:', a !== b);   // true

// Relational operators
const c = 10;
console.log('a < c:', a < c);       // true
console.log('a > c:', a > c);       // false
console.log('c >= 10:', c >= 10);   // true
console.log('c <= 10:', c <= 10);   // true

// Edge cases with coercion
console.log('null == undefined:', null == undefined);   // true
console.log('null === undefined:', null === undefined); // false
console.log('"0" == 0:', "0" == 0);                     // true
console.log('"0" === 0:', "0" === 0);                   // false
console.log('false == 0:', false == 0);                 // true
console.log('false === 0:', false === 0);               // false
console.log('[] == 0:', [] == 0);                       // true

// Object reference comparison
const obj1 = { x: 1 };
const obj2 = { x: 1 };
const obj3 = obj1;
console.log('obj1 == obj2:', obj1 == obj2);             // false
console.log('obj1 === obj2:', obj1 === obj2);           // false
console.log('obj1 === obj3:', obj1 === obj3);           // true