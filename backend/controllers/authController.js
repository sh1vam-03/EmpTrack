const Employee = require('../models/Employee');
const Organization = require('../models/Organization');
const generateToken = require('../utils/generateToken');

// @desc    Register a new Organization and Admin
// @route   POST /api/auth/signup
// @access  Public
const registerUser = async (req, res) => {
    const { orgName, orgEmail, adminName, adminEmail, password } = req.body;

    const orgExists = await Organization.findOne({ email: orgEmail });
    if (orgExists) {
        res.status(400).json({ message: 'Organization already exists' });
        return;
    }

    const userExists = await Employee.findOne({ email: adminEmail });
    if (userExists) {
        res.status(400).json({ message: 'User already exists' });
        return;
    }

    // Create Organization
    const organization = await Organization.create({
        name: orgName,
        email: orgEmail
    });

    // Create Admin User
    const employee = await Employee.create({
        organization: organization._id,
        name: adminName,
        email: adminEmail,
        password,
        role: 'Admin',
        department: 'Management',
        employeeId: 'AD001', // First user is Admin
        salary: 0, // Admin might not have salary in this context initially
    });

    if (employee) {
        res.status(201).json({
            _id: employee._id,
            name: employee.name,
            email: employee.email,
            role: employee.role,
            organization: organization._id,
            token: generateToken(employee._id),
        });
    } else {
        res.status(400).json({ message: 'Invalid user data' });
    }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const authUser = async (req, res) => {
    const { email, password } = req.body;

    // Find by email instead of employeeId for new flow (or support both implies complexity, staying with requested Email/Pass flow)
    // User requested "Email, Password" for login.
    const employee = await Employee.findOne({ email });

    if (employee && (await employee.matchPassword(password))) {
        res.json({
            _id: employee._id,
            name: employee.name,
            email: employee.email,
            role: employee.role,
            employeeId: employee.employeeId,
            organization: employee.organization,
            token: generateToken(employee._id),
        });
    } else {
        res.status(401).json({ message: 'Invalid email or password' });
    }
};

module.exports = { authUser, registerUser };
