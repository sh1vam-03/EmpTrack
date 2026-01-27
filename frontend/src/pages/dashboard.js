import Layout from '../components/common/Layout';
import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { FiUsers, FiClock, FiCheckSquare, FiDollarSign } from 'react-icons/fi';

export default function Dashboard() {
    const { currentUser, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !currentUser) {
            router.push('/login');
        }
    }, [currentUser, loading, router]);

    if (loading || !currentUser) return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black text-gray-500">Loading...</div>;

    const cards = [
        {
            title: 'Employees',
            desc: 'Manage your workforce',
            role: ['Admin', 'HR'],
            link: '/employees',
            icon: FiUsers,
            color: 'from-blue-500 to-blue-600'
        },
        {
            title: 'Attendance',
            desc: 'Track daily logs',
            role: ['Admin', 'HR', 'Employee'],
            link: '/attendance',
            icon: FiClock,
            color: 'from-green-500 to-emerald-600'
        },
        {
            title: 'Tasks',
            desc: 'Assignments & Progress',
            role: ['Admin', 'HR', 'Employee'],
            link: '/tasks',
            icon: FiCheckSquare,
            color: 'from-purple-500 to-indigo-600'
        },
        {
            title: 'Payroll',
            desc: 'Salary & Reports',
            role: ['Admin', 'HR', 'Employee'],
            link: '/payroll',
            icon: FiDollarSign,
            color: 'from-amber-500 to-orange-600'
        }
    ];

    return (
        <Layout>
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Dashboard</h1>
                <p className="text-gray-500 dark:text-zinc-400">Welcome back, {currentUser.name}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {cards.filter(c => c.role.includes(currentUser.role)).map((card, idx) => (
                    <div key={idx}
                        onClick={() => router.push(card.link)}
                        className="group relative bg-white dark:bg-zinc-900 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border border-gray-100 dark:border-zinc-800"
                    >
                        <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${card.color}`} />
                        <div className="p-6">
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                                <card.icon className="text-2xl" />
                            </div>
                            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{card.title}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{card.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Quick Stats or Welcome Banner could go here */}
            <div className="mt-10 p-8 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-xl relative overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-2">Have a productive day! {currentUser.role === 'Admin' ? '🚀' : '✨'}</h2>
                    <p className="opacity-90 max-w-lg">
                        {currentUser.role === 'Admin'
                            ? 'Manage your organization efficiently. Check the latest reports below.'
                            : 'Track your tasks and attendance to unlock your full potential.'}
                    </p>
                </div>
                {/* Decorative circles */}
                <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
                <div className="absolute right-20 -top-20 w-48 h-48 bg-purple-500 opacity-20 rounded-full blur-2xl"></div>
            </div>
        </Layout>
    );
}
