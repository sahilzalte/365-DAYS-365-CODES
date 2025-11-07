// Q.4 // Create a new list item <li>New Task</li> and add it to the end of a <ul>.

let ul = document.querySelector("ul")
let a = document.createElement("li")

a.textContent = 'New Task'

ul.appendChild(a)

// Q.5 Create a new image element with a placeholder source and add it at the top of a div.

let img = document.createElement("img")
img.setAttribute("src", "https://images.pexels.com/photos/34532324/pexels-photo-34532324.jpeg")

document.querySelector("div").prepend(img)