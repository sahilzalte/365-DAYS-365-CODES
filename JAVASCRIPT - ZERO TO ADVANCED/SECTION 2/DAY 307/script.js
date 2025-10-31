// Get elements by class name
let abcd = document.getElementsByClassName("abcd");
console.dir(abcd);

// Select all <h1> elements
let x = document.querySelectorAll("h1");
console.log(x);

// Select first <h1> and change text content
let h1 = document.querySelector("h1");
h1.textContent = "Hello Sahil";
console.log(h1);

// Change inner HTML of the same <h1>
h1.innerHTML = "<i>Hey</i>";
console.log(h1);