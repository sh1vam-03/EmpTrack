import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHome, FiUsers, FiClock, FiCheckSquare, FiDollarSign, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar() {
    const router = useRouter();
    const { logout, currentUser } = useAuth();

    const menuItems = [
        { name: 'Dashboard', icon: FiHome, path: '/dashboard', roles: ['Admin', 'HR', 'Employee'] },
        { name: 'Employees', icon: FiUsers, path: '/employees', roles: ['Admin', 'HR'] },
        { name: 'Attendance', icon: FiClock, path: '/attendance', roles: ['Admin', 'HR', 'Employee'] },
        { name: 'Tasks', icon: FiCheckSquare, path: '/tasks', roles: ['Admin', 'HR', 'Employee'] },
        { name: 'Payroll', icon: FiDollarSign, path: '/payroll', roles: ['Admin', 'HR', 'Employee'] },
    ];

    const isActive = (path) => router.pathname === path;

    return (
        <aside className="hidden md:flex flex-col w-64 bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 h-screen sticky top-0">
            <div className="p-6 flex items-center justify-center border-b border-gray-100 dark:border-zinc-800">
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600">EmpTrack</h1>
            </div>

            <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-2">
                {menuItems.filter(item => item.roles.includes(currentUser?.role)).map((item) => (
                    <Link key={item.path} href={item.path} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${isActive(item.path)
                            ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 shadow-sm'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white'
                        }`}>
                        <item.icon className={`text-xl ${isActive(item.path) ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400 dark:text-gray-500'}`} />
                        {item.name}
                    </Link>
                ))}
            </nav>

            <div className="p-4 border-t border-gray-100 dark:border-zinc-800">
                <button
                    onClick={() => { logout(); router.push('/login'); }}
                    className="flex items-center gap-3 px-4 py-3 w-full text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors font-medium"
                >
                    <FiLogOut className="text-xl" />
                    Logout
                </button>
            </div>
        </aside>
    );
}
