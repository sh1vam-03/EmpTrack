import Link from 'next/link';
import Logo from '../common/Logo';

export default function AuthLayout({ children, title, subtitle }) {
    return (
        <div className="min-h-screen flex bg-white dark:bg-black font-sans selection:bg-blue-500 selection:text-white">
            {/* LEFT: Branding / Visuals */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-black text-white items-center justify-center p-12">
                {/* Animated Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] left-[-20%] w-[80%] h-[80%] bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-[-20%] right-[-20%] w-[80%] h-[80%] bg-purple-600/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                    <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-indigo-500/20 rounded-full blur-[100px] animate-pulse delay-500"></div>
                </div>

                <div className="relative z-10 max-w-lg">
                    <Link href="/" className="flex items-center gap-3 mb-8 group hover:opacity-80 transition-opacity">
                        <Logo whiteText={true} iconSize="w-10 h-10" textSize="text-2xl" />
                    </Link>

                    <h1 className="text-5xl font-bold mb-6 leading-tight">
                        Manage your team with <span className="text-blue-400">confidence</span>.
                    </h1>
                    <p className="text-lg text-gray-400 leading-relaxed mb-8">
                        Join thousands of forward-thinking companies that trust EmpTrack for their HR, Attendance, and Task management needs.
                    </p>

                    <div className="flex gap-4">
                        <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-1">10k+</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Active Users</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                            <h3 className="text-2xl font-bold text-white mb-1">99.9%</h3>
                            <p className="text-xs text-gray-400 uppercase tracking-wider">Uptime</p>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-8 left-12 text-xs text-gray-500">
                    © 2024 EmpTrack Inc.
                </div>
            </div>

            {/* RIGHT: Form Content */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-8 md:p-12 lg:p-24 bg-white dark:bg-black">
                <div className="w-full max-w-md">
                    {/* Mobile Logo */}
                    <Link href="/" className="lg:hidden flex items-center gap-2 mb-8 justify-center hover:opacity-80 transition-opacity">
                        <Logo />
                    </Link>

                    <div className="mb-10 text-center lg:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
                        <p className="text-gray-500 dark:text-gray-400">{subtitle}</p>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
}
