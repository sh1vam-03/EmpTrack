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
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Attendance', attendanceSchema);
