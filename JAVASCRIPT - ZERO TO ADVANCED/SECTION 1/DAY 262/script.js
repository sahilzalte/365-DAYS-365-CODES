// Type coercion (== vs ===)
// Truthly vs falsy values


// type coercion 
console.log(!!document.all) // false
console.log(!!null) // false
console.log(!!undefined) // false
console.log(!!0) // false
console.log(!!'') // false
console.log(!!NaN) // false
console.log(!!1) // true
console.log(!!'hello') // true
console.log(!![]) // true


// == vs ===
console.log(1 == '1') // true
console.log(1 === '1') // false

console.log(null == undefined) // true
console.log(null === undefined) // false

