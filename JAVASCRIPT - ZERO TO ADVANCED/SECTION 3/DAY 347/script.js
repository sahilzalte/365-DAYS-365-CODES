// ===== CONSTRUCTOR FUNCTION =====
// Pencil object using constructor function
function Pencile(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
}

// Add write method to Pencile prototype
Pencile.prototype.write = function (text) {
    let h1 = document.createElement("h1")
    h1.textContent = text
    h1.style.color = this.color
    document.body.appendChild(h1)
}

// Create pencil instances
let pencile1 = new Pencile("HB", 10, "red", "Faber Castell");
let pencile2 = new Pencile("2B", 15, "green", "Camlin");

// ===== CLASS: CREATE PENCIL =====
class CreatePencil {
    constructor(name, company, price, color) {
        this.name = name;
        this.company = company;
        this.price = price;
        this.color = color;
    }

    // Remove h1 elements matching pencil color
    erase() {
        document.querySelectorAll('h1').forEach((e) => {
            if (e.style.color === this.color) {
                e.remove()
            }
        })
    }

    // Write text in h1 with pencil color
    write(text) {
        let h1 = document.createElement('h1')
        h1.textContent = text
        h1.style.color = this.color
        document.body.appendChild(h1)
    }
}

// Create pencil instances
let p1 = new CreatePencil('HB', 'Faber-Castell', 10, 'blue');
let p2 = new CreatePencil('2B', 'Staedtler', 15, 'red');
let p3 = new CreatePencil('4B', 'Deli', 8, 'green');

// ===== CLASS: USER =====
class User {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.role = 'User';
    }

    // Display user message as h1
    write(text) {
        let h1 = document.createElement('h1');
        h1.textContent = `${this.name} says: ${text}`;
        document.body.appendChild(h1);
    }

    // Check and return user role
    checkRole() {
        return `You are logged in as ${this.role}`
    }
}

// ===== CLASS: ADMIN (extends User) =====
class Admin extends User {
    constructor(name, age, address) {
        super(name, age, address);
        this.role = 'admin';
    }

    // Remove all h1 elements from page
    remove() {
        document.querySelectorAll('h1').forEach(h1 => h1.remove());
    }
}

// Create user and admin instances
let u = new User('Alice', 30)
let a = new Admin('Bob', 40);

// ===== PROTOTYPAL INHERITANCE =====
let coffie = {
    color: 'blue',
    drink: function () {
        console.log(`This coffie is ${this.color}`);
    }
}

// Create object inheriting from coffie
let arabic = Object.create(coffie);
arabic.taste = 'bitter';
arabic.drink(); // Output: "This coffie is blue"