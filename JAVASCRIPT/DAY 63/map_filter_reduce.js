// Define an array of numbers
let arr = [14, 2, 3, 7, 8];

// Using the map function to create a new array with squares of elements in `arr`
let newArr = arr.map((e) => {
    return e ** 2;
});
console.log(newArr); // Output: [196, 4, 9, 49, 64]

// Function to filter elements greater than 7
const GreterThanSeven = (e) => {
    if (e > 7) {
        return e; // Returns the value if it's greater than 7
    }
    return e > 7; // This line is redundant and does nothing useful
};

// Filtering array elements that are greater than 7
console.log(arr.filter(GreterThanSeven)); // Output: [14, 8]

// Define another array
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to sum two numbers
const red = (a, b) => {
    return a + b;
};

// Using reduce to sum all elements in arr2
console.log(arr2.reduce(red)); // Output: 55

// Converting a string into an array using Array.from()
s = Array.from("Sahil");
console.log(s); // Output: ['S', 'a', 'h', 'i', 'l']
