
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
            router.push('/');
        }
    }, [currentUser, router, authLoading]);

    if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 text-zinc-500 font-medium">Loading...</div>;
    if (!currentUser) return null;

    const isAdminOrHR = currentUser.role === 'Admin' || currentUser.role === 'HR';

    // Filter tasks
    const displayTasks = isAdminOrHR
        ? tasks.filter(t => {
            const assignedToEmp = employees.find(e => e.id === t.assignedTo);
            return assignedToEmp?.role === 'Employee';
        })
        : tasks.filter(t => t.assignedTo === currentUser.id);

    // Add Task Handler
    const handleAssign = (newTask) => {
        assignTask({ ...newTask, assignedBy: currentUser.id });
        showAlert('Task assigned successfully!', 'success');
    };

    import Layout from '../components/common/Layout';
    // ... imports

    export default function Tasks() {
        // ... hooks

        return (
            <Layout>
                <div className="mb-6">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Task Management</h1>
                    <p className="text-gray-500 dark:text-zinc-400">
                        {isAdminOrHR ? 'Assign and track team tasks.' : 'Manage your assigned tasks.'}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* --- TASK LIST (Admin sees All, Emp sees Theirs) --- */}
                    <div className={`${isAdminOrHR ? "lg:col-span-2" : "lg:col-span-3"} order-2 lg:order-1`}>
                        <TaskList
                            tasks={displayTasks}
                            employees={employees}
                            currentUser={currentUser}
                            onUpdateStatus={updateTaskStatus}
                            isAdminOrHR={isAdminOrHR}
                        />
                    </div>

                    {/* --- ADMIN/HR SIDE: ASSIGN TASK --- */}
                    {isAdminOrHR && (
                        <div className="lg:col-span-1 order-1 lg:order-2">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700">
                                <h2 className="text-lg font-semibold mb-4 text-gray-800 dark:text-white border-b border-gray-100 dark:border-zinc-700 pb-2">Assign New Task</h2>
                                <TaskForm employees={employees.filter(e => e.role === 'Employee')} onAssign={handleAssign} />
                            </div>
                        </div>
                    )}

                </div>
            </Layout>
        );
    }
