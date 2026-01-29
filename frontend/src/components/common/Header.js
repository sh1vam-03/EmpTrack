import { useRouter } from 'next/router';
import { FiMenu, FiBell } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

export default function Header({ toggleSidebar }) {
    const router = useRouter();
    const { currentUser } = useAuth();

    // Mapping path to title
    const getPageTitle = () => {
        const path = router.pathname;
        if (path.includes('dashboard')) return 'Dashboard';
        if (path.includes('employees')) return 'Employee Management';
        if (path.includes('attendance')) return 'Attendance';
        if (path.includes('tasks')) return 'Task Management';
        if (path.includes('payroll')) return 'Payroll & Salary';
        if (path.includes('leaves')) return 'Leave Management';
        return 'EmpTrack';
    };

    return (
        <header className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-30 border-b border-gray-100 dark:border-zinc-800 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-600 dark:text-gray-400"
                >
                    <FiMenu size={24} />
                </button>
                <h2 className="text-xl font-bold text-gray-800 dark:text-white hidden md:block">
                    {getPageTitle()}
                </h2>
            </div>

            <div className="flex items-center gap-6">
                <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 dark:text-gray-400 transition-colors">
                    <FiBell size={20} />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-gray-200 dark:border-zinc-700">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{currentUser?.name}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{currentUser?.role}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold shadow-lg shadow-blue-500/20">
                        {currentUser?.name?.charAt(0) || 'U'}
                    </div>
                </div>
            </div>
        </header>
    );
}
