// Small Project 1 using Event Listeners

window.addEventListener('keydown', function (event) {
    console.log(event.key);
    if (event.key === " ") {
        document.querySelector("h1").textContent = "Space Key Pressed";
        return;
    }
    document.querySelector("h1").textContent = event.key;
})