import { FiActivity } from 'react-icons/fi';

export default function StatsCard({ title, value, icon: Icon, trend, color, onClick }) {
    // color prop should be a string like "blue", "green", etc. to derive classes

    const colorClasses = {
        blue: {
            bg: 'bg-blue-50 dark:bg-blue-900/10',
            text: 'text-blue-600 dark:text-blue-400',
            iconBg: 'bg-blue-100 dark:bg-blue-900/30',
            border: 'border-blue-100 dark:border-blue-900/20'
        },
        green: {
            bg: 'bg-green-50 dark:bg-green-900/10',
            text: 'text-green-600 dark:text-green-400',
            iconBg: 'bg-green-100 dark:bg-green-900/30',
            border: 'border-green-100 dark:border-green-900/20'
        },
        purple: {
            bg: 'bg-purple-50 dark:bg-purple-900/10',
            text: 'text-purple-600 dark:text-purple-400',
            iconBg: 'bg-purple-100 dark:bg-purple-900/30',
            border: 'border-purple-100 dark:border-purple-900/20'
        },
        orange: {
            bg: 'bg-orange-50 dark:bg-orange-900/10',
            text: 'text-orange-600 dark:text-orange-400',
            iconBg: 'bg-orange-100 dark:bg-orange-900/30',
            border: 'border-orange-100 dark:border-orange-900/20'
        },
        red: {
            bg: 'bg-red-50 dark:bg-red-900/10',
            text: 'text-red-600 dark:text-red-400',
            iconBg: 'bg-red-100 dark:bg-red-900/30',
            border: 'border-red-100 dark:border-red-900/20'
        }
    };

    const theme = colorClasses[color] || colorClasses.blue;

    return (
        <div
            onClick={onClick}
            className={`relative p-6 rounded-2xl bg-white dark:bg-zinc-900 border ${theme.border} shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group`}
        >
            <div className="flex justify-between items-start">
                <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-zinc-400 mb-1">{title}</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{value}</h3>
                </div>
                <div className={`p-3 rounded-xl ${theme.iconBg} ${theme.text} transition-transform group-hover:scale-110`}>
                    <Icon className="text-xl" />
                </div>
            </div>

            {trend && (
                <div className="mt-4 flex items-center gap-2 text-xs font-medium">
                    <span className={`${trend > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'} flex items-center gap-1 bg-white dark:bg-zinc-800 px-2 py-1 rounded-full shadow-xs border border-gray-100 dark:border-zinc-700`}>
                        <FiActivity />
                        {trend > 0 ? '+' : ''}{trend}%
                    </span>
                    <span className="text-gray-400 dark:text-zinc-500">from last month</span>
                </div>
            )}
        </div>
    );
}
