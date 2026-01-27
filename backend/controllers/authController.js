const Employee = require('../models/Employee');
const generateToken = require('../utils/generateToken');

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = async (req, res) => {
    const { employeeId, password } = req.body;

    const employee = await Employee.findOne({ employeeId });

    if (employee && (await employee.matchPassword(password))) {
        res.json({
            _id: employee._id,
            name: employee.name,
            email: employee.email,
            role: employee.role,
            employeeId: employee.employeeId,
            token: generateToken(employee._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid ID or password' });
    }
};

module.exports = { authUser };
