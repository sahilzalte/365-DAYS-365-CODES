
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // reset
    document.querySelector('#emailError').style.display = "none";
    document.querySelector('#passError').style.display = "none";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

    let emailans = emailRegex.test(email.value);
    let passwordans = passwordRegex.test(password.value);

    if (!emailans) {
        document.querySelector('#emailError').style.display = "block";
    }

    if (!passwordans) {
        document.querySelector('#passError').style.display = "block";
    }
});
