let a = 5

function Factorial(num) {
    let arr = Array.from(Array(num + 1).keys())

    let c = arr.slice(1,).reduce((a, b) => a * b
    )

    return c
}

function Factorial_Using_For(num) {
    let Factorial = 1
    for (let index = 1; index <= num; index++) {
        Factorial = Factorial * index
    }
    return Factorial
}

console.log((Factorial(a)))
console.log((Factorial_Using_For(20))) 