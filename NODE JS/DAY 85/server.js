console.log("hello World")
var slugify = require('slugify')

let a = slugify('Hello World')
console.log(a)
let b = slugify('Hello Sahil', '_')
console.log(b)