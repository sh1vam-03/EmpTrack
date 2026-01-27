const Employee = require('../models/Employee');

// @desc    Get all employees
// @route   GET /api/employees
// @access  Private/Admin/HR
const getEmployees = async (req, res) => {
    const employees = await Employee.find({});
    res.json(employees);
};

// @desc    Register a new employee
// @route   POST /api/employees
// @access  Private/Admin/HR
const registerEmployee = async (req, res) => {
    const { name, email, password, role, department, employeeId, salary, nfc } = req.body;

    const employeeExists = await Employee.findOne({ employeeId });

    if (employeeExists) {
        res.status(400).json({ message: 'Employee already exists' });
        return;
    }

    const employee = await Employee.create({
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
    const employee = await Employee.findById(req.params.id);

    if (employee) {
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
    const employee = await Employee.findById(req.params.id);

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
