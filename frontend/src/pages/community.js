import PublicLayout from '../components/common/PublicLayout';
import Link from 'next/link';
import { FiCheckCircle, FiGlobe, FiArrowRight, FiCpu, FiPrinter, FiBriefcase } from 'react-icons/fi';

export default function Community() {
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
                        Ecosystem
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                        Our Community <br />
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-indigo-500">Spotlight.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We love supporting innovative projects built by our friends and developer community. Check out these amazing tools that complement the EmpTrack experience.
                    </p>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Taskey */}
                        <div className="group relative rounded-3xl bg-zinc-900 overflow-hidden border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/20">
                            <div className="absolute inset-0 bg-linear-to-b from-blue-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="p-12 relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center mb-8 shadow-xl">
                                    <FiCpu className="text-4xl text-blue-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">Taskey</h3>
                                <p className="text-blue-400 font-medium mb-6">Personal Growth & Task Management</p>
                                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                                    A personal task management system specially developed for students. Taskey focuses on personal growth and development, helping you stay organized and achieve your academic goals.
                                </p>
                                <ul className="space-y-3 mb-10">
                                    <li className="flex gap-3 text-gray-300"><FiCheckCircle className="text-blue-500 shrink-0 text-xl" /> Student-focused features</li>
                                    <li className="flex gap-3 text-gray-300"><FiCheckCircle className="text-blue-500 shrink-0 text-xl" /> Personal development tracking</li>
                                    <li className="flex gap-3 text-gray-300"><FiCheckCircle className="text-blue-500 shrink-0 text-xl" /> Daily progress insights</li>
                                </ul>
                                <a href="https://taskey-sh1vam-03.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                    Visit Website <FiArrowRight />
                                </a>
                            </div>
                        </div>

                        {/* PrintPortal */}
                        <div className="group relative rounded-3xl bg-zinc-900 overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-900/20">
                            <div className="absolute inset-0 bg-linear-to-b from-purple-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            <div className="p-12 relative z-10">
                                <div className="w-20 h-20 rounded-2xl bg-black border border-zinc-800 flex items-center justify-center mb-8 shadow-xl">
                                    <FiPrinter className="text-4xl text-purple-400" />
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">PrintPortal</h3>
                                <p className="text-purple-400 font-medium mb-6">Enterprise Printing Management System</p>
                                <p className="text-gray-400 leading-relaxed text-lg mb-8">
                                    An innovative solution for managing print resources. PrintPortal helps organizations track usage, reduce waste, and secure their document workflows. A great companion tool for office management.
                                </p>
                                <ul className="space-y-3 mb-10">
                                    <li className="flex gap-3 text-gray-300"><FiCheckCircle className="text-purple-500 shrink-0 text-xl" /> Usage analytics & tracking</li>
                                    <li className="flex gap-3 text-gray-300"><FiCheckCircle className="text-purple-500 shrink-0 text-xl" /> Cost reduction insights</li>
                                    <li className="flex gap-3 text-gray-300"><FiCheckCircle className="text-purple-500 shrink-0 text-xl" /> Secure document release</li>
                                </ul>
                                <a href="https://printportal-sh1vam-03.vercel.app/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                    Visit Website <FiArrowRight />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Become a Partner CTA */}
            <section className="py-24 bg-zinc-900/30 border-y border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <div className="max-w-3xl mx-auto">
                        <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-gray-400">
                            <FiBriefcase className="text-3xl" />
                        </div>
                        <h2 className="text-3xl font-bold mb-6 text-white">Join the Community</h2>
                        <p className="text-gray-400 text-lg mb-10">
                            Are you building a tool that helps modern teams work better? We'd love to showcase it here. Reach out to us.
                        </p>
                        <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-all shadow-xl shadow-white/5">
                            Get Featured
                        </Link>
                    </div>
                </div>
            </section>

        </PublicLayout>
    );
}
