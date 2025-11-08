// Q.6 Select the first item in a list and delete it from the DOM.

let x = document.querySelector("ul")
let li = document.querySelector("li")

x.removeChild(li)

// Q.7 Add a highlight class to every even item in a list.

let items = document.querySelectorAll("ul li:nth-child(2n)")
items.forEach((item)=>{
    item.classList.add("highlight")
})