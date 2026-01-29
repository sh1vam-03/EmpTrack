const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    assignedBy: {
        type: mongoose.Schema.Types.ObjectId, // Admin or HR
        ref: 'Employee',
        required: true
    },
    status: {
        type: String,
        enum: ['Open', 'In Progress', 'Completed', 'Approved'],
        default: 'Open'
    },
    dueDate: {
        type: String // YYYY-MM-DD
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);
