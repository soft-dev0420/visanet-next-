const mongoose = require('mongoose');

const PaymentHistorySchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // assuming you have a User model
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    success: {
        type: Boolean,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    transactionId: {
        type: String,
        unique: true,
    }
});

module.exports = mongoose.model('PaymentHistory', PaymentHistorySchema);