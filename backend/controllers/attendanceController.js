const Attendance = require('../models/Attendance');
const Employee = require('../models/Employee');

// @desc    Check-in/Check-out (Simulated with manual ID entry, or authenticated user)
// @route   POST /api/attendance
// @access  Public (for simulation) or Private
const markAttendance = async (req, res) => {
    const { nfc, employeeId } = req.body;

    // In strict auth mode, we might want to ensure the requester is from the same org
    // But for simulated NFC (public endpoint), we find employee globally OR within an org if we passed orgId.
    // However, NFCs should be globally unique or we assume they are unique enough.
    // Let's assume NFC/EmployeeID is unique enough or we find the FIRST match.
    // BUT better: if logged in (manual checkin), use req.user.organization.

    let query = {};
    if (nfc) query.nfc = nfc;
    if (employeeId) query.employeeId = employeeId;

    // If authenticated (e.g. Employee self check-in from dashboard), restrict to their org
    if (req.user) {
        query.organization = req.user.organization;
    }

    const employee = await Employee.findOne(query);

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
    // Admin/HR see all in Org. Employee sees self.

    let query = {};
    if (req.user.role === 'Employee') {
        query.employee = req.user._id;
    } else {
        // Find all employees in this org
        const orgEmployees = await Employee.find({ organization: req.user.organization }).select('_id');
        const empIds = orgEmployees.map(e => e._id);
        query.employee = { $in: empIds };
    }

    const attendance = await Attendance.find(query).populate('employee', 'name employeeId role');
    res.json(attendance);
};

module.exports = { markAttendance, getAttendance };
