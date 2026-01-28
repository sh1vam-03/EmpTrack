import PublicLayout from '../components/common/PublicLayout';
import Link from 'next/link';
import { FiUsers, FiAward, FiGlobe, FiHeart, FiZap, FiTarget, FiShield, FiTrendingUp, FiActivity } from 'react-icons/fi';

export default function About() {
    return (
        <PublicLayout>
            {/* Hero */}
            <section className="py-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black border-b border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-20"></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                        </span>
                        Revolutionizing Human Resources
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                        We're on a mission to <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-indigo-500">simplify work.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        EmpTrack was born from a simple idea: HR software doesn't have to be clunky, ugly, or expensive. We're building the operating system for modern, high-performing teams.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 border-b border-white/5 bg-zinc-900/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Active Users", value: "10k+", icon: FiUsers },
                            { label: "Countries Supported", value: "50+", icon: FiGlobe },
                            { label: "Uptime SLA", value: "99.99%", icon: FiActivity },
                            { label: "Data Processed", value: "1PB+", icon: FiZap }
                        ].map((stat, i) => (
                            <div key={i} className="text-center group">
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{stat.value}</div>
                                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest flex items-center justify-center gap-2">
                                    <stat.icon className="hidden md:block" /> {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story / Mission */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Built for the future of work</h2>
                            <p className="text-gray-400 leading-relaxed mb-6 text-lg">
                                Founded in 2024, EmpTrack isn't just another HR tool. We realized that existing solutions were either too complex for small teams or lacking the powerful features needed for scaling enterprises.
                            </p>
                            <p className="text-gray-400 leading-relaxed text-lg">
                                Today, we serve thousands of forward-thinking companies across the globe, helping them track time, automate payroll, and foster a transparent culture without the administrative headache.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2">
                            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-900">
                                <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 z-0"></div>
                                <div className="p-12 relative z-10 grid gap-6">
                                    <div className="flex items-center gap-4 p-4 bg-black/50 backdrop-blur rounded-2xl border border-white/5">
                                        <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400"><FiShield size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Enterprise Security</h4>
                                            <p className="text-sm text-gray-400">SOC 2 Type II Compliant</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-black/50 backdrop-blur rounded-2xl border border-white/5 translate-x-4">
                                        <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400"><FiTrendingUp size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Scale Infinite</h4>
                                            <p className="text-sm text-gray-400">From 10 to 10k employees</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-black/50 backdrop-blur rounded-2xl border border-white/5">
                                        <div className="p-3 bg-green-500/20 rounded-xl text-green-400"><FiAward size={24} /></div>
                                        <div>
                                            <h4 className="font-bold text-white">Award Winning</h4>
                                            <p className="text-sm text-gray-400">#1 HR Software 2025</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-zinc-900/30 border-t border-white/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide every decision we make.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: FiHeart, title: "Customer Obsession", desc: "We don't just build features; we solve problems. Your success is our north star." },
                            { icon: FiZap, title: "Move Fast", desc: "We ship quickly and iterate. Perfection is the enemy of progress." },
                            { icon: FiTarget, title: "Transparency", desc: "We believe in open communication, straight talk, and no hidden fees." }
                        ].map((value, i) => (
                            <div key={i} className="p-10 bg-black rounded-3xl border border-zinc-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/10 transition-all group">
                                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all mb-6">
                                    <value.icon className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{value.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-linear-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to simplify your HR?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 relative z-10">Join thousands of companies that trust EmpTrack to manage their most valuable asset—their people.</p>
                        <div className="relative z-10">
                            <Link href="/signup" className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-xl shadow-white/5 inline-block">
                                Get Start
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
