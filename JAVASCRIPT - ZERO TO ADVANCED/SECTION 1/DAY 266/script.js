// Exercise Question 1

let numX = 10;
let numY = 20;

if (numX > 5 && numY < 25) {
    console.log("A");
} else {
    console.log("B");
}

// Exercise Question 2

let userIsAdmin = true;
let userIsLoggedIn = false;

if (userIsAdmin || userIsLoggedIn) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}

// Exercise Question 3

let valueX = 10;
let valueY = 20;

if (valueX > 5 && valueY < 25) {
    console.log("A");
} else {
    console.log("B");
}

// Exercise Question 4

let numberN = 5;
let calcResult = numberN++ + ++numberN;
console.log(calcResult);

// Exercise Question 5

let testScore = 78;
let testGrade = testScore >= 90 ? "A" : testScore >= 75 ? "B" : testScore >= 60 ? "C" : "Fail";
console.log(testGrade);

// Exercise Question 6

let incrementA = 5;
incrementA++;
console.log(incrementA);

// Exercise Question 7

let valueM = 10;
console.log(valueM--); // Line 1
console.log(valueM); // Line 2

// Exercise Question 8

let postX = 3;
let postY = postX++;
console.log(postX, postY);

// Exercise Question 9

let boolA = 0;
if (boolA) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}

// Exercise Question 10

let userPoints = 120;
let userStatus = userPoints > 100 ? "Gold" : userPoints > 50 ? "Silver" : "Bronze";
console.log(userStatus);

// Exercise Question 11

let temperature = 35;
if (!(temperature < 30)) {
    console.log("Hot");
} else {
    console.log("Pleasant");
}

// Exercise Question 12

let userLoggedIn = true;
let userHasToken = false;
let userAccess = userLoggedIn && userHasToken ? "Allow" : "Deny";
console.log(userAccess);

// Exercise Question 13

let preP = 4;
let preQ = ++preP;
console.log(preP, preQ);

// Exercise Question 14

let totalLikes = 100;

function likePost() {
    return ++totalLikes;
}

console.log(likePost());
console.log(totalLikes);

// Exercise Question 15

let counter = 5;

if (counter-- === 5) {
    console.log("Matched");
} else {
    console.log("Not matched");
}