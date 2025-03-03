// Define an array
let a = [4, 7, 24, 65, 1];

// Traditional for loop to iterate over the array (commented out)
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);
// }

// Using forEach to iterate over the array with value, index, and the entire array (commented out)
// a.forEach((Value, index, arr) => {
//     console.log(index, Value, arr);
// });

// Define an object
let obj = {
    name: "Sahil",
    age: 18,
    city: "Yeola"
};

// Using for...in loop to iterate over the object keys
for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(key + ":", element);
    }
}

// Using for...of loop to iterate over array elements
for (const element of a) {
    console.log(element);
}
