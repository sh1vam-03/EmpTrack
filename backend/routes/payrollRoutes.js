const express = require('express');
const router = express.Router();
const { getPayroll } = require('../controllers/payrollController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, getPayroll);

module.exports = router;
