import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from 'next/link';
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../components/auth/AuthLayout";
import AuthInput from "../components/auth/AuthInput";
import { FiMail, FiLock } from 'react-icons/fi';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const { login, currentUser } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (currentUser) {
            router.push("/dashboard");
        }
    }, [currentUser, router]);

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
        setError(""); // Clear error on type
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const result = await login(credentials.email, credentials.password);
        if (!result.success) {
            setError(result.message || "Invalid email or password. Please try again.");
        }
    };

    return (
        <AuthLayout
            title="Welcome back"
            subtitle="Please enter your details to sign in."
        >
            <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                    <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-900 text-red-600 dark:text-red-400 text-sm font-medium text-center">
                        {error}
                    </div>
                )}

                <AuthInput
                    label="Email Address"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={credentials.email}
                    onChange={handleChange}
                    icon={FiMail}
                    required
                />

                <div className="space-y-1">
                    <AuthInput
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={credentials.password}
                        onChange={handleChange}
                        icon={FiLock}
                        required
                    />
                    <div className="flex justify-end">
                        <Link href="/forgot-password" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                            Forgot password?
                        </Link>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-blue-500/30 transform hover:scale-[1.02] transition-all flex items-center justify-center"
                >
                    Sign in
                </button>
            </form>

            <div className="mt-8 text-center text-sm text-gray-500 dark:text-gray-400">
                Don't have an account?{" "}
                <Link href="/signup" className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    Create an organization
                </Link>
            </div>
        </AuthLayout>
    );
}
