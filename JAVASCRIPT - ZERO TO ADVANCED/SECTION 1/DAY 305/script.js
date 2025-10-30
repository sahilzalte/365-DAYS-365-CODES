// Objects

let obj = {
    name: "Alice",
    age: 30,
    khanna: "Apple"
}

// let x = obj['khanna']
let x = obj.khanna
// console.log(x);

// Nested Objects

let nestedObj = {
    name: "Bob",
    age: 25,
    address: {
        street: "123 Main St",
        city: "New York",
        country: "USA"
    }
}

let cityName = nestedObj.address.city
// console.log(cityName);

// Object Destructuring

let = { street, city, country } = nestedObj.address

// console.log(street);
// console.log(city);
// console.log(country);

// Looping through Objects

let person = {
    name: "Charlie",
    age: 28,
    profession: "Engineer",
    email: "charlie.brown@example.com"
}

for (let key in person) {
    // console.log(key);          // keys
    // console.log(person[key]);  // values
    // console.log(`${key}: ${person[key]}`); // key-value pairs
}


// object.keys

let s = Object.keys(person)
let a = Object.entries(person)
// console.log(a);

// Copy Objects : spread, Object.assign,deep clone

let original = {
    name: "David",
    age: 35,
    address: {
        street: "456 Elm St",
        city: "Los Angeles"
    }
}

let copy1 = { ...original }  // shallow copy
// console.log(copy1);

let copy2 = Object.assign({}, original) // shallow copy
// console.log(copy2);

// Deep Clone
let deepClone = JSON.parse(JSON.stringify(original))
deepClone.address.city = "San Francisco"
// console.log(original);
// console.log(deepClone);

// Optional Chaining

let user = {
    profile: {
        name: "Eve",
        contact: {
            email: "",
            phone: "123-456-7890"
        }
    }
}

let userEmail = user?.profile?.contact?.email
// console.log(userEmail); // undefined

let userPhone = user?.profile?.contact?.phone
// console.log(userPhone); // "123-456-7890"

// Computed properties

let role = "sahil"

let userInfo = {
    name: "Frank",
    Name: [role]
}
console.log(userInfo);  