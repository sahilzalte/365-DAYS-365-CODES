// async function getData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000);
//     })
// }

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data 
    
}
async function main() {



    console.log("Loadding Modules")

    console.log("Do something")

    console.log('Load data')

    // Approch 1 
    // let data = getData()

    //     console.log(data)

    //     console.log('Process data')

    //     console.log('Task 2')


    // Approch 2
    let data = await getData()

    console.log(data)

    console.log('Process data')

    console.log('Task 2')

}

main()