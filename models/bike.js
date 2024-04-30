let client = require('../dbConnection');
let collection = client.db().collection('Bikes');

async function insertBike(bike){
    return collection.insertOne(bike);
}

async function getAllBike(){
    return collection.find().toArray();
}

module.exports = {insertBike, getAllBike}