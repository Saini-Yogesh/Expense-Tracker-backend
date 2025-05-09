const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    name: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Expense', expenseSchema);
