// Define a class with getter and setter
class User {
    constructor(name) {
        this._name = name;
    }

    get name() {
        return this._name;
    }


    set name(newName) {
        if (newName.length > 0) {
            this._name = newName;
        } else {
            console.log("Name must be at least 1 character long.");
        }
    }
}

const user1 = new User("Sahil");

console.log(user1.name);

user1.name = "Zalte";
console.log(user1.name);

user1.name = "";         
