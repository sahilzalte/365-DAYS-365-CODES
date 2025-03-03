// Define an array
let arr = [1, 2, 3, 7, 8];
//  index   0  1  2  3  4  

console.log(arr);          // Output: [1, 2, 3, 7, 8]
console.log(arr.length);   // Output: 5 (length of the array)

// Modifying an element in the array
arr[0] = 4332;
console.log(arr);          // Output: [4332, 2, 3, 7, 8]

// Converting array to a string
console.log(arr.toString());  // Output: "4332,2,3,7,8"

// Joining elements with " and " separator
console.log(arr.join(" and ")); // Output: "4332 and 2 and 3 and 7 and 8"

// Removing the last element using pop()
arr.pop();
console.log(arr);  // Output: [4332, 2, 3, 7]

// Adding new elements to the end using push()
arr.push(100);
arr.push("Sahil");
console.log(arr);  // Output: [4332, 2, 3, 7, 100, "Sahil"]

// Removing the first element using shift()
arr.shift();
console.log(arr);  // Output: [2, 3, 7, 100, "Sahil"]

// Adding a new element at the start using unshift()
arr.unshift("Aman");
console.log(arr);  // Output: ["Aman", 2, 3, 7, 100, "Sahil"]

// Deleting an element at index 4 (leaves an empty slot)
delete arr[4];
console.log(arr);  // Output: ["Aman", 2, 3, 7, empty, "Sahil"]
console.log(arr.length); // Output: 6 (length remains the same even with an empty slot)

// Concatenating multiple arrays
let a1 = [1, 2, 3];
let a2 = [4, 5, 6];
let a3 = [7, 8, 9];

console.log(a1.concat(a2, a3));  // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Sorting the array (converts all elements to strings before sorting)
console.log(arr.sort());

// Define a new array of numbers
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Using splice to remove elements
numbers.splice(1, 2); // Removes 2 elements starting from index 1
console.log(numbers); // Output: [1, 4, 5, 6, 7, 8, 9, 10]

// Using splice to replace elements
numbers.splice(1, 2, 20, 30, 40);
console.log(numbers); // Output: [1, 20, 30, 40, 6, 7, 8, 9, 10]
