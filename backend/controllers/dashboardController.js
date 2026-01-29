const Employee = require('../models/Employee');
const Attendance = require('../models/Attendance');
const Task = require('../models/Task');
const Leave = require('../models/Leave');

// @desc    Get dashboard statistics
// @route   GET /api/dashboard/stats
// @access  Private
const getStats = async (req, res) => {
    try {
        const { organization, role, _id } = req.user;
        const today = new Date().toISOString().split('T')[0];

        let stats = {
            totalEmployees: 0,
            presentToday: 0,
            pendingTasks: 0,
            pendingLeaves: 0 // or 'onLeave' depending on what we want to show
        };

        // 1. Total Employees (Role based visibility)
        if (role === 'Admin') {
            // Count all except Admins
            stats.totalEmployees = await Employee.countDocuments({
                organization,
                role: { $ne: 'Admin' }
            });
        } else if (role === 'HR') {
            // HR sees all employees in org (usually same as Admin view but strictly strictly excluding themselves/Admins if we want, but usually HR manages all)
            // Per previous logic, HR manages employees. Let's keep it consistent.
            stats.totalEmployees = await Employee.countDocuments({ organization });
        } else {
            // Employees don't really need this, but we can show total team size
            stats.totalEmployees = await Employee.countDocuments({ organization });
        }


        // 2. Present Today
        // Attendance doesn't directly store organization, so we need to filter by employees in the org
        // However, fetching all employees to filter attendance is heavy. 
        // Better: Find attendances where date is today, then populate employee and check org. 
        // OR: simpler approach if we trust the user context.
        // Actually, we can just query Attendance where employee is in the list of org employees.
        // Optimization: Get ID list of org employees first.
        const orgEmployees = await Employee.find({ organization }).select('_id');
        const orgEmployeeIds = orgEmployees.map(e => e._id);

        stats.presentToday = await Attendance.countDocuments({
            employee: { $in: orgEmployeeIds },
            date: today,
            status: 'Present'
        });


        // 3. Pending Tasks / My Tasks
        if (role === 'Employee') {
            stats.pendingTasks = await Task.countDocuments({
                assignedTo: _id,
                status: { $in: ['Open', 'In Progress'] }
            });
        } else {
            // Admin/HR see all pending tasks in the org
            // First need tasks assigned to org employees.
            // Task model has assignedTo (Employee) and assignedBy (Employee).
            // We can filter by assignedTo being in the orgEmployeeIds
            stats.pendingTasks = await Task.countDocuments({
                assignedTo: { $in: orgEmployeeIds },
                status: { $in: ['Open', 'In Progress'] }
            });
        }

        // 4. On Leave / Pending Leaves
        // Dashboard card says "On Leave". Let's count people with approved leave for today.
        // OR "Pending Leaves" for HR/Admin to approve.
        // The dashboard UI in previous code had "On Leave" for Admin/HR. Let's stick to that or "Pending Requests".
        // The mock data said "On Leave". Let's count "Approved" leaves that include today.

        if (role === 'Employee') {
            // For employee, maybe showing their remaining leaves or pending requests?
            // Let's show their approved leaves for future reference or pending.
            // Mock data showed "On Leave" with value 2.
            // Let's show "Pending Requests" for Employee context if meaningful, or just generic "On Leave" count in org.
            // Actually, let's keep it simple: "On Leave" today across org for Admin/HR.
            // For Employee: "My Pending Leaves" maybe?
            // Let's stick to the card roles. Cards says:
            // Total Employees: Admin, HR
            // Present Today: Admin, HR, Employee
            // Pending Tasks: Admin, HR, Employee
            // On Leave: Admin, HR

            const todayDate = new Date();
            stats.onLeave = await Leave.countDocuments({
                organization,
                status: 'Approved',
                startDate: { $lte: todayDate },
                endDate: { $gte: todayDate }
            });

        } else {
            // Admin/HR: show count of people currently on leave
            const todayDate = new Date();
            stats.onLeave = await Leave.countDocuments({
                organization, // Leave model has organization field directly
                status: 'Approved',
                startDate: { $lte: todayDate },
                endDate: { $gte: todayDate }
            });
        }

        res.json(stats);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = { getStats };
