const mongoose = require('mongoose');
const creditSchema = new mongoose.Schema({
    buyer: {
        type: String,
        trim: true,
    },
    NIN: {
        type: String,
        trim: true,
    },
    location: {
        type: String,
        trim: true,
    },
    contact: {
        type: String,
        trim: true,
    },
    amountDue: {
        type: Number,
        trim: true,
    },
    salesAgentName: {
        type: String,
        trim: true,
    },
    dueDate: {
        type: String,
        trim: true,
    },
    theProduceName: {
        type: String,
        trim: true,
    },
    typeOfProduce: {
        type: String,
        trim: true,
    },
    quantity: {
        type: String,
        trim: true,
    },
    date: {
        type: String,
        trim: true,
    },
});


module.exports = mongoose.model('Credit', creditSchema);