import { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/router';
import api from '../services/api';
import { FiCalendar, FiCheckCircle, FiXCircle, FiClock, FiPlus } from 'react-icons/fi';

export default function Leaves() {
    const { currentUser, loading: authLoading } = useAuth();
    const router = useRouter();
    const [leaves, setLeaves] = useState([]);
    const [activeTab, setActiveTab] = useState('My Leaves');
    const [isLoading, setIsLoading] = useState(true);

    // New Leave Form State
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        type: 'Sick Leave',
        reason: '',
        startDate: '',
        endDate: ''
    });

    useEffect(() => {
        if (!authLoading && !currentUser) {
            router.push('/login');
        } else if (currentUser) {
            fetchLeaves();
        }
    }, [currentUser, router, authLoading]);

    const fetchLeaves = async () => {
        try {
            setIsLoading(true);
            const { data } = await api.get('/leaves');
            setLeaves(data);
        } catch (error) {
            console.error("Failed to fetch leaves", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleApply = async (e) => {
        e.preventDefault();
        try {
            await api.post('/leaves', formData);
            setShowForm(false);
            fetchLeaves();
            setFormData({ type: 'Sick Leave', reason: '', startDate: '', endDate: '' });
        } catch (error) {
            alert(error.response?.data?.message || 'Failed to apply');
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            await api.put(`/leaves/${id}`, { status });
            fetchLeaves();
        } catch (error) {
            alert('Failed to update status');
        }
    };

    if (authLoading || !currentUser) return null;

    const isAdminOrHR = currentUser.role === 'Admin' || currentUser.role === 'HR';

    // Filter logic
    const myLeaves = leaves.filter(l => l.employee._id === currentUser.id || l.employee === currentUser.id);
    const pendingLeaves = isAdminOrHR ? leaves.filter(l => l.status === 'Pending') : [];

    // Helper for badge color
    const getStatusColor = (status) => {
        switch (status) {
            case 'Approved': return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400';
            case 'Rejected': return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400';
            default: return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400';
        }
    };

    return (
        <Layout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Leave Management</h1>
                    <p className="text-gray-500 dark:text-zinc-400">Track time off and manage huge requests.</p>
                </div>

                <button
                    onClick={() => setShowForm(!showForm)}
                    className="flex items-center gap-2 px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-xl font-bold shadow-lg shadow-orange-500/30 transition-all text-sm"
                >
                    <FiPlus className="text-lg" />
                    Apply for Leave
                </button>
            </div>

            {/* Application Form */}
            {showForm && (
                <div className="mb-8 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 animate-fade-in-down">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">New Leave Request</h3>
                    <form onSubmit={handleApply} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Leave Type</label>
                            <select
                                className="w-full p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                                value={formData.type}
                                onChange={e => setFormData({ ...formData, type: e.target.value })}
                            >
                                <option>Sick Leave</option>
                                <option>Casual Leave</option>
                                <option>Earned Leave</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Reason</label>
                            <input
                                type="text"
                                required
                                className="w-full p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                                value={formData.reason}
                                onChange={e => setFormData({ ...formData, reason: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Start Date</label>
                            <input
                                type="date"
                                required
                                className="w-full p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                                value={formData.startDate}
                                onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">End Date</label>
                            <input
                                type="date"
                                required
                                className="w-full p-3 bg-gray-50 dark:bg-zinc-800 rounded-xl border border-gray-200 dark:border-zinc-700 outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                                value={formData.endDate}
                                onChange={e => setFormData({ ...formData, endDate: e.target.value })}
                            />
                        </div>
                        <div className="md:col-span-2 flex justify-end gap-3 mt-2">
                            <button
                                type="button"
                                onClick={() => setShowForm(false)}
                                className="px-4 py-2 text-gray-500 hover:text-gray-700 font-medium"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-bold"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Tabs (HR only) */}
            {isAdminOrHR && (
                <div className="flex gap-6 border-b border-gray-100 dark:border-zinc-800 mb-6">
                    {['My Leaves', 'Approvals'].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`pb-3 font-bold text-sm transition-all relative ${activeTab === tab
                                    ? 'text-orange-600 dark:text-orange-400'
                                    : 'text-gray-400 hover:text-gray-600'
                                }`}
                        >
                            {tab}
                            {activeTab === tab && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-600 rounded-t-full"></span>}
                            {tab === 'Approvals' && pendingLeaves.length > 0 && (
                                <span className="ml-2 px-1.5 py-0.5 bg-red-500 text-white text-[10px] rounded-full">
                                    {pendingLeaves.length}
                                </span>
                            )}
                        </button>
                    ))}
                </div>
            )}

            {/* List View */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-100 dark:border-zinc-800 overflow-hidden">
                {isLoading ? (
                    <div className="p-8 text-center text-gray-500">Loading leaves...</div>
                ) : (
                    <table className="w-full text-left text-sm">
                        <thead className="bg-gray-50/50 dark:bg-zinc-800/50 text-gray-500 dark:text-zinc-400 text-xs uppercase font-bold tracking-wider border-b border-gray-100 dark:border-zinc-800">
                            <tr>
                                <th className="p-5 pl-6">Type</th>
                                <th className="p-5">Dates</th>
                                <th className="p-5">Reason</th>
                                <th className="p-5">Status</th>
                                {activeTab === 'Approvals' && <th className="p-5 text-right">Actions</th>}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50 dark:divide-zinc-800/50">
                            {(activeTab === 'My Leaves' ? myLeaves : pendingLeaves).map(leave => (
                                <tr key={leave._id} className="hover:bg-orange-50/10 dark:hover:bg-zinc-800/30 transition-colors">
                                    <td className="p-5 pl-6 font-medium text-gray-900 dark:text-white">
                                        {leave.type}
                                        {activeTab === 'Approvals' && (
                                            <div className="text-xs text-gray-400 font-normal mt-1">
                                                by {leave.employee?.name || 'Unknown'}
                                            </div>
                                        )}
                                    </td>
                                    <td className="p-5 text-gray-600 dark:text-zinc-300">
                                        {new Date(leave.startDate).toLocaleDateString()} - {new Date(leave.endDate).toLocaleDateString()}
                                    </td>
                                    <td className="p-5 text-gray-500 dark:text-zinc-400 max-w-xs truncate" title={leave.reason}>
                                        {leave.reason}
                                    </td>
                                    <td className="p-5">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(leave.status)}`}>
                                            {leave.status}
                                        </span>
                                    </td>
                                    {activeTab === 'Approvals' && (
                                        <td className="p-5 text-right flex justify-end gap-2">
                                            <button
                                                onClick={() => handleStatusUpdate(leave._id, 'Approved')}
                                                className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors"
                                                title="Approve"
                                            >
                                                <FiCheckCircle className="text-lg" />
                                            </button>
                                            <button
                                                onClick={() => handleStatusUpdate(leave._id, 'Rejected')}
                                                className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors"
                                                title="Reject"
                                            >
                                                <FiXCircle className="text-lg" />
                                            </button>
                                        </td>
                                    )}
                                </tr>
                            ))}
                            {(activeTab === 'My Leaves' ? myLeaves : pendingLeaves).length === 0 && (
                                <tr>
                                    <td colSpan="5" className="p-12 text-center text-gray-400">
                                        No leave records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                )}
            </div>
        </Layout>
    );
}
