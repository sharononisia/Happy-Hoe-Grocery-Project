const mongoose = require('mongoose');
const produceSchema = new mongoose.Schema({
    produce: {
        type: String,
        trim: true,
    },
    typeOfProduce: {
        type: String,
        trim: true,
    },
    date: {
        type: String,
        trim: true,
    },
    timeOfProduce: {
        type: String,
        trim: true,
    },
    quantity: {
        type: String,
        trim: true,
    },
    theCostPerKg: {
        type: String,
        trim: true,
    },
    theTotalCost: {
        type: String,
        trim: true,
    },
    nameOfDealer: {
        type: String,
        trim: true,
    },
    theBranchName: {
        type: String,
        trim: true,
    },
    contact: {
        type: String,
        trim: true,
    },
    thePriceToBeSoldAt: {
        type: String,
        trim: true,
    },
});


module.exports = mongoose.model('Produce', produceSchema);