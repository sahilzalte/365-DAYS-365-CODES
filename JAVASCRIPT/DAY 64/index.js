let rand = Math.random()
let first, secound, third
// Generate First Word
if (rand < 0.33) {
    first = "Crazy"
}
else if (rand < 0.66 && rand >= 0.33) {
    first = "Amazing"

}
else {
    first = "Fire"
}

rand = Math.random()
// Generate Secound Word
if (rand < 0.33) {
    secound = "Engine"
}
else if (rand < 0.66 && rand >= 0.33) {
    secound = "Foods"

}
else {
    secound = "Garment"
}
// Generate Third Word
rand = Math.random()
if (rand < 0.33) {
    third = "Bros"
}
else if (rand < 0.66 && rand >= 0.33) {
    third = "Limited"

}
else {
    third = "Hub"
}

console.log(`${first} ${secound} ${third}`)
