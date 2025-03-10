a = document.querySelectorAll('.box')

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

console.log(getRandomColor()); // Example output: #a3f9b2

boxes = document.querySelectorAll(".box")

boxes.forEach(box => {
  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Select all boxes
let boxes = document.querySelectorAll(".box");

// Select container once (not inside loop)
let container = document.querySelector(".container");

// Loop through each box
boxes.forEach(box => {
    box.style.backgroundColor = getRandomColor();  // Background color
    box.style.color = getRandomColor();  // Text color
});

// Change container background
container.style.backgroundColor = getRandomColor();

    box.style.backgroundColor = getRandomColor()
    box.style.Color = getRandomColor()
    ab = document.querySelector(".container")
    ab.style.backgroundColor = getRandomColor()
})