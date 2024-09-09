const mongoose = require('mongoose');
const saleSchema = new mongoose.Schema({
    salesAgent: {
        type: String,
        trim: true,
    },
    transactionId: {
        type: String,
        trim: true,
    },
    date: {
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
    total: {
        type: Number,
        trim: true,
    }, 
});


module.exports = mongoose.model('Sale', saleSchema);