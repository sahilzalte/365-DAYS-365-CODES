// async function getData() {
//     // Simulate getting data from  a server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3000)
//     })
// }

async function getData() {
    // Simulate getting data from a server
    // let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    return data
}

async function main() {

    console.log("Loadding modules")

    console.log("Do Something else")

    console.log("Load data")


    let data = await getData()


    console.log(data);

    console.log("Process data")

    console.log("Task 2")


}

main()



// data.then((v)=> {


//     console.log(data);

//     console.log("Process data")

//     console.log("Task 2")
// }) 