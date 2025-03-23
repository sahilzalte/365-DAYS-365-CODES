# Solutions for Sigma Developers Problems

## 1. The Magical Sorting Hat
```javascript
function sortingHat(students) {
    return students.map(name => {
        if (name.length < 6) return { name, house: "Gryffindor" };
        if (name.length < 8) return { name, house: "Hufflepuff" };
        if (name.length < 12) return { name, house: "Ravenclaw" };
        return { name, house: "Slytherin" };
    });
}
console.log(sortingHat(["Harry", "Hermione", "Ron", "Draco", "Luna"]));
```

## 2. The Double Trouble
```javascript
function doubleTrouble(arr) {
    return arr.map((num, index, array) => (index === 0 || num !== array[index - 1]) ? num * 2 : num);
}
console.log(doubleTrouble([1, 2, 2, 3, 4, 4, 5]));
```

## 3. The Mirror Mirror
```javascript
function mirrorString(str) {
    return str + str.split("").reverse().join("");
}
console.log(mirrorString("hello"));
```

## 4. The Password Validator
```javascript
function isValidPassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);
}
console.log(isValidPassword("Pass1234"));
console.log(isValidPassword("weakpass"));
```

## 5. The Sum Selector
```javascript
function sumUntilNegative(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num < 0) break;
        sum += num;
    }
    return sum;
}
console.log(sumUntilNegative([3, 5, 7, -2, 8]));
```

## 6. The Vowel Counter
```javascript
function countVowels(str) {
    return (str.match(/[aeiouAEIOU]/g) || []).length;
}
console.log(countVowels("Hello World"));
```

## 7. The Local Storage Manager
```javascript
function saveNoteToLocalStorage(note) {
    localStorage.setItem("note", JSON.stringify(note));
}
saveNoteToLocalStorage({ title: "Reminder", content: "Complete the project" });
```

## 8. Async Array Mapping
```javascript
async function asyncDouble(arr) {
    return await Promise.all(arr.map(num => new Promise(resolve => setTimeout(() => resolve(num * 2), 500))));
}
asyncDouble([1, 2, 3]).then(console.log);
```

## 9. The Asynchronous Shopper
```javascript
async function placeOrder() {
    return new Promise(resolve => setTimeout(() => resolve("Order Confirmed"), Math.random() * 2000));
}
placeOrder().then(console.log);
```

## 10. The Coffee Machine
```javascript
async function brewCoffee(type) {
    return new Promise(resolve => setTimeout(() => resolve(`${type} coffee is ready!`), Math.random() * 3000));
}
brewCoffee("Espresso").then(console.log);
```

## 11. The Array Filterer
```javascript
function filterProducts(products, criterion) {
    return products.filter(product => Object.keys(criterion).every(key => product[key] === criterion[key]));
}
console.log(filterProducts([{ name: "Phone", price: 500 }, { name: "Laptop", price: 1000 }], { price: 500 }));
```

## 12. The Token Manager
```javascript
function setAuthToken(token, expiresInMinutes) {
    const expiry = new Date().getTime() + expiresInMinutes * 60000;
    localStorage.setItem("authToken", JSON.stringify({ token, expiry }));
}
setAuthToken("abcd1234", 30);
```

## 13. The Shopping Cart Totalizer
```javascript
function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}
console.log(calculateTotal([{ price: 10, quantity: 2 }, { price: 20, quantity: 1 }]));
```

## 14. The Window Scroller
```javascript
function smoothScrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
smoothScrollToTop();
```