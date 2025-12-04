// Toaster
function CreateToaster(config) {

    // Use parent container only once
    const parent = document.querySelector(".parent");

    // Set parent position once
    parent.className = `parent fixed 
        ${config.positionX === 'right' ? 'right-5' : 'left-5'} 
        ${config.positionY === 'bottom' ? 'bottom-5' : 'top-5'}
    `.trim();

    return function (notification) {

        let div = document.createElement('div');
        div.textContent = notification;

        // theme
        div.className = `
            ${config.theme === 'dark' ? 'bg-sky-400 text-white' : 'bg-white text-black'}
            p-4 mb-2 rounded shadow-md inline-block
        `.trim();

        // Append to parent ONLY
        parent.appendChild(div);

        // Remove after duration
        setTimeout(() => {
            parent.removeChild(div);
        }, config.duration * 1000);
    };
}


let toaster = CreateToaster({
    positionX: 'right',
    positionY: 'bottom',
    theme: 'dark',
    duration: 3
})

toaster('Dummy')
setTimeout(() => {
    toaster('Another Notification')
}, 4000);