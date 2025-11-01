// ---------------------------------------------
// 🌟 Attribute Manipulation
// ---------------------------------------------

// 1️⃣ Get Attribute
let link = document.querySelector("a");
let hrefValue = link.getAttribute("href");
console.log("Href Attribute Value:", hrefValue);
// Output: Href Attribute Value: https://www.google.com

// 2️⃣ Set Attribute
link.setAttribute("href", "https://www.example.com");
console.log("Updated Href Attribute Value:", link.getAttribute("href"));
// Output: Updated Href Attribute Value: https://www.example.com

// 3️⃣ Remove Attribute
link.removeAttribute("href");
console.log("Href Attribute after removal:", link.getAttribute("href")); 
// Output: null


// ---------------------------------------------
// ⚙️ Dynamic DOM Manipulation
// ---------------------------------------------

// ✳️ Create Element
let h1 = document.createElement("h1");
h1.textContent = "Hello ji";

// Add element to body
document.body.appendChild(h1);
document.body.prepend(h1);

console.log(h1);

// ❌ Remove Element
h1.remove();


// ---------------------------------------------
// 📌 append() vs prepend()
// ---------------------------------------------

let div = document.createElement("div");
div.style.cssText = "border: 1px solid #ccc; padding: 12px; width: 320px; margin: 12px;";

// Initial paragraph
const itemA = document.createElement("p");
itemA.textContent = "Item A (initial)";
div.appendChild(itemA);

// append → adds to the end
const appended = document.createElement("p");
appended.textContent = "Appended → added to end";
div.append(appended);

// prepend → adds to the start
const prepended = document.createElement("p");
prepended.textContent = "Prepended → added to start";
div.prepend(prepended);
