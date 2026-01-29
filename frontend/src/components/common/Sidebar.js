import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiHome, FiUsers, FiClock, FiCheckSquare, FiDollarSign, FiLogOut, FiCalendar, FiX } from 'react-icons/fi';
import { useAuth } from '../../context/AuthContext';
import Logo from './Logo';

export default function Sidebar({ isOpen, onClose }) {
    const router = useRouter();
    const { logout, currentUser } = useAuth();
    const [collapsed, setCollapsed] = useState(false);

    // Close sidebar on route change (for mobile)
    useEffect(() => {
        if (isOpen && onClose) onClose();
    }, [router.pathname]);

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
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
                onClick={onClose}
            />

            <aside className={`
                fixed md:sticky top-0 left-0 z-50 h-screen bg-white dark:bg-zinc-900 border-r border-gray-200 dark:border-zinc-800
                flex flex-col transition-all duration-300 ease-in-out
                ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
                ${collapsed ? 'md:w-20' : 'md:w-72'}
                w-72
            `}>
                {/* Logo Section */}
                <div
                    className={`h-20 flex items-center ${collapsed ? 'md:justify-center' : 'justify-between px-6'} border-b border-gray-100 dark:border-zinc-800 transition-all`}
                >
                    <div
                        className={`flex items-center gap-3 cursor-pointer group`}
                        onClick={() => setCollapsed(!collapsed)}
                        title="Toggle Sidebar"
                    >
                        <Logo
                            showText={!collapsed || isOpen}
                            iconSize="w-9 h-9"
                        />
                    </div>

                    {/* Mobile Close Button */}
                    <button onClick={onClose} className="md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                        <FiX size={20} />
                    </button>
                </div>

                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto px-4 py-6 space-y-1.5 scrollbar-hide">
                    {(!collapsed) && <p className="px-2 text-xs font-bold text-gray-400 dark:text-zinc-600 uppercase tracking-wider mb-2 hidden md:block">Main Menu</p>}

                    {menuItems.filter(item => item.roles.includes(currentUser?.role)).map((item) => (
                        <Link
                            key={item.path}
                            href={item.path}
                            className={`flex items-center ${collapsed ? 'md:justify-center md:px-0' : 'gap-3 px-4'} py-3.5 rounded-xl transition-all duration-300 group ${isActive(item.path)
                                ? 'bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 font-semibold'
                                : 'text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-zinc-800 hover:text-gray-900 dark:hover:text-white'
                                }`}
                            title={collapsed ? item.name : ''}
                        >
                            <item.icon className={`text-[1.2rem] shrink-0 transition-transform group-hover:scale-110 ${isActive(item.path) ? 'text-indigo-600 dark:text-indigo-400' : 'text-gray-400 dark:text-zinc-500'}`} />

                            <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? 'md:w-0 md:opacity-0' : 'w-auto opacity-100'}`}>
                                {item.name}
                            </span>

                            {(!collapsed && isActive(item.path)) && (
                                <div className="ml-auto w-1.5 h-1.5 rounded-full bg-indigo-600 dark:bg-indigo-400"></div>
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Footer / Logout */}
                <div className="p-4 border-t border-gray-100 dark:border-zinc-800">
                    <button
                        onClick={() => { logout(); router.push('/login'); }}
                        className={`flex items-center ${collapsed ? 'md:justify-center' : 'gap-3 px-4'} py-3 w-full text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-all rounded-xl hover:bg-red-50 dark:hover:bg-red-900/10 group font-medium text-sm`}
                        title="Sign Out"
                    >
                        <FiLogOut className="text-[1.2rem] shrink-0 group-hover:scale-110 transition-transform" />
                        <span className={`whitespace-nowrap overflow-hidden transition-all duration-300 ${collapsed ? 'md:w-0 md:opacity-0' : 'w-auto opacity-100'}`}>
                            Sign Out
                        </span>
                    </button>
                    {!collapsed && (
                        <div className="mt-4 text-center hidden md:block">
                            <p className="text-[10px] text-gray-400">© 2026 EmpTrack Inc.</p>
                        </div>
                    )}
                </div>
            </aside>
        </>
    );
}
