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
            {/* Filters */}
            <div className="bg-white dark:bg-zinc-900 p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-end">
                    <div className="flex-1 w-full">
                        <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Filter by Date</label>
                        <input
                            type="date"
                            className="w-full border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 text-gray-900 dark:text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                            onChange={(e) => setFilterDate(e.target.value)}
                        />
                    </div>

                    {isAdminOrHR && (
                        <div className="flex-1 w-full">
                            <label className="block text-xs font-bold text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2">Employee ID Search</label>
                            <input
                                type="text"
                                placeholder="Search by EMP ID..."
                                className="w-full border border-gray-200 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800/50 text-gray-900 dark:text-white rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                                onChange={(e) => setFilterEmp(e.target.value)}
                            />
                        </div>
                    )}

                    <div className="w-full md:w-auto">
                        <div className="h-[46px] px-6 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-blue-900/30 flex items-center justify-center font-bold text-sm whitespace-nowrap">
                            Total Records: {filteredHistory.length}
                        </div>
                    </div>
                </div>
            </div>

            <AttendanceTable history={filteredHistory} employees={employees} />
        </Layout>
    );
}
