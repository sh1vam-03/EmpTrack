import { FiBell, FiCheck, FiInfo, FiAlertCircle, FiCheckCircle } from 'react-icons/fi';
import { useNotifications } from '../../context/NotificationContext';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

export default function NotificationBell() {
    const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [dropdownRef]);

    const getIcon = (type) => {
        switch (type) {
            case 'success': return <FiCheckCircle className="text-green-500" />;
            case 'error': return <FiAlertCircle className="text-red-500" />;
            case 'warning': return <FiAlertCircle className="text-orange-500" />;
            default: return <FiInfo className="text-blue-500" />;
        }
    };

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-500 dark:text-gray-400 transition-colors"
            >
                <FiBell size={20} />
                {unreadCount > 0 && (
                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-zinc-900"></span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-xl shadow-xl z-50 overflow-hidden">
                    <div className="p-4 border-b border-gray-100 dark:border-zinc-800 flex justify-between items-center bg-gray-50/50 dark:bg-zinc-900/50 backdrop-blur-sm">
                        <h3 className="font-semibold text-gray-900 dark:text-white">Notifications</h3>
                        {unreadCount > 0 && (
                            <button
                                onClick={markAllAsRead}
                                className="text-xs text-blue-500 hover:text-blue-600 font-medium flex items-center gap-1"
                            >
                                Mark all read <FiCheck size={12} />
                            </button>
                        )}
                    </div>
                    <div className="max-h-96 overflow-y-auto">
                        {notifications.length === 0 ? (
                            <div className="p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
                                <FiBell className="mx-auto mb-2 opacity-20" size={32} />
                                No notifications yet
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-100 dark:divide-zinc-800">
                                {notifications.map((notification) => (
                                    <div
                                        key={notification._id}
                                        className={`p-4 hover:bg-gray-50 dark:hover:bg-zinc-800/50 transition-colors flex gap-3 ${!notification.read ? 'bg-blue-50/30 dark:bg-blue-900/10' : ''}`}
                                        onClick={() => !notification.read && markAsRead(notification._id)}
                                    >
                                        <div className="mt-1 shrink-0">
                                            {getIcon(notification.type)}
                                        </div>
                                        <div className="flex-1">
                                            <p className={`text-sm ${!notification.read ? 'font-semibold text-gray-900 dark:text-white' : 'text-gray-600 dark:text-gray-400'}`}>
                                                {notification.message}
                                            </p>
                                            <p className="text-xs text-gray-400 mt-1">
                                                {new Date(notification.createdAt).toLocaleDateString()}
                                            </p>
                                        </div>
                                        {!notification.read && (
                                            <div className="w-2 h-2 bg-blue-500 rounded-full shrink-0 mt-2"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
