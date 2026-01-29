import Link from 'next/link';
import { useRouter } from 'next/router';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';
import Logo from './Logo';

export default function PublicLayout({ children }) {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mobileExpanded, setMobileExpanded] = useState({});

    const isActive = (path) => router.pathname === path;

    const navigation = {
        Product: [
            { name: 'Features', path: '/#features' },
            { name: 'Testimonials', path: '/#testimonials' },
            { name: 'Pricing', path: '/#pricing' },
            { name: 'How It Works', path: '/#how-it-works' },
        ],

        Company: [
            { name: 'About Us', path: '/about' },
            { name: 'Contact Us', path: '/contact' },
            { name: 'Community', path: '/community' },
        ],
        'Legal & Support': [
            { name: 'Help Center', path: '/help' },
            { name: 'Security', path: '/security' },
            { name: 'Privacy Policy', path: '/privacy' },
            { name: 'Terms of Service', path: '/terms' },
        ]
    };

    const toggleMobileCategory = (category) => {
        setMobileExpanded(prev => ({ ...prev, [category]: !prev[category] }));
    };

    return (
        <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500 selection:text-white flex flex-col">

            {/* BACKGROUND EFFECTS */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            {/* NAVBAR */}
            <nav className="relative z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 transition-all duration-300">
                <div className="container mx-auto px-6 h-20 flex justify-between items-center">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <Logo whiteText={true} />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8">
                        {Object.entries(navigation).map(([category, links]) => (
                            <div key={category} className="relative group">
                                <button className="flex items-center gap-1 text-sm font-medium text-gray-400 group-hover:text-white transition-colors py-2">
                                    {category}
                                    <FiChevronDown className="group-hover:rotate-180 transition-transform duration-200" />
                                </button>

                                {/* Dropdown */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-zinc-900 border border-white/10 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 overflow-hidden">
                                    <div className="p-2 space-y-1">
                                        {links.map((link) => (
                                            <Link
                                                key={link.path}
                                                href={link.path}
                                                className={`block px-4 py-2 text-sm rounded-lg hover:bg-white/5 transition-colors ${isActive(link.path) ? 'text-blue-400 bg-white/5' : 'text-gray-400 hover:text-white'}`}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link href="/login" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
                            Log in
                        </Link>
                        <Link href="/signup" className="px-5 py-2.5 text-sm font-bold bg-white text-black rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-white/5 hover:shadow-white/10 transform hover:-translate-y-0.5 transition-all duration-200">
                            Sign Up
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-300 hover:text-white transition-colors">
                        {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full min-h-[calc(100vh-5rem)] bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4 animate-fade-in-down overflow-y-auto">
                        {Object.entries(navigation).map(([category, links]) => (
                            <div key={category} className="border-b border-white/5 pb-4 last:border-0">
                                <button
                                    onClick={() => toggleMobileCategory(category)}
                                    className="flex w-full justify-between items-center text-lg font-bold text-white mb-2"
                                >
                                    {category}
                                    <FiChevronDown className={`transition-transform duration-300 ${mobileExpanded[category] ? 'rotate-180' : ''}`} />
                                </button>

                                <div className={`space-y-3 overflow-hidden transition-all duration-300 ${mobileExpanded[category] ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    {links.map((link) => (
                                        <Link
                                            key={link.path}
                                            href={link.path}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={`block text-gray-400 hover:text-white pl-4 ${isActive(link.path) ? 'text-blue-400' : ''}`}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}

                        <div className="mt-8 space-y-4">
                            <Link href="/login" className="block w-full text-center py-3 text-gray-300 border border-white/10 rounded-xl hover:bg-white/5 transition-colors">
                                Log in
                            </Link>
                            <Link href="/signup" className="block w-full text-center py-3 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* MAIN CONTENT */}
            <main className="flex-grow relative z-10 w-full">
                {children}
            </main>

            {/* FOOTER */}
            <footer className="relative z-10 bg-black border-t border-white/5 pt-20 pb-10 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-linear-to-r from-transparent via-blue-500/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent pointer-events-none"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        <div className="col-span-1 md:col-span-1">
                            <Link href="/" className="flex items-center gap-2 mb-6 group">
                                <Logo whiteText={true} />
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs">
                                The all-in-one HRMS solution for modern organizations. Manage time, payroll, and tasks efficiently with enterprise-grade security.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://www.linkedin.com/in/sh1vam~03" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:border-blue-500 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/20"><FiLinkedin size={18} /></a>
                                <a href="https://github.com/sh1vam-03" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:border-white hover:text-black transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-white/10"><FiGithub size={18} /></a>
                                <a href="https://www.instagram.com/sh1vam.03" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:border-pink-500 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-pink-500/20"><FiInstagram size={18} /></a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-8 text-lg">Product</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link href="/#features" className="hover:text-blue-400 transition-colors flex items-center gap-2">Features</Link></li>
                                <li><Link href="/#testimonials" className="hover:text-blue-400 transition-colors flex items-center gap-2">Testimonials</Link></li>
                                <li><Link href="/#pricing" className="hover:text-blue-400 transition-colors flex items-center gap-2">Pricing</Link></li>
                                <li><Link href="/#how-it-works" className="hover:text-blue-400 transition-colors flex items-center gap-2">How It Works</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-8 text-lg">Company</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link href="/about" className="hover:text-blue-400 transition-colors flex items-center gap-2">About Us</Link></li>
                                <li><Link href="/contact" className="hover:text-blue-400 transition-colors flex items-center gap-2">Contact Us</Link></li>
                                <li><Link href="/community" className="hover:text-blue-400 transition-colors flex items-center gap-2">Community</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-8 text-lg">Legal & Support</h4>
                            <ul className="space-y-4 text-sm text-gray-400">
                                <li><Link href="/help" className="hover:text-blue-400 transition-colors flex items-center gap-2">Help Center</Link></li>
                                <li><Link href="/security" className="hover:text-blue-400 transition-colors flex items-center gap-2">Security</Link></li>
                                <li><Link href="/privacy" className="hover:text-blue-400 transition-colors flex items-center gap-2">Privacy Policy</Link></li>
                                <li><Link href="/terms" className="hover:text-blue-400 transition-colors flex items-center gap-2">Terms of Service</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} EmpTrack Inc. All rights reserved. Made with ❤️ by <a href="https://github.com/sh1vam-03" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">sh1vam</a>.
                        </p>
                        <div className="flex gap-8">
                            <span className="flex items-center gap-2 text-xs text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                All Systems Operational
                            </span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
