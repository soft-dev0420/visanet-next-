const express = require('express');
const router = express.Router();
const PaymentHistory = require('../models/PaymentHistory');

// @route   POST /api/payments
// @desc    Add a payment history record
// @access  Public or Private (based on your auth system)
router.post('/add', async (req, res) => {
    try {
        const { userId, success, amount, currency, transactionId } = req.body;

        if (!userId || success === undefined || !amount || !transactionId) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const payment = new PaymentHistory({
            userId,
            success,
            amount,
            currency,
            transactionId,
        });

        await payment.save();
        res.status(201).json({ message: 'Payment history saved', data: payment });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;
