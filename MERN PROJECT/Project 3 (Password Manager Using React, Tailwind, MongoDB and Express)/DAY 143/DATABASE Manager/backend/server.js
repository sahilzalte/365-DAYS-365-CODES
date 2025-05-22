const express = require('express');
const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');

const cors = require('cors');


dotenv.config();

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);


const dbName = 'passop';
const app = express();
const PORT = 3000;
app.use(bodyParser.json())
app.use(cors())

client.connect();

// Get all the passwords
app.get('/', async (req, res) => {
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.find({}).toArray();
    res.json(findResult);
});


// Save a password
app.post('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.insertOne(password);
    res.send({ success: true, result: findResult });
});

// Delete a password

// Save a password by id
app.delete('/', async (req, res) => {
    const password = req.body
    const db = client.db(dbName);
    const collection = db.collection('passwords');
    const findResult = await collection.deleteOne(password);
    res.send({ success: true, result: findResult });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


