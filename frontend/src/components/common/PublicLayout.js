import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu, FiX, FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';
import { useState } from 'react';

export default function PublicLayout({ children }) {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isActive = (path) => router.pathname === path;

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/#pricing' },
        { name: 'Help Center', path: '/help' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white flex flex-col">

            {/* BACKGROUND EFFECTS */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            {/* NAVBAR */}
            <nav className="relative z-50 border-b border-white/5 bg-black/50 backdrop-blur-lg sticky top-0">
                <div className="container mx-auto px-6 h-20 flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                            <span className="text-white font-bold text-lg">E</span>
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-200 to-white">EmpTrack</span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-white' : 'text-gray-400 hover:text-white'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Log in
                        </Link>
                        <Link href="/signup" className="px-5 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-white/5">
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-white">
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                href={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`text-lg font-medium ${isActive(link.path) ? 'text-blue-400' : 'text-gray-400'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <hr className="border-white/10 my-2" />
                        <Link href="/login" className="text-center py-3 text-gray-300 border border-white/10 rounded-xl">
                            Log in
                        </Link>
                        <Link href="/signup" className="text-center py-3 bg-blue-600 text-white rounded-xl font-bold">
                            Get Started
                        </Link>
                    </div>
                )}
            </nav>

            {/* MAIN CONTENT */}
            <main className="flex-grow relative z-10 w-full">
                {children}
            </main>

            {/* FOOTER */}
            <footer className="relative z-10 bg-zinc-900 border-t border-white/5 pt-16 pb-8">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                        <div className="col-span-1 md:col-span-1">
                            <Link href="/" className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 bg-linear-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-lg">E</span>
                                </div>
                                <span className="text-xl font-bold text-white">EmpTrack</span>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                The all-in-one HRMS solution for modern organizations. Manage time, payroll, and tasks efficiently.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"><FiTwitter size={14} /></a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"><FiLinkedin size={14} /></a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"><FiGithub size={14} /></a>
                                <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all"><FiInstagram size={14} /></a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Product</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/#features" className="hover:text-blue-400 transition-colors">Features</Link></li>
                                <li><Link href="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
                                <li><Link href="/changelog" className="hover:text-blue-400 transition-colors">Changelog</Link></li>
                                <li><Link href="/roadmap" className="hover:text-blue-400 transition-colors">Roadmap</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Company</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
                                <li><Link href="/careers" className="hover:text-blue-400 transition-colors">Careers</Link></li>
                                <li><Link href="/blog" className="hover:text-blue-400 transition-colors">Blog</Link></li>
                                <li><Link href="/contact" className="hover:text-blue-400 transition-colors">Contact</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6">Legal & Support</h4>
                            <ul className="space-y-3 text-sm text-gray-400">
                                <li><Link href="/help" className="hover:text-blue-400 transition-colors">Help Center</Link></li>
                                <li><Link href="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link></li>
                                <li><Link href="/security" className="hover:text-blue-400 transition-colors">Security</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-xs text-gray-500">
                            © {new Date().getFullYear()} EmpTrack Inc. All rights reserved.
                        </p>
                        <div className="flex gap-8">
                            <span className="flex items-center gap-2 text-xs text-green-500">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                All Systems Operational
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
