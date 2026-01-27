const Attendance = require('../models/Attendance');
const Employee = require('../models/Employee');

// @desc    Check-in/Check-out (Simulated with manual ID entry, or authenticated user)
// @route   POST /api/attendance
// @access  Public (for simulation) or Private
const markAttendance = async (req, res) => {
    // In this simulation, we might receive employeeId from the body (like NFC tag)
    // OR we use req.user.id if logged in.
    // The requirement says "RFID/NFC–based attendance (simulated) ... manually entering the RFID/NFC ID"

    const { nfc, employeeId } = req.body;
    let employee;

    if (nfc) {
        employee = await Employee.findOne({ nfc });
    } else if (employeeId) {
        employee = await Employee.findOne({ employeeId });
    }

    if (!employee) {
        res.status(404).json({ message: 'Employee not found' });
        return;
    }

    // Check if already checked in today
    const today = new Date().toISOString().split('T')[0]; // Simple YYYY-MM-DD
    const existingAttendance = await Attendance.findOne({
        employee: employee._id,
        date: today
    });

    const now = new Date();
    const timeString = now.toLocaleTimeString();

    if (existingAttendance) {
        if (existingAttendance.checkOut) {
            res.status(400).json({ message: 'Already checked out for today' });
        } else {
            existingAttendance.checkOut = timeString;
            await existingAttendance.save();
            res.json({ message: `Goodbye ${employee.name}, Checked Out at ${timeString}` });
        }
    } else {
        await Attendance.create({
            employee: employee._id,
            date: today,
            checkIn: timeString,
            status: 'Present'
        });
        res.json({ message: `Welcome ${employee.name}, Checked In at ${timeString}` });
    }
};

// @desc    Get attendance history
// @route   GET /api/attendance
// @access  Private
const getAttendance = async (req, res) => {
    // If admin, get all. If employee, get own.
    let query = {};
    if (req.user.role === 'Employee') {
        query.employee = req.user._id;
    }

    const attendance = await Attendance.find(query).populate('employee', 'name employeeId role');
    res.json(attendance);
};

module.exports = { markAttendance, getAttendance };
