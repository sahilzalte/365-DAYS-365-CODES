// Event Bubbling

// let ul = document.querySelector('ul');

// ul.addEventListener('click', (event) => { 
//    event.target.classList.toggle('lt')  
// })

// Event Capturing

let a = document.querySelector('.a');
let b = document.querySelector('.b');
let c = document.querySelector('.c');
let btn = document.querySelector('button');


btn.addEventListener('click', (e) => {
    console.log('button clicked');
}, true)

a.addEventListener('click', (e) => {
    console.log('a clicked');
}, true)

b.addEventListener('click', (e) => {
    console.log('b clicked');
}, true)

c.addEventListener('click', (e) => {
    console.log('c clicked');
}, true)