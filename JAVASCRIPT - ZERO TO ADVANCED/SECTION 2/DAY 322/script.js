// Common Event Listeners

// 6. mousemove

// window.addEventListener('mousemove', (e) => {
//     console.log(e);
// })

let abcd = document.querySelector('.abcd');

window.addEventListener('mousemove', (e) => {
    const rect = abcd.getBoundingClientRect();  // must be inside
    let x = e.clientX - rect.width / 2;
    let y = e.clientY - rect.height / 2;

    abcd.style.left = x + "px";
    abcd.style.top = y + "px";
});
