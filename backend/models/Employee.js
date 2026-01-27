const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const employeeSchema = new mongoose.Schema({
    organization: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Organization',
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: { // Added for Auth
        type: String,
        required: true,
        unique: true
    },
    password: { // Added for Auth
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'HR', 'Employee'],
        default: 'Employee'
    },
    department: {
        type: String,
        required: true
    },
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    salary: {
        type: Number,
        required: true
    },
    nfc: { // RFID/NFC Tag ID (simulated)
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

// Password Hash Middleware
employeeSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Password Match Method
employeeSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
