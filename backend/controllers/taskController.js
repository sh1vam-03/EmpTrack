const Task = require('../models/Task');
const Employee = require('../models/Employee');

// @desc    Get tasks
// @route   GET /api/tasks
// @access  Private
const getTasks = async (req, res) => {
    let query = {};
    if (req.user.role === 'Employee') {
        query.assignedTo = req.user._id;
    } else {
        // Admin/HR see all tasks in Org
        // We find tasks where assignedTo is an employee in this org
        // Or we could add 'organization' field to Task model for easier querying?
        // Let's stick to population filtering or pre-fetching org employees.
        const orgEmployees = await Employee.find({ organization: req.user.organization }).select('_id');
        const empIds = orgEmployees.map(e => e._id);

        // Tasks assigned TO org employees OR assigned BY org employees (though assignedTo is better)
        query.assignedTo = { $in: empIds };
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

    // Verify assignedTo exists and is in the same organization
    const targetEmployee = await Employee.findOne({ _id: assignedTo, organization: req.user.organization });
    if (!targetEmployee) {
        res.status(404).json({ message: 'Employee not found or not in your organization' });
        return;
    }

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
