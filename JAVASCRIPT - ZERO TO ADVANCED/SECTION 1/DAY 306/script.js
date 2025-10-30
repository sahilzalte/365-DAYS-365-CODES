// Q.1 Create an object for a student with name , age and isEnrolled

let student = {
    name: "Sahil",
    age: 18,
    isEnrolled: true
};
// console.log(student);


// Q.2 Access the value of "first-name" from this object:

const user = {
    "first-name": 'Sai'
}

let x = user["first-name"];
// console.log(x);

// Q.3 Given a dynamic key let key = "age", how will you access user[key]?

let key = "age";
const obj = {
    age: 36
}
let value = obj[key];
// console.log(value);

// Q.4 From the Object below, print the latitude:

const userLocation = {
    location: {
        latitude: "34.0522 N",
        longitude: "118.2437 W"
    }
}
let lat = userLocation.location.latitude;
console.log(lat);
