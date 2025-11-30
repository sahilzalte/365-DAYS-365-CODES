// All necessary DOM elements


let addNote = document.querySelector("#add-note");
let formContainer = document.querySelector(".form-container");
let closeForm = document.querySelector(".closeForm");

const stack = document.querySelector(".stack");
const upBtn = document.querySelector("#upBtn");
const downBtn = document.querySelector("#downBtn");

const form = document.querySelector("form");

const imageUrlInput = form.querySelector(
    "input[placeholder='https://example.com/photo.jpg']"
);
const fullNameInput = form.querySelector(
    "input[placeholder='Enter full name']"
);
const homeTownInput = form.querySelector(
    "input[placeholder='Enter home town']"
);
const purposeInput = form.querySelector(
    "input[placeholder='e.g., Quick appointment note']"
);

const categoryRadios = form.querySelectorAll("input[name='category']");

const submitButton = form.querySelector(".submit-btn");
