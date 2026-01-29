const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    employee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true
    },
    date: {
        type: String, // YYYY-MM-DD
        required: true
    },
    checkIn: {
        type: String // HH:MM:SS AM/PM
    },
    checkOut: {
        type: String
    },
    status: {
        type: String,
        enum: ['Present', 'Absent', 'Leave'],
        default: 'Absent'
    },
    approvalStatus: {
        type: String,
        enum: ['Pending', 'Approved', 'Rejected'],
        default: 'Approved' // NFC is auto-approved, Manual will be Pending
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Attendance', attendanceSchema);
