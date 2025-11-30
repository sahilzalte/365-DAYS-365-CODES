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


// CODE STARTS HERE


function saveToLocalStorage(obj) {
    if (localStorage.getItem("tasks") === null) {
        let oldTasks = [];
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    } else {
        let oldTasks = localStorage.getItem("tasks");
        oldTasks = JSON.parse(oldTasks);
        oldTasks.push(obj);
        localStorage.setItem("tasks", JSON.stringify(oldTasks));
    }
}



addNote.addEventListener("click", function () {
    formContainer.style.display = 'initial'
})

closeForm.addEventListener("click", function () {
    formContainer.style.display = 'none'
})

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    const imageUrl = imageUrlInput.value.trim();
    const fullName = fullNameInput.value.trim();
    const homeTown = homeTownInput.value.trim();
    const purpose = purposeInput.value.trim();

    let selected = false;
    categoryRadios.forEach((cat) => {
        if (cat.checked) {
            selected = cat.value;
        }
    });

    if (imageUrl === "") {
        alert("Please enter an Image URL.");
        return;
    }

    if (fullName === "") {
        alert("Please enter your Full Name.");
        return;
    }

    if (homeTown === "") {
        alert("Please enter your Home Town.");
        return;
    }

    if (purpose === "") {
        alert("Please enter the Purpose.");
        return;
    }

    if (!selected) {
        alert("Please select a category");
        return;
    }

    saveToLocalStorage({
        imageUrl,
        fullName,
        purpose,
        homeTown,
        selected,
    });

    form.reset();
    formContainer.style.display = "none";
    showCards();
});
function showCards() {
    stack.innerHTML = "";

    let allTasks = JSON.parse(localStorage.getItem("tasks"));

    // If no data → show message
    if (!allTasks || allTasks.length === 0) {
        const emptyMsg = document.createElement("p");
        emptyMsg.classList.add("empty-text");
        emptyMsg.textContent = "No notes found. Click + to add a new note!";
        stack.appendChild(emptyMsg);
        return;
    }

    allTasks.forEach(function (task) {
        const card = document.createElement("div");
        card.classList.add("card");

        const avatar = document.createElement("img");
        avatar.src = task.imageUrl;
        avatar.alt = "profile";
        avatar.classList.add("avatar");
        card.appendChild(avatar);

        const name = document.createElement("h2");
        name.textContent = task.fullName;
        card.appendChild(name);

        const hometownInfo = document.createElement("div");
        hometownInfo.classList.add("info");
        hometownInfo.innerHTML = `<span>Home town</span><span>${task.homeTown}</span>`;
        card.appendChild(hometownInfo);

        const bookingsInfo = document.createElement("div");
        bookingsInfo.classList.add("info");
        bookingsInfo.innerHTML = `<span>Purpose</span><span>${task.purpose}</span>`;
        card.appendChild(bookingsInfo);

        const buttonsDiv = document.createElement("div");
        buttonsDiv.classList.add("buttons");

        const callBtn = document.createElement("button");
        callBtn.classList.add("call");
        callBtn.innerHTML = '<i class="ri-phone-line"></i> Call';

        const msgBtn = document.createElement("button");
        msgBtn.classList.add("msg");
        msgBtn.textContent = "Message";

        buttonsDiv.appendChild(callBtn);
        buttonsDiv.appendChild(msgBtn);

        card.appendChild(buttonsDiv);

        stack.appendChild(card);
    });

    updateStack(); // Keep animation effect fresh
}

showCards();

function updateStack() {
    const cards = document.querySelectorAll(".stack .card");

    cards.forEach((card, index) => {
        card.style.zIndex = 3 - index;
        card.style.transform = `translateY(${index * 10}px) scale(${1 - index * 0.02})`;
        card.style.opacity = `${1 - index * 0.02}`;
    })
}

upBtn.addEventListener("click", function () {
    let lastChild = stack.lastElementChild;
    if (lastChild) {
        stack.insertBefore(lastChild, stack.firstElementChild);
        // update
        updateStack();
    }


})

downBtn.addEventListener("click", function () {
    const firstChild = stack.firstElementChild;
    if (firstChild) {
        stack.appendChild(firstChild);
        // update
        updateStack();
    }
})