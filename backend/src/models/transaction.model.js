const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema({
    customerId: {
        type: String,
        required: true,
        unique: true
    },
    initialBalance: {
        type: Number,
        required: true
    },
    transportFare: {
        type: Number,
        required: true
    },
    newBalance: {
        type: Number,
        required: true
    },
},{
    timestamps: true
})  

const Transaction = mongoose.model('Transaction',transactionSchema)
module.exports = Transaction