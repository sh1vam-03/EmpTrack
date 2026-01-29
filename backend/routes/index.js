const express = require('express');
const router = express.Router();

const authRoutes = require('./authRoutes');
const employeeRoutes = require('./employeeRoutes');
const attendanceRoutes = require('./attendanceRoutes');
const taskRoutes = require('./taskRoutes');
const payrollRoutes = require('./payrollRoutes');
const leaveRoutes = require('./leaveRoutes');

router.use('/auth', authRoutes);
router.use('/employees', employeeRoutes);
router.use('/attendance', attendanceRoutes);
router.use('/tasks', taskRoutes);
router.use('/payroll', payrollRoutes);
router.use('/leaves', leaveRoutes);

module.exports = router;
