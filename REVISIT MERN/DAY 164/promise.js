console.log('This is promises')

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject('Failed')
    }
    else {

        setTimeout(() => {
            console.log('Done 1')
            resolve('success 1')
        }, 3000);
    }
})


let prom2 = new Promise((resolve, reject) => {
    let a = Math.random()
    if (a < 0.5) {
        reject('Failed')
    }
    else {

        setTimeout(() => {
            console.log('Done 2')
            resolve('success 2')
        }, 2000);
    }
})

let p3 = Promise.all([prom1, prom2])
p3.then((value) => {
    console.log(value)
}).catch(err => {
    console.log(err)
}) 