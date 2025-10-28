// Array Methods

// demo array
let arr = [3, 1, 4, 2];
// console.log('original:', arr);

// push - add to end
arr.push(5);
console.log('after push(5):', arr);

// pop - remove from end
const popped = arr.pop();
console.log('popped:', popped, 'array:', arr);

// unshift - add to beginning
arr.unshift(0);
console.log('after unshift(0):', arr);

// shift - remove from beginning
const shifted = arr.shift();
console.log('shifted:', shifted, 'array:', arr);

// splice - modify array (start index, deleteCount, ...items)
arr.splice(1, 2, 'a', 'b'); // remove 2 items at index 1, insert 'a','b'
console.log('after splice(1,2,"a","b"):', arr);

// slice - create a shallow copy (non-destructive)
const sliced = arr.slice(0, 3);
console.log('slice(1,3):', sliced, 'original remains:', arr);

// reverse - in-place reversal 
arr.reverse();
console.log('after reverse():', arr);

// sort - in-place; default is lexicographic for strings
arr = ['10', '2', '30', '4'];
console.log('lexicographic sort:', arr.sort());

//  forEach - iterate over elements

let arr1 = [1, 2, 3]

arr1.forEach((val) => {
  // console.log(val + 5);
})

// map - create a new array by transforming each element

let a = arr1.map((val) => {
  if (1) return val * 10
}
)

// Filter - create a new array with elements that pass a test

let filtered = arr1.filter((val) => {
  if (val > 1) return true
})

// reduce - accumulate values into a single result

let b = arr1.reduce((acc, val) => {
  return acc + val
}, 0)


// find - return the first element that satisfies a condition

let found = arr1.find((val) => {
  return val >= 2
})

// Some - check if at least one element passes a test

let hasLargeNumber = arr1.some((val) => {
  return val > 2
})

// Every - check if all elements pass a test

let allLargeNumbers = arr1.every((val) => {
  // return val > 1
  return val > 0
})


// Destructuring Assignment

let nums = [1, 2, 3, 4, 5];

let [x, y, , , z] = nums;


// spread operator

let arrA = [1, 2, 3];
let arrB = [...arrA];
console.log(arrB);
