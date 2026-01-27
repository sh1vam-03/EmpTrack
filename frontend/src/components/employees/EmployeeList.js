import { FiEdit2, FiTrash2, FiUser, FiMail, FiCpu, FiCreditCard } from 'react-icons/fi';

export default function EmployeeList({ employees, onEdit, onDelete }) {
    if (employees.length === 0) {
        return (
            <div className="text-center py-20 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl border-2 border-dashed border-gray-200 dark:border-zinc-700">
                <div className="w-16 h-16 bg-gray-100 dark:bg-zinc-700 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                    <FiUser className="text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-700 dark:text-gray-300">No Employees Found</h3>
                <p className="text-gray-500 dark:text-gray-500">Add your first employee to get started.</p>
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center">
                <h3 className="font-bold text-gray-800 dark:text-white">All Employees ({employees.length})</h3>
                {/* Could add search/filter here */}
            </div>

            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 dark:bg-zinc-800/50 text-gray-500 dark:text-zinc-500 text-xs uppercase tracking-wider">
                            <th className="px-6 py-4 font-semibold">Employee</th>
                            <th className="px-6 py-4 font-semibold">Department</th>
                            <th className="px-6 py-4 font-semibold">Role</th>
                            <th className="px-6 py-4 font-semibold">Salary</th>
                            <th className="px-6 py-4 font-semibold text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50 dark:divide-zinc-800">
                        {employees.map((emp) => (
                            <tr key={emp.id || emp._id} className="hover:bg-blue-50/50 dark:hover:bg-zinc-800/60 transition-colors group">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm shadow-sm">
                                            {emp.name.charAt(0)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900 dark:text-white">{emp.name}</div>
                                            <div className="text-xs text-gray-500 flex items-center gap-1">
                                                <FiMail className="w-3 h-3" /> {emp.email}
                                            </div>
                                            <div className="text-[10px] text-gray-400 mt-0.5">ID: {emp.employeeId}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-zinc-700">
                                        <FiCpu className="w-3 h-3" />
                                        {emp.department}
                                    </span>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`inline-flex px-2.5 py-1 rounded-md text-xs font-medium border ${emp.role === 'Admin' ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border-purple-100 dark:border-purple-800' :
                                            emp.role === 'HR' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-100 dark:border-orange-800' :
                                                'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-100 dark:border-blue-800'
                                        }`}>
                                        {emp.role}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center gap-1">
                                        <span className="text-gray-400">₹</span>
                                        <span className="font-mono">{emp.salary.toLocaleString()}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <button
                                            onClick={() => onEdit(emp)}
                                            className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-colors border border-transparent hover:border-blue-100 dark:hover:border-blue-800"
                                            title="Edit"
                                        >
                                            <FiEdit2 className="w-4 h-4" />
                                        </button>
                                        <button
                                            onClick={() => onDelete(emp.id || emp._id)}
                                            className="p-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors border border-transparent hover:border-red-100 dark:hover:border-red-800"
                                            title="Delete"
                                        >
                                            <FiTrash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
