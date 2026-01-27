const express = require('express');
const router = express.Router();
const { markAttendance, getAttendance } = require('../controllers/attendanceController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', markAttendance); // Public for simulation (NFC entry)
router.get('/', protect, getAttendance);

module.exports = router;
