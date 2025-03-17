function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr
    // Finish this function
    if (views < 1000) {

        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M"

    }
    else {
        viewStr = views / 1000 + "K"
    }
    let html = `<div class="container">
        <div class="card">
            <div class="image">
                <img src=${thumbnail} alt="Sorry Your Browser Not Support.">
            </div>
            <div class="capsule">${duration}</div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} . ${viewStr} views . ${monthsOld} months ago</p>
            </div>
        </div>
    </div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

createCard("Sahil", "Trust Coder", 78, 4, "35:23", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")