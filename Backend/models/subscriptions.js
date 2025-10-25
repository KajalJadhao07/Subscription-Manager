const mongoose = require('mongoose');

const subscriptionSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    serviceName: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    renewalDate: {
        type: Date,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        default: 'UPI'
    },
    autoDetected: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

module.exports = mongoose.model('Subscription', subscriptionSchema);