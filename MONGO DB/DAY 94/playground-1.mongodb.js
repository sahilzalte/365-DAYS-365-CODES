// Select the database to use.
use('SahilDB');

// Insert a few documents into the Development collection.
db.getCollection('Devlopment').insertMany([
    {
        "name": "Java",
        "Price": 20000,
        "Instructor": "Sahil"
    },
    {
        "name": "Python",
        "Price": 15000,
        "Instructor": "John"
    },
    {
        "name": "JavaScript",
        "Price": 18000,
        "Instructor": "Alice"
    },
    {
        "name": "C++",
        "Price": 17000,
        "Instructor": "Bob"
    },
    {
        "name": "React",
        "Price": 22000,
        "Instructor": "Emma"
    },
    {
        "name": "Node.js",
        "Price": 25000,
        "Instructor": "David"
    },
    {
        "name": "MongoDB",
        "Price": 19000,
        "Instructor": "Sophia"
    },
    {
        "name": "Machine Learning",
        "Price": 30000,
        "Instructor": "Mike"
    },
    {
        "name": "Django",
        "Price": 21000,
        "Instructor": "Olivia"
    },
    {
        "name": "Data Science",
        "Price": 35000,
        "Instructor": "Noah"
    }
]
);

// Print a message to the output window.
console.log(`Done inserting data into the Development collection.`);