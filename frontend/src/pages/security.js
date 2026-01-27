import PublicLayout from '../components/common/PublicLayout';
import { FiShield, FiLock, FiServer, FiCheckCircle } from 'react-icons/fi';

export default function Security() {
    return (
        <PublicLayout>
            <section className="py-20 bg-zinc-900/10 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Bank-grade Security</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Your data is our most valuable asset. We protect it with enterprise-level encryption and strict compliance.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
                            <FiShield className="text-4xl text-blue-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">SOC 2 Compliant</h3>
                            <p className="text-gray-400">Our systems and processes are audited regularly to ensure we meet the highest standards of security and availability.</p>
                        </div>
                        <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
                            <FiLock className="text-4xl text-green-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Encryption at Rest & Transit</h3>
                            <p className="text-gray-400">All data is encrypted using AES-256 at rest and TLS 1.3 in transit. Your information is safe from prying eyes.</p>
                        </div>
                        <div className="p-8 bg-zinc-900 rounded-2xl border border-zinc-800">
                            <FiServer className="text-4xl text-purple-500 mb-6" />
                            <h3 className="text-2xl font-bold mb-4">Isolated Infrastructure</h3>
                            <p className="text-gray-400">Customer data is logically isolated. We use distinct databases and strict access controls to prevent data leakage.</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Continuous Monitoring</h2>
                            <p className="text-gray-400 mb-6">
                                We employ automated threat detection systems that monitor our infrastructure 24/7. Any suspicious activity is immediately flagged and investigated by our dedicated security team.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-300">
                                    <FiCheckCircle className="text-blue-500" /> Regular Penetration Testing
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <FiCheckCircle className="text-blue-500" /> Annual Security Audits
                                </li>
                                <li className="flex items-center gap-3 text-gray-300">
                                    <FiCheckCircle className="text-blue-500" /> Bug Bounty Program
                                </li>
                            </ul>
                        </div>
                        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-black rounded-xl border border-zinc-800">
                                    <span className="font-mono text-green-500 text-sm">System Status</span>
                                    <span className="px-2 py-1 bg-green-900/30 text-green-400 text-xs rounded uppercase font-bold">Operational</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black rounded-xl border border-zinc-800">
                                    <span className="font-mono text-green-500 text-sm">Last Audit</span>
                                    <span className="text-gray-400 text-xs">Jan 15, 2026</span>
                                </div>
                                <div className="flex items-center justify-between p-4 bg-black rounded-xl border border-zinc-800">
                                    <span className="font-mono text-green-500 text-sm">Uptime (30 days)</span>
                                    <span className="text-gray-400 text-xs">99.99%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
