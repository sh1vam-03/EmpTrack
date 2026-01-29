import Layout from '../components/common/Layout';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { useEffect, useState } from 'react';
import { FiUsers, FiClock, FiCheckSquare, FiDollarSign, FiCalendar, FiArrowRight } from 'react-icons/fi';
import StatsCard from '../components/common/StatsCard';
import api from '../services/api';

export default function Dashboard() {
    const { currentUser, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !currentUser) {
            router.push('/login');
        }
    }, [currentUser, loading, router]);

    if (loading || !currentUser) return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black text-gray-500">Loading...</div>;

    const [stats, setStats] = useState({
        totalEmployees: 0,
        presentToday: 0,
        pendingTasks: 0,
        onLeave: 0
    });
    // const { token } = useAuth(); // Not needed, handled by api interceptor

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const { data } = await api.get('/dashboard/stats');
                setStats(data);
            } catch (error) {
                console.error("Failed to fetch dashboard stats", error);
            }
        };

        if (currentUser) {
            fetchStats();
        }
    }, [currentUser]);

    const cards = [
        {
            title: 'Total Employees',
            value: stats.totalEmployees,
            trend: 0, // Trends require historical data, leaving as 0 or static for now
            color: 'blue',
            icon: FiUsers,
            link: '/employees',
            role: ['Admin', 'HR']
        },
        {
            title: 'Present Today',
            value: stats.presentToday,
            trend: 0,
            color: 'green',
            icon: FiClock,
            link: '/attendance',
            role: ['Admin', 'HR', 'Employee']
        },
        {
            title: 'Pending Tasks',
            value: stats.pendingTasks,
            trend: 0,
            color: 'purple',
            icon: FiCheckSquare,
            link: '/tasks',
            role: ['Admin', 'HR', 'Employee']
        },
        {
            title: 'On Leave',
            value: stats.onLeave,
            trend: 0,
            color: 'orange',
            icon: FiCalendar,
            link: '/leaves',
            role: ['Admin', 'HR']
        }
    ];

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                    Good {new Date().getHours() < 12 ? 'Morning' : new Date().getHours() < 18 ? 'Afternoon' : 'Evening'}, {currentUser.name.split(' ')[0]} 👋
                </h1>
                <p className="text-gray-500 dark:text-zinc-400">Here's what's happening in your organization today.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {cards.filter(c => c.role.includes(currentUser.role)).map((card, idx) => (
                    <StatsCard
                        key={idx}
                        {...card}
                        onClick={() => router.push(card.link)}
                    />
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Recent Activity / Quick Actions Section */}
                <div className="lg:col-span-2 bg-white dark:bg-zinc-900 rounded-2xl border border-gray-100 dark:border-zinc-800 p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Quick Actions</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {currentUser.role === 'Admin' && (
                            <button onClick={() => router.push('/employees')} className="p-4 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-blue-500/50 hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-all text-left group">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                    <FiUsers />
                                </div>
                                <h4 className="font-semibold text-gray-900 dark:text-white">Add New Employee</h4>
                                <p className="text-xs text-gray-500 mt-1">Onboard new team members</p>
                            </button>
                        )}
                        <button onClick={() => router.push('/attendance')} className="p-4 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-green-500/50 hover:bg-green-50 dark:hover:bg-green-900/10 transition-all text-left group">
                            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <FiClock />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Mark Attendance</h4>
                            <p className="text-xs text-gray-500 mt-1">Log your daily work hours</p>
                        </button>
                        <button onClick={() => router.push('/tasks')} className="p-4 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-purple-500/50 hover:bg-purple-50 dark:hover:bg-purple-900/10 transition-all text-left group">
                            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <FiCheckSquare />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">View My Tasks</h4>
                            <p className="text-xs text-gray-500 mt-1">Check pending assignments</p>
                        </button>
                        <button onClick={() => router.push('/leaves')} className="p-4 rounded-xl border border-gray-100 dark:border-zinc-800 hover:border-orange-500/50 hover:bg-orange-50 dark:hover:bg-orange-900/10 transition-all text-left group">
                            <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                <FiCalendar />
                            </div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Apply for Leave</h4>
                            <p className="text-xs text-gray-500 mt-1">Request time off</p>
                        </button>
                    </div>
                </div>

                {/* Banner / Important Notice */}
                <div className="bg-linear-to-br from-indigo-600 to-violet-700 rounded-2xl p-6 text-white shadow-lg relative overflow-hidden flex flex-col justify-between">
                    <div className="relative z-10">
                        <h3 className="text-xl font-bold mb-2">Premium Features</h3>
                        <p className="text-indigo-100 text-sm mb-6">Upgrade to unlock advanced analytics and automated payroll processing.</p>

                        <button className="bg-white text-indigo-600 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-indigo-50 transition-colors inline-flex items-center gap-2">
                            Explore Plans <FiArrowRight />
                        </button>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500 opacity-20 rounded-full blur-2xl -ml-5 -mb-5"></div>
                </div>
            </div>
        </Layout>
    );
}
