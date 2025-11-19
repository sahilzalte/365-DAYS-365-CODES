let nm = document.querySelector('#name');
let form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (nm.value.length <= 2) {
        document.querySelector('small').style.display = 'initial';
    }
    else {
        document.querySelector('small').style.display = 'none';
    }
});