import PublicLayout from '../components/common/PublicLayout';
import { FiShield, FiLock, FiServer, FiCheckCircle, FiEye, FiGlobe, FiActivity, FiCpu } from 'react-icons/fi';
import Link from 'next/link';

export default function Security() {
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
                        Bank-Grade Security
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                        Your trust is our <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-indigo-500">highest priority.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We use industry-leading security measures to keep your data safe, ensuring valid access and protecting against threats 24/7.
                    </p>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 border-b border-white/5 bg-zinc-900/10">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "Uptime SLA", value: "99.99%", icon: FiActivity },
                            { label: "Data Encryption", value: "AES-256", icon: FiLock },
                            { label: "Compliance", value: "SOC 2", icon: FiShield },
                            { label: "Monitoring", value: "24/7", icon: FiEye }
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

            {/* Features (Matching About Us Values Style) */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Uncompromising Security</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">We leave nothing to chance when it comes to protecting your organization.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: FiLock, title: "Data Encryption", desc: "All data is encrypted at rest using AES-256 standard and in transit via TLS 1.3 protocols." },
                            { icon: FiServer, title: "Isolated Infrastructure", desc: "Your data lives in dedicated, logically isolated databases to prevent any cross-tenant leakages." },
                            { icon: FiGlobe, title: "Global Resilience", desc: "Data is replicated across multiple availability zones and regions for 99.99% guaranteed uptime." },
                            { icon: FiEye, title: "Continuous Monitoring", desc: "Our security team utilizes automated threat detection systems to monitor infrastructure 24/7." },
                            { icon: FiShield, title: "Access Control", desc: "Role-based access control (RBAC) and mandatory 2FA ensure only authorized personnel access data." },
                            { icon: FiCpu, title: "Vulnerability Scanning", desc: "Automated daily scans and quarterly penetration testing by independent security firms." }
                        ].map((item, i) => (
                            <div key={i} className="p-10 bg-black rounded-3xl border border-zinc-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/10 transition-all group">
                                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all mb-6">
                                    <item.icon className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bug Bounty */}
            <section className="py-24 bg-zinc-900/30 border-t border-white/5">
                <div className="container mx-auto px-6 text-center max-w-3xl">
                    <h2 className="text-3xl font-bold mb-6">Responsible Disclosure</h2>
                    <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                        Security is a community effort. If you believe you’ve found a security vulnerability in EmpTrack, please let us know immediately. We offer bounties for valid disclosures.
                    </p>
                    <a href="mailto:security@emptrack.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors text-lg shadow-xl shadow-white/5">
                        <FiMail size={20} /> Report a Vulnerability
                    </a>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24">
                <div className="container mx-auto px-6">
                    <div className="bg-linear-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px]"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]"></div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Ready to get started?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 relative z-10">Join thousands of companies that trust EmpTrack with their security.</p>
                        <div className="relative z-10">
                            <Link href="/signup" className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-xl shadow-white/5 inline-block">
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}

// Helper for icon
function FiMail(props) {
    return <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>;
}
