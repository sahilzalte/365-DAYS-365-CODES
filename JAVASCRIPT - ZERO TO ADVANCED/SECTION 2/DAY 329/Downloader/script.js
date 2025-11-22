let count = 0;
let progress = document.querySelector('.progress-bar');
let percent = document.querySelector('.percent');
let interval = setInterval(() => {
    if (count <= 99) {
        count++;
        progress.style.width = `${count}%`;
        percent.textContent = `${count}%`;
    }
    else{
        document.querySelector('h2').textContent = "Download Complete!";
        clearInterval(interval);
    }
}, 3000 / 100);