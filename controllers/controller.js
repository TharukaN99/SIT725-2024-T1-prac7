let model = require('../models/bike');

const insertBike = async function(req, res) {
    let bike = req.body;
    return model.insertBike(bike);
}

const getAllBike = async function(req, res) {
    return model.getAllBike();
}

module.exports = {insertBike, getAllBike}