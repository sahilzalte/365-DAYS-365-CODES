async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45)
        }, 1000)
    })

}

// With Error
// let a = await sleep()
// console.log(a)

// let b = await sleep()
// console.log(b)

/*
Without any Error
(async function Main() {
    let a = await sleep()
    console.log(a)

    let b = await sleep()
    console.log(b)
})()

*/


// (async function Main() {
//     let [x, y, ...rest] = [1, 5, 4, 7, 6, 54, 3, 5]
//     console.log(x, y, rest)
// })()

function sum(a, b, c) {
    return a + b + c
}


(async function Main() {
    let obj = {
        a: 1,
        b: 2,
        c: 3
    }

    let { a, b } = obj
    console.log(a, b)

    let arr = [1, 4, 6]
    console.log(arr[0] + arr[1] + arr[2])

    console.log(sum(...arr))
    console.log(a1)

})()


var a1 = 5