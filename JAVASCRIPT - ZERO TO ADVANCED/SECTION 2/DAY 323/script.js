// Common Event Objects

// let abcd = document.querySelector(".abcd");

// abcd.addEventListener("click", (event) => {
//     console.log(event);
//     console.log(event.type);
//     console.log(event.target);
//     console.log(event.timeStamp);
// });

// Event Bubbling

let nav = document.querySelector(".nav")
nav.addEventListener("click", (event) => {
    alert("nav clicked");
})