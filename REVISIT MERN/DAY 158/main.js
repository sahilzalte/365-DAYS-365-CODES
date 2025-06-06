const fs = require('fs');
// console.log(fs);
fs.writeFileSync("Sahil.txt", "Hello Sahil");
fs.writeFile("Sahil2.txt", "Hello Sahil2", () => {
    console.log("Done");
    fs.readFile('Sahil.txt', (err, data) => {
        console.log(err, data.toString());
    })
}); 