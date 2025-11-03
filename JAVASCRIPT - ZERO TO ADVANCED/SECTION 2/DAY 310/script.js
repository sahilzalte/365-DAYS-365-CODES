// Q.1 Select the heading of a page by ID and change its text to "Welcome to Sheryians".

let x = document.querySelector("#head")
x.textContent = "Welcome to Sheryians"


// Q.2 select all <li> elements and print thier text using a loop.

let liElements = document.querySelectorAll("li");
liElements.forEach((element) => {
    let a = element.textContent
    console.log(a);
});