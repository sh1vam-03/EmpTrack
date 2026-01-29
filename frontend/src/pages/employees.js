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
            {/* Header Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Employee Management</h1>
                    <p className="text-gray-500 dark:text-zinc-400">Manage your organization's workforce and roles.</p>
                </div>

                {/* User Profile Summary */}
                <div className="flex items-center gap-4 bg-white dark:bg-zinc-900 p-2 pr-6 rounded-full border border-gray-100 dark:border-zinc-800 shadow-sm">
                    <div className="w-10 h-10 rounded-full bg-linear-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white text-lg font-bold shadow-md">
                        {currentUser.name.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-gray-800 dark:text-white leading-tight">{currentUser.name}</h2>
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded-full">
                            {currentUser.role}
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- LEFT COLUMN: MANAGEMENT & LIST (Admin & HR) --- */}
                {(isAdmin || isHR) && (
                    <div className="lg:col-span-3 space-y-6">

                        {/* Search & Actions Bar */}
                        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 flex flex-col md:flex-row gap-4 items-center justify-between">
                            <div className="relative w-full md:w-96">
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </span>
                                <input
                                    type="text"
                                    placeholder="Search employees..."
                                    className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-zinc-800/50 border border-gray-200 dark:border-zinc-700 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none text-sm transition-all"
                                />
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => { setIsEditing(null); setInitialData(null); }}
                                    className="flex items-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold shadow-lg shadow-blue-500/30 transition-all transform hover:scale-105"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                    </svg>
                                    Add Employee
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Form Section */}
                            <div className="lg:col-span-1">
                                <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 sticky top-24">
                                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-100 dark:border-zinc-800 pb-4">
                                        {isEditing ? 'Edit Profile' : 'New Profile'}
                                    </h3>
                                    <EmployeeForm
                                        onSubmit={handleSubmit}
                                        isEditing={isEditing}
                                        initialData={initialData}
                                        onCancel={() => { setIsEditing(null); setInitialData(null); }}
                                    />
                                </div>
                            </div>

                            {/* List Section */}
                            <div className="lg:col-span-2">
                                <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
                                    <div className="p-6 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center">
                                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Team Directory</h3>
                                        <span className="bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-bold">
                                            {employees.filter(e => e.role === 'Employee').length} Active
                                        </span>
                                    </div>
                                    <EmployeeList
                                        employees={employees.filter(e => e.role === 'Employee')}
                                        onEdit={handleEdit}
                                        onDelete={handleDelete}
                                    />
                                </div>
                            </div>
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
