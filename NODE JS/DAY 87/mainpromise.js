import fs from 'fs/promises'


let a = await fs.readFile("Sahil.txt")

let b = await fs.appendFile("Sahil.txt", "\n \n \n \n \n \n \n \n \n \n \n \n I am Now in less Content")
console.log(a.toString(), b)