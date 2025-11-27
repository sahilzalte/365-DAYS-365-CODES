const users = [
    { name: "amisha rathore", pic: "https://picsum.photos/seed/amisha/200.jpg", bio: "silent chaos in a loud world 🖤💀 | not for everyone" },
    { name: "kiara mehta", pic: "https://picsum.photos/seed/kiara/200.png", bio: "main character energy 🎬 | coffee > everything ✨+" },
    { name: "siddharth joshi", pic: "https://picsum.photos/seed/siddharth/200.jpg", bio: "tech enthusiast 💻 | fueled by curiosity and late-night coding sessions." },
    { name: "priya desai", pic: "https://picsum.photos/seed/priya/200.png", bio: "yoga and sunsets 🧘‍♀️ | finding peace in the little things." },
    { name: "imran ali", pic: "https://picsum.photos/seed/imran/200.jpg", bio: "professional traveler 🗺️ | my passport needs a vacation." },
    { name: "ananya reddy", pic: "https://picsum.photos/seed/ananya/200.png", bio: "graphic designer 🎨 | making the world a little more beautiful, one pixel at a time." },
    { name: "vivek chawla", pic: "https://picsum.photos/seed/vivek/200.jpg", bio: "car fanatic 🏎️ | if it has four wheels and an engine, I'm interested." },
    { name: "rhea bose", pic: "https://picsum.photos/seed/rhea/200.png", bio: "sustainable living 🌱 | baker of bread and grower of dreams." },
    { name: "nihal patel", pic: "https://picsum.photos/seed/nihal/200.jpg", bio: "finance wizard 📈 | making money moves and drinking green tea." },
    { name: "shreya nair", pic: "https://picsum.photos/seed/shreya/200.png", bio: "cat mom 🐈 | addicted to true crime documentaries 🔪." },
    { name: "aditya khera", pic: "https://picsum.photos/seed/aditya/200.jpg", bio: "guitar player 🎸 | currently perfecting the art of doing nothing." },
    { name: "tanya wani", pic: "https://picsum.photos/seed/tanya/200.png", bio: "fashion forward 👠 | life is too short to wear boring clothes." },
];

const container = document.querySelector('.cards-container');

function showUser(arr) {
    container.innerHTML = ''; // clear container first
    arr.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = user.pic;
        img.classList.add('bg-img');

        const blurredLayer = document.createElement('div');
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add('blurred-layer');

        const content = document.createElement('div');
        content.classList.add('content');

        const h3 = document.createElement('h3');
        h3.textContent = user.name;
        const p = document.createElement('p');
        p.textContent = user.bio;

        content.appendChild(h3);
        content.appendChild(p);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        container.appendChild(card);
    });
}

// Initial render
showUser(users);
