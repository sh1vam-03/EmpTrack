import { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import { useAuth } from '../context/AuthContext';
import { useEmployees } from '../context/EmployeeContext';
import { useAttendance } from '../context/AttendanceContext';
import { useRouter } from 'next/router';
import AttendanceTable from '../components/attendance/AttendanceTable';

export default function Attendance() {
    const { currentUser, loading: authLoading } = useAuth();
    const { employees } = useEmployees();
    const { attendanceHistory } = useAttendance();
    const router = useRouter();

    const [filterDate, setFilterDate] = useState('');
    const [filterEmp, setFilterEmp] = useState('');

    useEffect(() => {
        if (!authLoading && !currentUser) {
            router.push('/login');
        }
    }, [currentUser, router, authLoading]);

    if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 text-zinc-500 font-medium">Loading...</div>;
    if (!currentUser) return null;

    const isAdminOrHR = currentUser.role === 'Admin' || currentUser.role === 'HR';

    // Filter logic needs to assume ID or _id
    const filteredHistory = attendanceHistory.filter(record => {
        const matchDate = filterDate ? record.date === filterDate : true;

        if (isAdminOrHR) {
            // Find the employee associated with this record
            const employee = employees.find(e => (e.id || e._id) === record.employee._id); // Assuming population works
            // Or look at populated record.employee if backend populates it nicely

            // Backend populates: employee: { _id, name, employeeId, role }
            // So we can check record.employee.role directly

            const isEmployeeRole = record.employee?.role === 'Employee';

            // Filter by empID (string match)
            const matchEmp = filterEmp ? record.employee?.employeeId?.toLowerCase().includes(filterEmp.toLowerCase()) : true;
            return matchDate && matchEmp && isEmployeeRole;
        } else {
            // Employee only sees their own
            return (record.employee._id === currentUser._id || record.employee === currentUser._id) && matchDate;
        }
    }).sort((a, b) => new Date(b.date) - new Date(a.date));

    return (
        <Layout>
            <div className="mb-6">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Attendance History</h1>
                <p className="text-gray-500 dark:text-zinc-400">View and track daily attendance records.</p>
            </div>

            {/* Filters */}
            <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-zinc-700 mb-6 flex flex-wrap gap-4 items-center">
                <div className="flex flex-col">
                    <label className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase mb-1">Filter by Date</label>
                    <input
                        type="date"
                        className="border border-gray-200 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
                        onChange={(e) => setFilterDate(e.target.value)}
                    />
                </div>
                {isAdminOrHR && (
                    <div className="flex flex-col">
                        <label className="text-xs font-bold text-gray-400 dark:text-zinc-500 uppercase mb-1">Filter by Employee ID</label>
                        <input
                            type="text"
                            placeholder="e.g. EMP003"
                            className="border border-gray-200 dark:border-zinc-600 bg-white dark:bg-zinc-900 text-gray-900 dark:text-white rounded-lg p-2 text-sm focus:ring-2 focus:ring-blue-500 outline-none w-48 placeholder-gray-400 dark:placeholder-zinc-500"
                            onChange={(e) => setFilterEmp(e.target.value)}
                        />
                    </div>
                )}
                <div className="ml-auto">
                    <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium">
                        Docs: {filteredHistory.length}
                    </span>
                </div>
            </div>

            <AttendanceTable history={filteredHistory} employees={employees} />
        </Layout>
    );
}
