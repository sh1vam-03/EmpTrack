const Leave = require('../models/Leave');
const Employee = require('../models/Employee');

// @desc    Get leaves
// @route   GET /api/leaves
// @access  Private
const getLeaves = async (req, res) => {
    let query = { organization: req.user.organization };

    // Employee sees only their own leaves
    if (req.user.role === 'Employee') {
        query.employee = req.user._id;
    }

    const leaves = await Leave.find(query)
        .populate('employee', 'name employeeId department')
        .sort({ createdAt: -1 });

    res.json(leaves);
};

// @desc    Apply for leave
// @route   POST /api/leaves
// @access  Private (Employee, HR, Admin)
const applyLeave = async (req, res) => {
    const { type, startDate, endDate, reason } = req.body;

    if (!type || !startDate || !endDate || !reason) {
        return res.status(400).json({ message: 'Please fill all fields' });
    }

    const leave = await Leave.create({
        organization: req.user.organization,
        employee: req.user._id,
        type,
        startDate,
        endDate,
        reason
    });

    res.status(201).json(leave);
};

// @desc    Update leave status (Approve/Reject)
// @route   PUT /api/leaves/:id
// @access  Private (Admin/HR only)
const updateLeaveStatus = async (req, res) => {
    const { status, adminComment } = req.body;

    const leave = await Leave.findOne({
        _id: req.params.id,
        organization: req.user.organization
    });

    if (!leave) {
        return res.status(404).json({ message: 'Leave request not found' });
    }

    if (leave.status !== 'Pending') {
        return res.status(400).json({ message: 'Leave request is already processed' });
    }

    leave.status = status;
    leave.adminComment = adminComment || '';

    const updatedLeave = await leave.save();
    res.json(updatedLeave);
};

module.exports = {
    getLeaves,
    applyLeave,
    updateLeaveStatus
};
