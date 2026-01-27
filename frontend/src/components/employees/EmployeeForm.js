import { useState, useEffect } from 'react';
import { FiUser, FiMail, FiLock, FiBriefcase, FiDollarSign, FiCreditCard, FiHash } from 'react-icons/fi';

export default function EmployeeForm({ onSubmit, isEditing, initialData, onCancel }) {
    const defaultData = {
        name: '',
        email: '',
        password: '',
        role: 'Employee',
        department: '',
        employeeId: '',
        salary: '',
        nfc: ''
    };

    const [formData, setFormData] = useState(defaultData);

    useEffect(() => {
        if (isEditing && initialData) {
            setFormData({ ...initialData, password: '' }); // Don't show password
        } else {
            setFormData(defaultData);
        }
    }, [isEditing, initialData]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
        if (!isEditing) setFormData(defaultData);
    };

    const inputClass = "w-full pl-10 pr-4 py-2.5 bg-gray-50 dark:bg-black border border-gray-200 dark:border-zinc-700 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all dark:text-white placeholder-gray-400 dark:placeholder-zinc-600";
    const labelClass = "block text-xs font-semibold text-gray-500 dark:text-zinc-500 uppercase mb-1.5 ml-1";
    const iconClass = "absolute left-3 top-9 text-gray-400 dark:text-zinc-500 text-lg";

    return (
        <form onSubmit={handleSubmit} className="mb-8">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {isEditing ? 'Edit Employee' : 'Add New Employee'}
                </h3>
                {isEditing && (
                    <button type="button" onClick={onCancel} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white underline">
                        Cancel Edit
                    </button>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                    <label className={labelClass}>Full Name</label>
                    <FiUser className={iconClass} />
                    <input
                        type="text"
                        name="name"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>

                {/* Email */}
                <div className="relative">
                    <label className={labelClass}>Email Address</label>
                    <FiMail className={iconClass} />
                    <input
                        type="email"
                        name="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>

                {/* Password (Optional on Edit) */}
                <div className="relative">
                    <label className={labelClass}>{isEditing ? 'New Password (Optional)' : 'Password'}</label>
                    <FiLock className={iconClass} />
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={formData.password}
                        onChange={handleChange}
                        className={inputClass}
                        required={!isEditing}
                    />
                </div>

                {/* Role */}
                <div className="relative">
                    <label className={labelClass}>Role</label>
                    <FiBriefcase className={iconClass} />
                    <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className={`${inputClass} appearance-none cursor-pointer`}
                    >
                        <option value="Employee">Employee</option>
                        <option value="HR">HR Manager</option>
                        <option value="Admin">Admin</option>
                    </select>
                    <div className="absolute right-4 top-9 pointer-events-none text-gray-400">▼</div>
                </div>

                {/* Department */}
                <div className="relative">
                    <label className={labelClass}>Department</label>
                    <FiBriefcase className={iconClass} />
                    <input
                        type="text"
                        name="department"
                        placeholder="Engineering"
                        value={formData.department}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>

                {/* Employee ID */}
                <div className="relative">
                    <label className={labelClass}>Employee ID</label>
                    <FiHash className={iconClass} />
                    <input
                        type="text"
                        name="employeeId"
                        placeholder="EMP001"
                        value={formData.employeeId}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>

                {/* Salary */}
                <div className="relative">
                    <label className={labelClass}>Monthly Salary (₹)</label>
                    <FiDollarSign className={iconClass} />
                    <input
                        type="number"
                        name="salary"
                        placeholder="50000"
                        value={formData.salary}
                        onChange={handleChange}
                        className={inputClass}
                        required
                    />
                </div>

                {/* NFC ID */}
                <div className="relative">
                    <label className={labelClass}>NFC Tag ID</label>
                    <FiCreditCard className={iconClass} />
                    <input
                        type="text"
                        name="nfc"
                        placeholder="NFC_TAG_123"
                        value={formData.nfc}
                        onChange={handleChange}
                        className={inputClass}
                    />
                </div>
            </div>

            <div className="mt-8 flex justify-end">
                <button
                    type="submit"
                    className="px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/30 transform hover:scale-[1.02] transition-all"
                >
                    {isEditing ? 'Update Employee' : 'Create Employee'}
                </button>
            </div>
        </form>
    );
}