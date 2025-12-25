
let ul = document.querySelector('ul')

let space = document.createDocumentFragment()


for (let i = 0; i <= 100; i++) {
    let li = document.createElement('li')
    li.textContent = `Item ${i}`
    space.appendChild(li)
}

ul.appendChild(space)