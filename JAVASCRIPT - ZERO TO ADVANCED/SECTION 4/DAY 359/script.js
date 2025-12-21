// Debouncing 

function Debouncing(fnc, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fnc(...args)
        }, delay);
    }

}

function Throttling(fnc, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = new Date().getTime();
        if (now - lastCall < delay) {
            return;
        }
        lastCall = now;
        fnc(...args);
    }
}

document.querySelector('input')
    .addEventListener('input',
        Throttling(
            function () {
                console.log('Input event fired');
            }, 1000
        )
    );