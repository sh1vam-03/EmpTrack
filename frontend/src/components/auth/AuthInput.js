import { FiAlertCircle } from 'react-icons/fi';

export default function AuthInput({ label, type, name, value, onChange, placeholder, icon: Icon, error, required = false }) {
    return (
        <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                {label} {required && <span className="text-red-500">*</span>}
            </label>
            <div className="relative group">
                {Icon && (
                    <div className="absolute left-3 top-3 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        <Icon size={18} />
                    </div>
                )}
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    className={`w-full bg-gray-50 dark:bg-zinc-900 text-gray-900 dark:text-white border ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-200 dark:border-zinc-800 focus:ring-blue-500 focus:border-blue-500'} rounded-xl py-2.5 ${Icon ? 'pl-10' : 'pl-4'} pr-4 text-sm outline-none focus:ring-2 transition-all shadow-sm`}
                    required={required}
                />
            </div>
            {error && (
                <p className="text-xs text-red-500 flex items-center gap-1 mt-1">
                    <FiAlertCircle /> {error}
                </p>
            )}
        </div>
    );
}
