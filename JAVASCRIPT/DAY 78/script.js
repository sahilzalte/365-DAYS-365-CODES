const addItem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerText = item;
    document.body.append(div);

    // Start dot animation
    await animateDots(div);
};

const animateDots = (element) => {
    return new Promise((resolve) => {
        let running = true;
        let frameCount = 0;

        const updateDots = () => {
            if (!running) return;
            frameCount++;
            if (frameCount % 30 === 0) {  // Adjust speed using modulo
                element.innerText = element.innerText.endsWith("...")
                    ? element.innerText.slice(0, -3)
                    : element.innerText + ".";
            }
            requestAnimationFrame(updateDots);
        };

        updateDots();

        setTimeout(() => {
            running = false;
            resolve();
        }, 2000); // Duration for each step
    });
};

const randomDelay = () => {
    return new Promise((resolve) => {
        const timeout = 1000 + Math.random() * 5000; // Random delay between 1s - 6s
        setTimeout(resolve, timeout);
    });
};

async function main() {
    let text = [
        "Initializing Hacking now reading your files",
        "Reading your File",
        "Password files Detected",
        "Sending all passwords and personal files to server",
        "Cleaning up"
    ];

    for (const item of text) {
        await addItem(item);
    }
}

main();
