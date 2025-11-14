// Common Event Listeners

// 5. Mouseover Event

let mouse = document.querySelector('.abcd');

mouse.addEventListener('mouseover', () => {
    mouse.style.backgroundColor = 'yellow';
})

// 6. Mouseout Event

mouse.addEventListener('mouseout', () => {
    mouse.style.backgroundColor = 'red';
});