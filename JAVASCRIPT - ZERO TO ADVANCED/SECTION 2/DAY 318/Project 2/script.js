// Small Project 2 using Event Listeners

let btn = document.querySelector(".btn")
let input = document.querySelector("input")
btn.addEventListener("click", function () {
    input.click()
})
input.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
        btn.textContent = file.name;
    }

})