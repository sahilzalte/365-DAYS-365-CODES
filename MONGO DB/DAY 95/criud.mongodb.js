// Crud Operations in MongoDB
use("CrudDB")
// console.log(db)
// db.createCollection("Sahil")
// db.Sahil.insertOne({
//     name: "Sahil's Collection",
//     price: 100,
//     assignment: 122,
//     project: 10
// })

// db.Sahil.insertMany([
//     {
//         "name": "Sahil's Collection",
//         "price": 100,
//         "assignment": 122,
//         "project": 10
//     },
//     {
//         "name": "John's Collection",
//         "price": 150,
//         "assignment": 98,
//         "project": 8
//     },
//     {
//         "name": "Alice's Collection",
//         "price": 120,
//         "assignment": 110,
//         "project": 12
//     },
//     {
//         "name": "Bob's Collection",
//         "price": 180,
//         "assignment": 140,
//         "project": 15
//     },
//     {
//         "name": "Emma's Collection",
//         "price": 90,
//         "assignment": 85,
//         "project": 5
//     },
//     {
//         "name": "Sophia's Collection",
//         "price": 130,
//         "assignment": 105,
//         "project": 9
//     },
//     {
//         "name": "David's Collection",
//         "price": 200,
//         "assignment": 160,
//         "project": 18
//     },
//     {
//         "name": "Mike's Collection",
//         "price": 175,
//         "assignment": 135,
//         "project": 14
//     },
//     {
//         "name": "Olivia's Collection",
//         "price": 110,
//         "assignment": 95,
//         "project": 7
//     },
//     {
//         "name": "Noah's Collection",
//         "price": 220,
//         "assignment": 170,
//         "project": 20
//     }
// ]
// )


// let a = db.Sahil.find({ price: 100 })
// console.log(a.toArray()) 


// let b = db.Sahil.findOne({ price: 100 })
// console.log(b)



// Update Operation

// db.Sahil.updateOne({ price: 100 }, { $set: { price: 1000 } })

db.Sahil.updateMany({ price: 100 }, { $set: { price: 2000 } })


// Delete Operation

db.Sahil.deleteOne({ price: 2000 })

// 
db.Sahil.deleteMany({ price: 2000 })