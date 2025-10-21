// BMI Calculator

function bmi(weight, height) {
  return weight / (height * height)
}

let a = bmi(72, 1.3)
console.log(a.toFixed(2));