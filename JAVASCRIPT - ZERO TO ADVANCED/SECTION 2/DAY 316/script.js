// Common Event Listeners

// 1. Click Event Listener

let a = document.querySelector("h1")

a.addEventListener("click", () => {
    a.style.color = "red"
})

// 2. Input Event Listener

let inputBox = document.querySelector("input")

inputBox.addEventListener("input", (data) => {
    console.log(data.target.value);
})