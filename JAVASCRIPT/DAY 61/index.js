// Exercise 9 Solution:


let random = Math.random()
let a = prompt("Enter First Number ")
let c = prompt("Enter Operation:")
let b = prompt("Enter Secound Number ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random > 0.1) {

    alert(`The result is :${eval(`${a} ${c} ${b}`)}`)
} else {
    c = obj[c]
    alert(`The result is :${eval(`${a} ${c} ${b}`)}`)

}