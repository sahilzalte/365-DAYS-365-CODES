// Reusable Counter closure

function counter() {
  let count = 0
  return function () {
    count++;
    return count;
  }
}

let a = counter();

console.log(a());
console.log(a());
let b = counter();
console.log(b());
console.log(b());
console.log(a());