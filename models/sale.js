const mongoose = require('mongoose');
const salesSchema = new mongoose.Schema({
    salesAgent: {
        type: String,
        trim: true,
    },
    transactionID: {
        type: String,
        trim: true,
    },
    datetime: {
        type: String,
        trim: true,
    },
    customerName: {
        type: String,
        trim: true,
    },
    items: {
        type: String,
        trim: true,
    },
  
});


module.exports = mongoose.model('Sales', salesSchema);