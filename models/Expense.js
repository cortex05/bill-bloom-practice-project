import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },amount: {
        type: Number,
        required: true
    },
    paidBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    participants: [String],
    category: {
        type: String,
        required: true
    },
    type: {
        type: String,
        enum: ['personal', 'group'],
        required: true
    },
    groupId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Group',
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Expense = mongoose.model('Expense', ExpenseSchema)

export default Expense