import { useRouter } from 'next/router';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';

export default function Dashboard() {
    const { currentUser, logout, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!loading && !currentUser) {
            router.push('/');
        }
    }, [currentUser, loading, router]);

    if (loading || !currentUser) return <div className="p-10 text-center">Loading...</div>;

    const cards = [
        {
            title: 'Employees',
            desc: 'Manage employee details',
            role: ['Admin', 'HR'],
            link: '/employees',
            color: 'bg-blue-500'
        },
        {
            title: 'Attendance',
            desc: 'View attendance records',
            role: ['Admin', 'HR', 'Employee'],
            link: '/attendance',
            color: 'bg-green-500'
        },
        {
            title: 'Tasks',
            desc: 'Manage and track tasks',
            role: ['Admin', 'HR', 'Employee'],
            link: '/tasks',
            color: 'bg-purple-500'
        },
        {
            title: 'Payroll',
            desc: 'View payroll reports',
            role: ['Admin', 'HR', 'Employee'],
            link: '/payroll',
            color: 'bg-yellow-500'
        }
    ];

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
                        <p className="text-gray-600 dark:text-gray-400">Welcome, {currentUser.name} ({currentUser.role})</p>
                    </div>
                    <button onClick={logout} className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded">
                        Logout
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.filter(c => c.role.includes(currentUser.role)).map((card, idx) => (
                        <div key={idx}
                            onClick={() => router.push(card.link)}
                            className="bg-white dark:bg-zinc-800 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer overflow-hidden p-6 border-l-4 border-l-blue-500"
                            style={{ borderLeftColor: card.color.replace('bg-', '') }} // Tailwind fix needed ideally but this is placeholder logic
                        >
                            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{card.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400">{card.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
