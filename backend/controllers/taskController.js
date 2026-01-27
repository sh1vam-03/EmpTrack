const Task = require('../models/Task');

// @desc    Get tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
    let query = {};
    if (req.user.role === 'Employee') {
        query.assignedTo = req.user._id;
    }

    const tasks = await Task.find(query)
        .populate('assignedTo', 'name')
        .populate('assignedBy', 'name');
    res.json(tasks);
};

// @desc    Assign task
// @route   POST /api/tasks
// @access  Private/Admin/HR
const assignTask = async (req, res) => {
    const { title, assignedTo, dueDate } = req.body;

    const task = await Task.create({
        title,
        assignedTo,
        assignedBy: req.user._id,
        dueDate,
        status: 'Open'
    });

    res.status(201).json(task);
};

// @desc    Update task status
// @route   PUT /api/tasks/:id
// @access  Private
const updateTask = async (req, res) => {
    const task = await Task.findById(req.params.id);

    if (task) {
        // Employees can only update status
        if (req.user.role === 'Employee') {
            if (task.assignedTo.toString() !== req.user._id.toString()) {
                res.status(401).json({ message: 'Not authorized' });
                return;
            }
            task.status = req.body.status || task.status;
        } else {
            // Admin/HR can update everything
            task.title = req.body.title || task.title;
            task.status = req.body.status || task.status;
            task.dueDate = req.body.dueDate || task.dueDate;
        }

        const updatedTask = await task.save();
        res.json(updatedTask);
    } else {
        res.status(404).json({ message: 'Task not found' });
    }
};

module.exports = { getTasks, assignTask, updateTask };
