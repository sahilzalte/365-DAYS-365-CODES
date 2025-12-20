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


document.querySelector('input')
    .addEventListener('input',
        Debouncing(
            function () {
                console.log('Input Event Triggered');
            }, 2000
        )
    );