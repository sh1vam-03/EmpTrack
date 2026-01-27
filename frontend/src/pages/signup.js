import { useState } from 'react';
import { useRouter } from 'next/router';
import api from '../utils/api';
import GradientDivider from '../components/login/GradientDivider'; // Reusing layout maybe? Or dedicated layout.
// Let's create a dedicated simple layout for Signup.

export default function Signup() {
    const [formData, setFormData] = useState({
        orgName: '',
        orgEmail: '',
        adminName: '',
        adminEmail: '',
        password: ''
    });
    const [error, setError] = useState('');
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post('/auth/signup', formData);
            // Auto login or redirect to login? 
            // Usually redirect to login.
            router.push('/login');
        } catch (err) {
            setError(err.response?.data?.message || 'Signup failed');
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center p-4">
            <div className="bg-white dark:bg-zinc-900 w-full max-w-lg p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">Register Organization</h1>

                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Organization Name</label>
                        <input type="text" name="orgName" required onChange={handleChange} className="w-full mt-1 p-2 border rounded dark:bg-black dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Organization Email</label>
                        <input type="email" name="orgEmail" required onChange={handleChange} className="w-full mt-1 p-2 border rounded dark:bg-black dark:border-zinc-700 dark:text-white" />
                    </div>

                    <hr className="my-6 border-gray-200 dark:border-zinc-700" />

                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Admin Name</label>
                        <input type="text" name="adminName" required onChange={handleChange} className="w-full mt-1 p-2 border rounded dark:bg-black dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Admin Email</label>
                        <input type="email" name="adminEmail" required onChange={handleChange} className="w-full mt-1 p-2 border rounded dark:bg-black dark:border-zinc-700 dark:text-white" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
                        <input type="password" name="password" required onChange={handleChange} className="w-full mt-1 p-2 border rounded dark:bg-black dark:border-zinc-700 dark:text-white" />
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition-colors">
                        Sign Up
                    </button>
                </form>
                <div className="mt-4 text-center">
                    <p className="text-gray-600 dark:text-gray-400">Already have an account? <span onClick={() => router.push('/login')} className="text-blue-500 cursor-pointer hover:underline">Login</span></p>
                </div>
            </div>
        </div>
    );
}
