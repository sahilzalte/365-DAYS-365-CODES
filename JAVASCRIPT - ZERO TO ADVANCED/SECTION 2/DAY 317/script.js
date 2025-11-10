// Common Event Listeners

// 3. Change Event Listener

let sel = document.querySelector("select")
let device = document.getElementById("device")

sel.addEventListener("change", function (e) { 
    console.log(e.target.value);
    device.textContent = `You Selected ${e.target.value} Device`;
})