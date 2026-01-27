import { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import { useEmployees } from '../context/EmployeeContext';
import { useAuth } from '../context/AuthContext';
import { useAttendance } from '../context/AttendanceContext';
import { useAlert } from '../context/AlertContext';
import { useConfirm } from '../context/ConfirmContext';
import { useRouter } from 'next/router';
import EmployeeForm from '../components/employees/EmployeeForm';
import EmployeeList from '../components/employees/EmployeeList';
import CheckInOut from '../components/attendance/CheckInOut';
import { FiUsers } from 'react-icons/fi';

export default function Employees() {
    const { currentUser, logout, loading } = useAuth();
    const { employees, addEmployee, updateEmployee, deleteEmployee } = useEmployees();
    const { markAttendance, currentAttendanceStatus } = useAttendance();
    const { showAlert } = useAlert();
    const { showConfirm } = useConfirm();
    const router = useRouter();

    const [isEditing, setIsEditing] = useState(null);
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        if (!loading && !currentUser) {
            router.push('/login'); // Fixed redirect
        }
    }, [currentUser, router, loading]);

    if (loading) return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-500 font-medium">Loading...</div>;
    if (!currentUser) return null;

    const handleSubmit = (formData) => {
        if (isEditing) {
            updateEmployee(isEditing, formData);
            setIsEditing(null);
            setInitialData(null);
            showAlert('Employee updated successfully!', 'success');
        } else {
            addEmployee(formData);
            showAlert('Employee added successfully!', 'success');
        }
    };

    const handleEdit = (emp) => {
        setIsEditing(emp.id || emp._id); // Handle both id formats if needed
        setInitialData(emp);
    };

    const handleDelete = async (id) => {
        const confirmed = await showConfirm(
            'Delete Employee?',
            'Are you sure you want to delete this employee? This action cannot be undone.'
        );

        if (confirmed) {
            deleteEmployee(id);
            showAlert('Employee deleted successfully!', 'success');
        }
    };

    const isAdmin = currentUser.role === 'Admin';
    const isHR = currentUser.role === 'HR';
    const isEmployee = currentUser.role === 'Employee';

    return (
        <Layout>
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Employee Management</h1>
                    <p className="text-gray-500 dark:text-zinc-400">Manage your organization's workforce.</p>
                </div>
            </div>

            {/* Profile / Stats Card for Logged In User */}
            <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold">
                        {currentUser.name.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-gray-800 dark:text-white">{currentUser.name}</h2>
                        <div className="flex gap-2 text-xs font-semibold mt-1">
                            <span className="px-2 py-1 rounded bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300">
                                {currentUser.role}
                            </span>
                            <span className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                                {currentUser.department}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- LEFT COLUMN: MANAGEMENT (Admin & HR) --- */}
                {(isAdmin || isHR) && (
                    <div className="lg:col-span-3 space-y-8">
                        <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700 transition-colors duration-300">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-xl font-bold text-gray-800 dark:text-white flex items-center gap-2">
                                    <FiUsers className="text-2xl" /> <span>Employee Management</span>
                                </h2>
                                <span className="bg-gray-100 dark:bg-zinc-700 text-gray-500 dark:text-zinc-400 text-xs px-2 py-1 rounded">Admin & HR Access</span>
                            </div>

                            <EmployeeForm
                                onSubmit={handleSubmit}
                                isEditing={isEditing}
                                initialData={initialData}
                                onCancel={() => { setIsEditing(null); setInitialData(null); }}
                            />

                            <EmployeeList
                                employees={employees.filter(e => e.role === 'Employee')}
                                onEdit={handleEdit}
                                onDelete={handleDelete}
                            />
                        </div>
                    </div>
                )}

                {/* --- RIGHT COLUMN: NFC ATTENDANCE (Employee ONLY) --- */}
                {isEmployee && (
                    <div className="lg:col-span-1 lg:col-start-2">
                        <div className="sticky top-6">
                            <CheckInOut
                                status={currentAttendanceStatus}
                                onCheckIn={() => markAttendance('Check In')}
                                onCheckOut={() => markAttendance('Check Out')}
                                nfcId={currentUser.nfc}
                            />
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
}
