const express = require('express');
const router = express.Router();
const { getTasks, assignTask, updateTask } = require('../controllers/taskController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.route('/').get(protect, getTasks).post(protect, authorize('Admin', 'HR'), assignTask);
router.route('/:id').put(protect, updateTask);

module.exports = router;
