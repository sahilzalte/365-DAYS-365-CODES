// let obj = {
//     a: 1,
//     b: "sahil"
// }

// console.log(obj)

// let animal = {
//     eat: true
// }

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal

// console.log(rabbit.eat)

class Animal {
    constructor(name) {
        this.name = name
        console.log("Object is Created...")
    }
    eat() {
        console.log("Eating...")
    }
    jump() {
        console.log("Jumping...")
    }
}

class Lion extends Animal {
    constructor(name) {
        super(name)
        console.log("Object is Created...")
    }
    eat() {
        super.eat()
        console.log("Eating...")
    }
}

let a = new Animal("Bunny")
console.log(a)

let l = new Lion("Shera")
console.log(l.eat)