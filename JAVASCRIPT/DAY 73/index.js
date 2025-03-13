function formatViews(views) {
    return views >= 1000000 ? (views / 1000000).toFixed(1) + 'M' : views >= 1000 ? (views / 1000).toFixed(1) + 'K' : views;
}

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    const container = document.getElementById("videoContainer");
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <div class="image">
            <img src="${thumbnail}" alt="Thumbnail">
            <div class="capsule">${duration}</div>
        </div>
        <div class="text">
            <h1>${title}</h1>
            <p>${cName} • ${formatViews(views)} views • ${monthsOld} months ago</p>
        </div>
    `;

    container.appendChild(card);
}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg");
createCard("Sahil", "Trust Coder", 78, 4, "35:23", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg");