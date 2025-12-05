// ---------------------------------
// This Keyword Examples
// ---------------------------------

// Global scope `this`
console.log(this);

const thh = (params) => {
    // Arrow functions take `this` from outer scope
    console.log(this);
}
thh();

let obj = {
    name1: "Sahil1",
    age: 26,
    getName: function () {
        // `this` refers to the object
        console.log(this);
    }
}

obj.getName();

// ---------------------------------
// Event Handler Example
// ---------------------------------

let h1 = document.querySelector('h1');
h1.addEventListener('click', function () {
    // `this` refers to the clicked element
    this.style.color = 'red';
});

// ---------------------------------
// Class Example
// ---------------------------------

class Abcd {

    constructor() {
        // Constructor runs when object is created
        console.log('Suiiiiiiiiii Ronaldo is GOAT Because he is better than Messi');
        this.a = 12;  // setting a property
    }
}

let a = new Abcd();
console.log(a);  // object of class

// ---------------------------------
// call(), apply(), bind()
// ---------------------------------

let obj1 = {
    name: "Sahil",
    age: 26,
}

function abcd(...pa) {
    // Uses `this` from call/apply/bind
    console.log(this.name, pa);
}

// call → pass arguments individually
abcd.call(obj1);

// apply → pass arguments as array
abcd.apply(obj1, [2, 3, 4, 5, 6]);

// bind → returns new function with fixed `this`
let boundfnc = abcd.bind(obj1, 7, 8, 9);
boundfnc();