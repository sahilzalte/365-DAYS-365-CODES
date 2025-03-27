const { error } = require("console")
const fs = require("fs")



console.log("Starting")
// fs.writeFileSync("Sahil.txt", "Sahil is Not a good boy")
fs.writeFile("Sahil2.txt", "Sahil now also a bad boy", () => {
    console.log("done")
    fs.readFile("Sahil2.txt", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("Sahil.txt", "Sahil now not be a good", (e, d) => {
    console.log(d)
})
console.log("ending.")