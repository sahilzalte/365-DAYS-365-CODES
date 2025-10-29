// Q.1 Create an array with 3 fruits and print the second fruit.
let arr = ['apple', 'banana', 'guava'];
// console.log(arr[1]);

// Q.2 Add "Mango" at the end and "Pineapple" at the beginning of this array:
let fruits1 = ['apple', 'Banana'];
fruits1.push('Mango');
fruits1.unshift('Pineapple');
// console.log(fruits1);

// Q.3 Replace "Banana" with "Kiwi" in the array above
let fruits2 = ['Apple', 'Banana'];
fruits2[1] = 'Kiwi';
// console.log(fruits2);

// Q.4 Remove the last item from this array using a method:
let numbers = [1, 2, 3];
numbers.pop();
// console.log(numbers);

// Q.5 Insert "Red" and "Blue" at index 1 in this array:
let colors = ['Green', 'Yellow'];
colors.splice(1, 0, 'Red', 'Blue');
// console.log(colors);

// Q.6 Extract only middle 3 elements from this array
let items = [1, 2, 3, 4, 5, 6];
let new_item = items.slice(1, 4);
// console.log(new_item);

// Q.7 Sort this array alphabetically and then reverse it
let names = ['zara', 'arman', 'malik', 'bhai'];
let a = names.sort().reverse();
// console.log(a);

// Q.8 Use .map() to square each number:
let sqr = [1, 2, 3, 4];
let x = sqr.map(val => val * val);
// console.log(x);

// Q.9 Use .filter() to keep numbers greater than 10
let filter = [5, 12, 8, 20, 3];
let z = filter.filter(val => val > 10);
// console.log(z);

// Q.10 Use .reduce() to find the sum of this array:
let reduce = [10, 20, 30];
let sum = reduce.reduce((acc, val) => acc + val, 0);
// console.log(sum);

// Q.11 Use .find() to get the first number less than 10:
let fnd = [12, 15, 3, 8, 20];
let ans = fnd.find(val => val < 10);
// console.log(ans);

// Q.12 Use .some() to check if any student has scored below 35:
let students = [10, 20, 30, 40, 50];
let maxmrkstd = students.some(val => val < 35);
// console.log(maxmrkstd);

// Q.13 Use .every() to check if all numbers are even:
let allnum = [2, 4, 6, 8, 10];
let an = allnum.every(params => params % 2 === 0);
// console.log(an);

// Q.14 Destructure this array to get firstName and lastName
let fullname = ['Sahil', 'Zalte'];
let [f, l] = fullname;
// console.log(f);
// console.log(l);

// Q.15 Merge two arrays using spread operator
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let MergedArr = [...arr1, ...arr2];
// console.log(MergedArr);

// Q.16 Add "India" to the start of this array using spread:
let countryName = ['USA', 'PORTUGAL'];
countryName = ['India', ...countryName];
// console.log(countryName);

// Q.17 Clone this array properly (not by reference):
let mainarr = [1, 2, 3];
let copyarr = [...mainarr];
console.log(copyarr);
