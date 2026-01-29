const express = require('express');
const router = express.Router();
const {
    getEmployees,
    registerEmployee,
    updateEmployee,
    deleteEmployee,
} = require('../controllers/employeeController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/')
    .get(protect, authorize('Admin', 'HR'), getEmployees)
    .post(protect, authorize('Admin', 'HR'), registerEmployee);

router.route('/:id')
    .put(protect, authorize('Admin', 'HR'), updateEmployee)
    .delete(protect, authorize('Admin'), deleteEmployee);

module.exports = router;
