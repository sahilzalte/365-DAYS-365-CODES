const users = [
    {
        name: "amisha rathore",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "amita mehta",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "isha oberoi",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
    },
    {
        name: "Ojin Oklawa",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    {
        name: "diya bansal",
        pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
        bio: "a little chaos, a lot of art 🎨✨ | just vibes",
    },
    {
        name: "tanay rawat",
        pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
        bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
    },
    {
        name: "mohit chhabra",
        pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
        bio: "aesthetic overload 📸🕊️ | living in lowercase",
    },
];

const cardsContainer = document.querySelector(".cards");
const inp = document.querySelector(".inp");

// Create single card
function createCard({ name, pic, bio }) {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src="${pic}" class="bg-img">
        <div class="blurred-layer" style="background-image: url('${pic}')"></div>
        <div class="content">
            <h3>${name}</h3>
            <p>${bio}</p>
        </div>
    `;
    return card;
}

// Render users
function showUsers(arr) {
    const fragment = document.createDocumentFragment();
    arr.forEach(user => fragment.appendChild(createCard(user)));
    cardsContainer.innerHTML = "";
    cardsContainer.appendChild(fragment);
}

// Initial load
showUsers(users);

// Search function (case-insensitive + optimized)
inp.addEventListener("input", () => {

    const val = inp.value.toLowerCase().trim();
    const filtered = users.filter(user =>
        user.name.toLowerCase().startsWith(val)
    );
    showUsers(filtered);
});
