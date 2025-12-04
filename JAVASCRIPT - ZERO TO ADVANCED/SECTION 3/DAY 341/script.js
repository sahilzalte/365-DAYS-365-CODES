// Toaster

function CreateToaster(config) {
    return function (notification) {
        let div = document.createElement('div');
        div.className = `${config.theme === "dark" ? "bg-gray-800" : "bg-white"} text-white p-4 rounded shadow-md fixed ${config.positionX ===
            "right" ? "right-10" : "left-10"} ${config.positionY === "top" ? "top-10" : "bottom-10"}`

        div.textContent = notification;
        document.body.appendChild(div);

        setTimeout(() => {
            document.body.removeChild(div);
        }, config.duration * 1000);
    }
}

let toaster = CreateToaster({
    positionX: 'left',
    positionY: 'bottom',
    theme: 'dark',
    duration: 3
})

toaster('Dummy')