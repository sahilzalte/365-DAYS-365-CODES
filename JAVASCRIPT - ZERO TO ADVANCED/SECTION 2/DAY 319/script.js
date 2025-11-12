// Common Event Listeners

// 4. Submit Event Listener

let form = document.querySelector('form');
let inputs = form.querySelectorAll('input')

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form submission
    console.log(inputs[0].value); // name
    console.log(inputs[1].value); // email
    console.log(inputs[2].value); // age
    console.log(inputs[3].value); // profile pic
});