import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import api from '../utils/api';
import AuthLayout from '../components/auth/AuthLayout';
import AuthInput from '../components/auth/AuthInput';
import { FiUser, FiMail, FiBriefcase, FiLock, FiShield } from 'react-icons/fi';

export default function Signup() {
    const [formData, setFormData] = useState({
        orgName: '',
        adminName: '',
        adminEmail: '',
        password: ''
    });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            await api.post('/auth/signup', formData);
            // Redirect to login on success
            router.push('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AuthLayout
            title="Start your free trial"
            subtitle="Create an organization to start managing your team."
        >
            <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 text-red-600 dark:text-red-400 text-sm font-medium text-center">
                        {error}
                    </div>
                )}

                {/* Organization Details */}
                <div className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-zinc-800 pb-2 mb-3">Organization Info</h3>
                    <div className="grid grid-cols-1">
                        <AuthInput
                            label="Organization Name"
                            type="text"
                            name="orgName"
                            placeholder="Acme Corp"
                            value={formData.orgName}
                            onChange={handleChange}
                            icon={FiBriefcase}
                            required
                        />
                    </div>
                </div>

                {/* Admin Details */}
                <div className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest border-b border-gray-100 dark:border-zinc-800 pb-2 mb-3">Admin Account</h3>
                    <div className="gap-4 grid grid-cols-1">
                        <AuthInput
                            label="Full Name"
                            type="text"
                            name="adminName"
                            placeholder="John Doe"
                            value={formData.adminName}
                            onChange={handleChange}
                            icon={FiUser}
                            required
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <AuthInput
                                label="Work Email"
                                type="email"
                                name="adminEmail"
                                placeholder="john@acme.com"
                                value={formData.adminEmail}
                                onChange={handleChange}
                                icon={FiShield}
                                required
                            />
                            <AuthInput
                                label="Password"
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleChange}
                                icon={FiLock}
                                required
                            />
                        </div>
                    </div>
                </div>

                <div className="pt-2">
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/30 transform hover:scale-[1.02] transition-all flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                        {loading ? 'Creating Account...' : 'Create Organization'}
                    </button>
                    <p className="text-xs text-center text-gray-400 mt-4">
                        By signing up, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                Already have an account?{" "}
                <Link href="/login" className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Sign in
                </Link>
            </div>
        </AuthLayout>
    );
}
