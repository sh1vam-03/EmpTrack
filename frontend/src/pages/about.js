import PublicLayout from '../components/common/PublicLayout';
import { FiUsers, FiAward, FiGlobe } from 'react-icons/fi';

export default function About() {
    return (
        <PublicLayout>
            <section className="py-20 bg-zinc-900/10 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">We're on a mission to <br /><span className="text-blue-500">simplify work.</span></h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">EmpTrack was born from a simple idea: HR software doesn't have to be clunky, ugly, or expensive.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <p className="text-gray-400 leading-relaxed mb-6">
                                Founded in 2024, EmpTrack started as a small internal tool for a remote dev shop. We realized that existing solutions were either too complex for small teams or lacked the features needed for scaling enterprises.
                            </p>
                            <p className="text-gray-400 leading-relaxed">
                                Today, we serve thousands of teams across the globe, helping them track time, manage payroll, and stay productive without the administrative headache.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                                <FiUsers className="text-3xl text-blue-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-1">10k+</h3>
                                <p className="text-sm text-gray-500">Users</p>
                            </div>
                            <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800">
                                <FiGlobe className="text-3xl text-purple-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-1">50+</h3>
                                <p className="text-sm text-gray-500">Countries</p>
                            </div>
                            <div className="p-6 bg-zinc-900 rounded-2xl border border-zinc-800 col-span-2">
                                <FiAward className="text-3xl text-yellow-500 mb-4" />
                                <h3 className="text-2xl font-bold mb-1">99.99%</h3>
                                <p className="text-sm text-gray-500">Uptime SLA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
