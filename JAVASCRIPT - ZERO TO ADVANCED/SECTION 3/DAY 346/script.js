function Pencile(name, price, color, company) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.company = company;
    this.write = function (text) {
        let h1 = document.createElement("h1")
        h1.textContent = text
        h1.style.color = this.color
        document.body.appendChild(h1)
    }
}

let p1 = new Pencile("HB", 10, "red", "Faber Castell");

let p2 = new Pencile("2B", 15, "green", "Camlin");
