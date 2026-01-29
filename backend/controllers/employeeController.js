const Employee = require('../models/Employee');

// @desc    Get all employees
// @route   GET /api/employees
// @access  Private/Admin/HR
const getEmployees = async (req, res) => {
    // Only get employees from the same organization
    const query = { organization: req.user.organization };

    // If requester is Admin, hide other Admins
    if (req.user.role === 'Admin') {
        query.role = { $ne: 'Admin' };
    }

    const employees = await Employee.find(query);
    res.json(employees);
};

// @desc    Register a new employee
// @route   POST /api/employees
// @access  Private/Admin/HR
const registerEmployee = async (req, res) => {
    const { name, email, password, role, department, employeeId, salary, nfc } = req.body;

    const employeeExists = await Employee.findOne({
        employeeId,
        organization: req.user.organization // ID unique per org
    });

    if (employeeExists) {
        res.status(400).json({ message: 'Employee ID already exists in this organization' });
        return;
    }

    // Role Validation
    if (role === 'Admin') {
        return res.status(403).json({ message: 'Cannot create Admin account' });
    }
    if (role === 'HR' && req.user.role !== 'Admin') {
        return res.status(403).json({ message: 'Only Admins can create HR accounts' });
    }

    const employee = await Employee.create({
        organization: req.user.organization,
        name,
        email,
        password, // Will be hashed by middleware
        role,
        department,
        employeeId,
        salary,
        nfc
    });

    if (employee) {
        res.status(201).json({
            _id: employee._id,
            name: employee.name,
            email: employee.email,
            role: employee.role,
        });
    } else {
        res.status(400).json({ message: 'Invalid employee data' });
    }
};

// @desc    Update employee
// @route   PUT /api/employees/:id
// @access  Private/Admin/HR
const updateEmployee = async (req, res) => {
    const employee = await Employee.findOne({ _id: req.params.id, organization: req.user.organization });

    if (employee) {
        // Prevent HR from changing roles to Admin/HR or modifying existing Admin/HR
        if (req.user.role !== 'Admin') {
            if (req.body.role && (req.body.role === 'Admin' || req.body.role === 'HR')) {
                return res.status(403).json({ message: 'Not authorized to assign Admin/HR roles' });
            }
            if (employee.role === 'Admin' || employee.role === 'HR') {
                return res.status(403).json({ message: 'Not authorized to modify Admin/HR accounts' });
            }
        }
        employee.name = req.body.name || employee.name;
        employee.email = req.body.email || employee.email;
        employee.role = req.body.role || employee.role;
        employee.department = req.body.department || employee.department;
        employee.employeeId = req.body.employeeId || employee.employeeId;
        employee.salary = req.body.salary || employee.salary;
        employee.nfc = req.body.nfc || employee.nfc;
        if (req.body.password) {
            employee.password = req.body.password;
        }

        const updatedEmployee = await employee.save();
        res.json(updatedEmployee);
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
};

// @desc    Delete employee
// @route   DELETE /api/employees/:id
// @access  Private/Admin/HR
const deleteEmployee = async (req, res) => {
    const employee = await Employee.findOne({ _id: req.params.id, organization: req.user.organization });

    if (employee) {
        await employee.deleteOne();
        res.json({ message: 'Employee removed' });
    } else {
        res.status(404).json({ message: 'Employee not found' });
    }
};

module.exports = {
    getEmployees,
    registerEmployee,
    updateEmployee,
    deleteEmployee,
};
