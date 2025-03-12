console.log("script.js initializing")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children
console.log(boxes);


function getRandomColor(){
    let val1 = Math.random() * 255
    let val2 = Math.random() * 255
    let val3 = Math.random() * 255
    return `rgb(${val1}, ${val2}, ${val3})`
}

Array.from(boxes).forEach(e => {
    console.log(e);
    e.style.backgroundColor = getRandomColor()
    e.style.color = getRandomColor()
})