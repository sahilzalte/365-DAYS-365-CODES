// Countdown Timer 

let count = 10
let interval = setInterval(() => {
    if (count >= 1) {
        count--
        console.log(count);
    }
    else {
        console.log('Time is up!');
        clearInterval(interval);
    }
}, 500);