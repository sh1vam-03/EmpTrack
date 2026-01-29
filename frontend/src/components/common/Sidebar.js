import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHome, FiUsers, FiClock, FiCheckSquare, FiDollarSign, FiLogOut, FiCalendar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';

export default function Sidebar() {
    const router = useRouter();
    const { logout, currentUser } = useAuth();
    const [collapsed, setCollapsed] = useState(false);

    const menuItems = [
        { name: 'Dashboard', icon: FiHome, path: '/dashboard', roles: ['Admin', 'HR', 'Employee'] },
        { name: 'Employees', icon: FiUsers, path: '/employees', roles: ['Admin', 'HR'] },
        { name: 'Attendance', icon: FiClock, path: '/attendance', roles: ['Admin', 'HR', 'Employee'] },
        { name: 'Leaves', icon: FiCalendar, path: '/leaves', roles: ['Admin', 'HR', 'Employee'] },
        { name: 'Tasks', icon: FiCheckSquare, path: '/tasks', roles: ['Admin', 'HR', 'Employee'] },
        { name: 'Payroll', icon: FiDollarSign, path: '/payroll', roles: ['Admin', 'HR', 'Employee'] },
    ];

    const isActive = (path) => router.pathname === path;

    return (
        <aside className={`hidden md:flex flex-col ${collapsed ? 'w-20' : 'w-72'} bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800 h-screen sticky top-0 transition-all duration-300 z-40`}>
            {/* Logo Section - Click to Toggle */}
            <div
                className={`p-6 flex items-center ${collapsed ? 'justify-center' : 'gap-3'} cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors border-b border-gray-100 dark:border-zinc-800 h-20`}
                onClick={() => setCollapsed(!collapsed)}
                title={collapsed ? "Expand Sidebar" : "Collapse Sidebar"}
            >
                <div className="w-8 h-8 min-w-[2rem] bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="text-white font-bold text-lg">E</span>
                </div>
                {!collapsed && (
                    <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tighter whitespace-nowrap overflow-hidden">
                        EMP<span className="font-light">TRACK</span>
                    </span>
                )}
            </div>

            <nav className="flex-1 overflow-y-auto px-3 space-y-2 scrollbar-hide py-4">
                {!collapsed && <p className="px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2">Menu</p>}

                {menuItems.filter(item => item.roles.includes(currentUser?.role)).map((item) => (
                    <Link
                        key={item.path}
                        href={item.path}
                        className={`flex items-center ${collapsed ? 'justify-center px-0' : 'gap-3 px-4'} py-3.5 rounded-xl transition-all duration-300 group ${isActive(item.path)
                            ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30'
                            : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800/50 hover:text-gray-900 dark:hover:text-white'
                            }`}
                        title={collapsed ? item.name : ''}
                    >
                        <item.icon className={`text-xl transition-transform group-hover:scale-110 ${isActive(item.path) ? 'text-white' : 'text-gray-400 dark:text-gray-500 group-hover:text-blue-500'}`} />
                        {!collapsed && <span className="font-medium whitespace-nowrap overflow-hidden">{item.name}</span>}
                        {!collapsed && isActive(item.path) && <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></span>}
                    </Link>
                ))}
            </nav>

            <div className={`p-4 mt-auto border-t border-gray-100 dark:border-zinc-800`}>
                <button
                    onClick={() => { logout(); router.push('/login'); }}
                    className={`flex items-center ${collapsed ? 'justify-center' : 'gap-3 px-4'} py-3 w-full text-gray-600 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors font-medium text-sm group rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10`}
                    title="Logout"
                >
                    <div className={`${collapsed ? '' : 'p-0'} transition-colors`}>
                        <FiLogOut className="text-xl" />
                    </div>
                    {!collapsed && <span className="whitespace-nowrap overflow-hidden">Sign Out</span>}
                </button>
            </div>
        </aside>
    );
}
