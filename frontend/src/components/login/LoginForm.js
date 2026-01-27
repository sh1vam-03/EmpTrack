import { useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../context/AuthContext';

export default function LoginForm() {
    const [employeeId, setEmployeeId] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Basic validation
        if (!employeeId.trim() || !password.trim()) {
            setError('Please enter Employee ID and Password');
            return;
        }

        const result = await login(employeeId, password);

        if (result.success) {
            router.push('/dashboard'); // Changed redirection to dashboard if it exists, or maybe main page? 
            // The original forwarded to /employees or specific page. 
            // I'll create a dedicated dashboard page or route.
            // For now let's assume /employees for Admin/HR and /attendance for Employee?
            // Actually, let's redirect to a unified /dashboard page that I will create.
        } else {
            setError(result.message);
        }
    };

    return (
        <div className="bg-zinc-50 dark:bg-black w-full max-w-md">
            <div className="flex flex-col justify-center h-full p-8 md:p-1">
                <h1 className="text-4xl font-bold mb-4 mt-4 text-zinc-900 dark:text-zinc-100">Login</h1>
                <span className="text-zinc-700 dark:text-zinc-300 mb-8">Please enter your credentials to login</span>

                <form onSubmit={handleLogin} className="flex flex-col w-full">
                    <input
                        type="text"
                        placeholder="Employee ID (e.g., AD001)"
                        value={employeeId}
                        onChange={(e) => { setEmployeeId(e.target.value); setError(''); }}
                        className="border border-zinc-300 dark:border-zinc-700 rounded-md p-3 mb-4 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value); setError(''); }}
                        className="border border-zinc-300 dark:border-zinc-700 rounded-md p-3 mb-4 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-500 outline-none"
                    />

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition-colors shadow-md">
                        Login
                    </button>

                    {/* Helper for demo purposes */}
                    <div className="mt-6 text-xs text-gray-400 bg-gray-100 dark:bg-zinc-900 p-3 rounded">
                        <p className="font-bold mb-1">Demo Credentials:</p>
                        <p>Admin: AD001 / 123</p>
                        <p>HR: HR001 / 123</p>
                        <p>Employee: EMP001 / 123</p>
                    </div>
                </form>
            </div>
        </div>
    );
}