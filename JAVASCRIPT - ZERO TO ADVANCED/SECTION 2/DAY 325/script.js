// Live Character Counter

let input = document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener("input", () => {
    let left = 20 - input.value.length;
    span.textContent = left

    if (left < 0) {
        span.style.color = "red";
    }
    else {
        span.style.color = "white";
    }
});