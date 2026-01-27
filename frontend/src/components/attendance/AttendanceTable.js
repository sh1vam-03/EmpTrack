import { FiClock, FiCalendar, FiUser, FiCheckCircle, FiXCircle, FiAlertCircle } from 'react-icons/fi';

export default function AttendanceTable({ history, employees }) {
    if (history.length === 0) {
        return (
            <div className="text-center py-20 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-zinc-700">
                <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <FiCalendar className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">No Attendance Records</h3>
                <p className="text-gray-500 dark:text-gray-500">Attendance logs will appear here.</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center bg-gray-50/30 dark:bg-zinc-800/30">
                <h3 className="font-bold text-gray-800 dark:text-white flex items-center gap-2">
                    <FiClock /> Attendance Logs
                </h3>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-zinc-800/50 text-gray-500 dark:text-zinc-500 text-xs uppercase tracking-wider">
                            <th className="px-6 py-4 font-semibold">Date</th>
                            <th className="px-6 py-4 font-semibold">Employee</th>
                            <th className="px-6 py-4 font-semibold">Check In</th>
                            <th className="px-6 py-4 font-semibold">Check Out</th>
                            <th className="px-6 py-4 font-semibold">Status</th>
                            <th className="px-6 py-4 font-semibold text-right">Hours</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-zinc-800">
                        {history.map((record) => {
                            // Handle populated vs manual lookup
                            const empName = record.employee?.name || employees.find(e => e.id === record.empId)?.name || 'Unknown';
                            const empRole = record.employee?.role || employees.find(e => e.id === record.empId)?.role || 'Employee';
                            const empId = record.employee?.employeeId || record.empId || '';

                            // Status Color
                            let statusBadgeClass = "bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:text-gray-400 border-gray-200 dark:border-zinc-700";
                            let StatusIcon = FiAlertCircle;

                            if (record.status === 'Present') {
                                statusBadgeClass = "bg-green-50 text-green-700 dark:bg-green-900/20 dark:text-green-300 border-green-100 dark:border-green-800";
                                StatusIcon = FiCheckCircle;
                            } else if (record.status === 'Absent') {
                                statusBadgeClass = "bg-red-50 text-red-700 dark:bg-red-900/20 dark:text-red-300 border-red-100 dark:border-red-800";
                                StatusIcon = FiXCircle;
                            }

                            return (
                                <tr key={record._id || record.id} className="hover:bg-blue-50/50 dark:hover:bg-zinc-800/60 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="font-medium text-gray-900 dark:text-white flex items-center gap-2">
                                            <FiCalendar className="text-gray-400" />
                                            {record.date}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-linear-to-tr from-gray-200 to-gray-300 dark:from-zinc-700 dark:to-zinc-600 flex items-center justify-center text-xs font-bold text-gray-600 dark:text-gray-300">
                                                {empName.charAt(0)}
                                            </div>
                                            <div>
                                                <div className="font-medium text-gray-900 dark:text-white text-sm">{empName}</div>
                                                <div className="text-[10px] text-gray-400 uppercase tracking-wide">{empRole}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                        {record.checkIn ? <span className="font-mono">{record.checkIn}</span> : '--:--'}
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                        {record.checkOut ? <span className="font-mono">{record.checkOut}</span> : '--:--'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusBadgeClass}`}>
                                            <StatusIcon className="w-3 h-3" />
                                            {record.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right text-sm font-mono text-gray-500">
                                        {/* Placeholder for hours calc if needed */}
                                        {record.checkIn && record.checkOut ? "8h 30m" : "-"}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
