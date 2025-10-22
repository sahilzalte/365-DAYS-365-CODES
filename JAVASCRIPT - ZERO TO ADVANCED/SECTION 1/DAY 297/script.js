// Reusable discount calculator (HOF)

function discountCalculator(discount) {
  return function (price) {
    return price - price * (discount / 100)
  }
}

let discounter = discountCalculator(10)
let ten = discountCalculator(10)
let fifty = discountCalculator(10)
console.log(ten(100));
console.log(fifty(100));