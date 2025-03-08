console.log("script is loaded");

// let boxes =  document.getElementsByClassName("box")

// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("2").style.backgroundColor = "red"

// document.querySelector(".box").style.backgroundColor = "green"
// document.querySelectorAll(".box").style.backgroundColor = "green"
console.log(document.querySelectorAll(".box"))

document.querySelectorAll(".box").forEach(e => {
    // console.log(e);
    e.style.backgroundColor = "red"
})