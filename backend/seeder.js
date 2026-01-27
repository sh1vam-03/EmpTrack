const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Employee = require('./models/Employee');
const Attendance = require('./models/Attendance');
const Task = require('./models/Task');
const Organization = require('./models/Organization');

dotenv.config();

const importData = async () => {
    try {
        await Employee.deleteMany();
        await Attendance.deleteMany();
        await Task.deleteMany();
        await Organization.deleteMany();

        const org = await Organization.create({
            name: 'Demo Corp',
            email: 'admin@democorp.com',
            address: '123 Tech Park'
        });

        const employees = [
            {
                organization: org._id,
                name: 'Rahul Sharma',
                email: 'admin@example.com',
                password: '123', // Will be hashed
                role: 'Admin',
                department: 'IT',
                employeeId: 'AD001',
                salary: 50000,
                nfc: 'NFC_ADMIN'
            },
            {
                organization: org._id,
                name: 'Ravi Kumar',
                email: 'hr@example.com',
                password: '123',
                role: 'HR',
                department: 'HR',
                employeeId: 'HR001',
                salary: 40000,
                nfc: 'NFC_HR'
            },
            {
                organization: org._id,
                name: 'Rohit Gupta',
                email: 'rohit@example.com',
                password: '123',
                role: 'Employee',
                department: 'Development',
                employeeId: 'EMP001',
                salary: 6000,
                nfc: 'NFC001'
            }
        ];

        await Employee.create(employees);

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const destroyData = async () => {
    try {
        await Employee.deleteMany();
        await Attendance.deleteMany();
        await Task.deleteMany();
        await Organization.deleteMany();

        console.log('Data Destroyed!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

const runSeeder = async () => {
    await connectDB();
    if (process.argv[2] === '-d') {
        destroyData();
    } else {
        importData();
    }
}

runSeeder();
