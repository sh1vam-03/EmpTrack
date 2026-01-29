import { useEffect } from 'react';
import Layout from '../components/common/Layout';
import { useAuth } from '../context/AuthContext';
import { useEmployees } from '../context/EmployeeContext';
import { useTasks } from '../context/TaskContext';
import { useAlert } from '../context/AlertContext';
import { useRouter } from 'next/router';
import TaskForm from '../components/tasks/TaskForm';
import TaskList from '../components/tasks/TaskList';

export default function Tasks() {
    const { currentUser, loading: authLoading } = useAuth();
    const { employees } = useEmployees();
    const { tasks, assignTask, updateTaskStatus } = useTasks();
    const { showAlert } = useAlert();
    const router = useRouter();

    useEffect(() => {
        if (!authLoading && !currentUser) {
            router.push('/login');
        }
    }, [currentUser, router, authLoading]);

    if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 text-zinc-500 font-medium">Loading...</div>;
    if (!currentUser) return null;

    const isAdminOrHR = currentUser.role === 'Admin' || currentUser.role === 'HR';

    // Filter tasks
    const displayTasks = isAdminOrHR
        ? tasks.filter(t => {
            const assignedToEmp = employees.find(e => e.id === t.assignedTo || e._id === t.assignedTo);
            return assignedToEmp?.role === 'Employee';
        })
        : tasks.filter(t => t.assignedTo === currentUser.id || t.assignedTo._id === currentUser.id);

    // Add Task Handler
    const handleAssign = (newTask) => {
        assignTask({ ...newTask, assignedBy: currentUser.id });
        showAlert('Task assigned successfully!', 'success');
    };

    return (
        <Layout>
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Task Management</h1>
                    <p className="text-gray-500 dark:text-zinc-400">
                        {isAdminOrHR ? 'Assign, track, and manage team deliverables.' : 'Track your assigned tasks and progress.'}
                    </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-xl font-bold text-sm border border-purple-100 dark:border-purple-900/30">
                    {displayTasks.length} Active Tasks
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* --- TASK LIST (Admin sees All, Emp sees Theirs) --- */}
                <div className={`${isAdminOrHR ? "lg:col-span-2" : "lg:col-span-3"} order-2 lg:order-1`}>
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
                        <div className="p-6 border-b border-gray-100 dark:border-zinc-800 bg-gray-50/30 dark:bg-zinc-800/20">
                            <h2 className="font-bold text-gray-900 dark:text-white">Task Board</h2>
                        </div>
                        <div className="p-6">
                            {displayTasks.length > 0 ? (
                                <TaskList
                                    tasks={displayTasks}
                                    employees={employees}
                                    currentUser={currentUser}
                                    onUpdateStatus={updateTaskStatus}
                                    isAdminOrHR={isAdminOrHR}
                                />
                            ) : (
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-gray-900 dark:text-white font-medium">No tasks found</h3>
                                    <p className="text-gray-500 text-sm mt-1">All caught up! No active tasks at the moment.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* --- ADMIN/HR SIDE: ASSIGN TASK --- */}
                {isAdminOrHR && (
                    <div className="lg:col-span-1 order-1 lg:order-2">
                        <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 sticky top-24">
                            <div className="flex items-center gap-3 mb-6 border-b border-gray-100 dark:border-zinc-800 pb-4">
                                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                </div>
                                <h2 className="text-lg font-bold text-gray-900 dark:text-white">Assign New Task</h2>
                            </div>

                            <TaskForm employees={employees.filter(e => e.role === 'Employee')} onAssign={handleAssign} />
                        </div>
                    </div>
                )}

            </div>
        </Layout>
    );
}
