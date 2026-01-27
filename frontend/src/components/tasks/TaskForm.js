import { useState } from 'react';
import { FiType, FiUser, FiCalendar } from 'react-icons/fi';

export default function TaskForm({ employees, onAssign }) {
    const [title, setTitle] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [dueDate, setDueDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAssign({ title, assignedTo, dueDate });
        setTitle('');
        setAssignedTo('');
        setDueDate('');
    };

    const inputClass = "w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-black border border-gray-200 dark:border-zinc-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white placeholder-gray-400 dark:placeholder-zinc-600";
    const labelClass = "block text-xs font-semibold text-gray-500 dark:text-zinc-500 uppercase mb-1.5 ml-1";
    const iconClass = "absolute left-3 top-9 text-gray-400 dark:text-zinc-500 text-lg";

    return (
        <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
                <label className={labelClass}>Task Title</label>
                <FiType className={iconClass} />
                <input
                    type="text"
                    placeholder="e.g. Update Client Presentation"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className={inputClass}
                    required
                />
            </div>

            <div className="relative">
                <label className={labelClass}>Assign To</label>
                <FiUser className={iconClass} />
                <select
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                    className={`${inputClass} appearance-none cursor-pointer`}
                    required
                >
                    <option value="">Select Employee</option>
                    {employees.map(emp => (
                        <option key={emp.id} value={emp.id}>{emp.name} ({emp.department})</option>
                    ))}
                </select>
                <div className="absolute right-4 top-9 pointer-events-none text-gray-400">▼</div>
            </div>

            <div className="relative">
                <label className={labelClass}>Due Date</label>
                <FiCalendar className={iconClass} />
                <input
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    className={inputClass}
                    required
                />
            </div>

            <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transform hover:scale-[1.02] transition-all"
            >
                Assign Task
            </button>
        </form>
    );
}
