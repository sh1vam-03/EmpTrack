const Employee = require('../models/Employee');
const Attendance = require('../models/Attendance');

// @desc    Get payroll for a specific month
// @route   GET /api/payroll?month=YYYY-MM
// @access  Private
const getPayroll = async (req, res) => {
    // If Admin/HR, can see all. Employee can only see own.
    // Simplifying: Admin/HR requests for all employees or specific employee.
    // Employee requests for self.

    const { month } = req.query; // YYYY-MM
    if (!month) {
        res.status(400).json({ message: 'Month is required (YYYY-MM)' });
        return;
    }

    let employees;
    if (req.user.role === 'Employee') {
        employees = [req.user];
    } else {
        employees = await Employee.find({});
    }

    const payrollData = [];

    for (const emp of employees) {
        // Calculate days present in that month
        // Regex to match "YYYY-MM-"
        const attendance = await Attendance.find({
            employee: emp._id,
            date: { $regex: `^${month}` },
            status: 'Present'
        });

        const daysPresent = attendance.length;
        const perDaySalary = emp.salary / 30; // Assumption from README
        const netSalary = (perDaySalary * daysPresent).toFixed(2);

        payrollData.push({
            employee: emp,
            daysPresent,
            netSalary,
            month
        });
    }

    res.json(payrollData);
};

module.exports = { getPayroll };
