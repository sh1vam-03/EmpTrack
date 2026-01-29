const express = require('express');
const router = express.Router();
const { markAttendance, getAttendance, approveAttendance } = require('../controllers/attendanceController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', markAttendance); // Public for simulation (NFC entry)
router.get('/', protect, getAttendance);
router.put('/:id', protect, authorize('Admin', 'HR'), approveAttendance);

module.exports = router;
