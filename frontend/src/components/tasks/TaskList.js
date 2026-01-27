import { FiClock, FiCheckCircle, FiCircle, FiAlertCircle } from 'react-icons/fi';

export default function TaskList({ tasks, employees, currentUser, onUpdateStatus, isAdminOrHR }) {

    if (tasks.length === 0) {
        return (
            <div className="text-center py-20 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-zinc-700">
                <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <FiCheckCircle className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">No Tasks Found</h3>
                <p className="text-gray-500 dark:text-gray-500">Tasks assigned to you or your team will appear here.</p>
            </div>
        );
    }

    const getStatusColor = (status) => {
        switch (status) {
            case 'Completed': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300 border-green-200 dark:border-green-800';
            case 'In Progress': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border-blue-200 dark:border-blue-800';
            default: return 'bg-gray-100 text-gray-700 dark:bg-zinc-700 dark:text-gray-300 border-gray-200 dark:border-zinc-600';
        }
    };

    return (
        <div className="grid grid-cols-1 gap-4">
            {tasks.map((task) => {
                const assigneeName = typeof task.assignedTo === 'object' ? task.assignedTo.name : employees.find(e => e.id === task.assignedTo || e._id === task.assignedTo)?.name || 'Unknown';
                const assignerName = typeof task.assignedBy === 'object' ? task.assignedBy.name : employees.find(e => e.id === task.assignedBy || e._id === task.assignedBy)?.name || 'Unknown';

                return (
                    <div key={task._id || task.id} className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 hover:shadow-md transition-shadow relative overflow-hidden group">
                        <div className={`absolute top-0 left-0 w-1 h-full ${task.status === 'Completed' ? 'bg-green-500' : task.status === 'In Progress' ? 'bg-blue-500' : 'bg-gray-300'}`} />

                        <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border flex items-center gap-1.5 ${getStatusColor(task.status)}`}>
                                        {task.status === 'Completed' ? <FiCheckCircle /> : task.status === 'In Progress' ? <FiClock /> : <FiAlertCircle />}
                                        {task.status}
                                    </span>
                                    {task.dueDate && (
                                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                                            <FiClock /> Due: {new Date(task.dueDate).toLocaleDateString()}
                                        </span>
                                    )}
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">{task.title}</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Assigned to <span className="font-semibold text-gray-700 dark:text-gray-300">{assigneeName}</span> by <span className="text-gray-500">{assignerName}</span>
                                </p>
                            </div>

                            <div className="flex items-center gap-3">
                                {/* Actions Area */}
                                {(isAdminOrHR || (task.assignedTo === currentUser.id || task.assignedTo._id === currentUser.id)) && (
                                    <div className="flex gap-2">
                                        {task.status !== 'In Progress' && task.status !== 'Completed' && (
                                            <button
                                                onClick={() => onUpdateStatus(task._id || task.id, 'In Progress')}
                                                className="px-4 py-2 text-sm font-medium bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                                            >
                                                Start
                                            </button>
                                        )}
                                        {task.status !== 'Completed' && (
                                            <button
                                                onClick={() => onUpdateStatus(task._id || task.id, 'Completed')}
                                                className="px-4 py-2 text-sm font-medium bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/40 transition-colors"
                                            >
                                                Complete
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
