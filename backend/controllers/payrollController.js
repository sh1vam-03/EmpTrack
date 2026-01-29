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
        employees = await Employee.find({ organization: req.user.organization });
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
        const totalDays = 30; // Assumption
        const absentDays = Math.max(0, totalDays - daysPresent);

        const baseSalary = emp.salary;
        const perDaySalary = baseSalary / totalDays;

        const deduction = (perDaySalary * absentDays).toFixed(2);
        const overtime = 0; // Placeholder until Overtime module is added
        const bonus = 0; // Placeholder until Bonus module is added

        const netSalary = (baseSalary - deduction + overtime + bonus).toFixed(2);

        payrollData.push({
            employee: emp,
            daysPresent,
            absentDays,
            baseSalary,
            deduction,
            overtime,
            bonus,
            netSalary,
            month
        });
    }

    res.json(payrollData);
};

module.exports = { getPayroll };
