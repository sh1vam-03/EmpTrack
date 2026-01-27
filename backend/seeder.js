const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const Employee = require('./models/Employee');
const Attendance = require('./models/Attendance');
const Task = require('./models/Task');

dotenv.config();

const importData = async () => {
    try {
        await Employee.deleteMany();
        await Attendance.deleteMany();
        await Task.deleteMany();

        const employees = [
            {
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
