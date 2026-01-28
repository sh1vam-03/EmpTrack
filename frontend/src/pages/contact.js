import PublicLayout from '../components/common/PublicLayout';
import { FiMail, FiMapPin, FiPhone, FiPlus, FiMinus, FiMessageSquare, FiHelpCircle } from 'react-icons/fi';
import { useState } from 'react';

export default function Contact() {
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
                        We're here to help
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                        Get in <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-indigo-500">touch.</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Have a question about our pricing, features, or enterprise solutions? Our team is ready to answer all your questions.
                    </p>
                </div>
            </section>

            <section className="py-24 relative">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto mb-24">

                        {/* Contact Info & Map */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                                <p className="text-gray-400 mb-8 text-lg leading-relaxed">Fill up the form and our team will get back to you within 24 hours. We strictly hate spam.</p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-6 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 hover:border-blue-500/30 transition-all group">
                                        <div className="w-12 h-12 bg-blue-900/20 border border-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 shrink-0 group-hover:scale-110 transition-transform">
                                            <FiMail size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg mb-1 group-hover:text-blue-400 transition-colors">Chat to us</h3>
                                            <p className="text-gray-400 text-sm mb-1">Our friendly team is here to help.</p>
                                            <p className="text-blue-400 font-medium">support@emptrack.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-6 p-6 bg-zinc-900/30 rounded-2xl border border-zinc-800 hover:border-purple-500/30 transition-all group">
                                        <div className="w-12 h-12 bg-purple-900/20 border border-purple-500/20 rounded-xl flex items-center justify-center text-purple-400 shrink-0 group-hover:scale-110 transition-transform">
                                            <FiMapPin size={20} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-lg mb-1 group-hover:text-purple-400 transition-colors">Visit us</h3>
                                            <p className="text-gray-400 text-sm mb-1">Come say hello at our office HQ.</p>
                                            <p className="text-purple-400 font-medium">123 Innovation Dr, Tech City</p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Form */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
                            <div className="bg-black/80 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl relative z-10">
                                <form className="space-y-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">First Name</label>
                                            <input type="text" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-blue-500 focus:bg-black outline-none transition-all placeholder-zinc-700" placeholder="John" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Last Name</label>
                                            <input type="text" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-blue-500 focus:bg-black outline-none transition-all placeholder-zinc-700" placeholder="Doe" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email</label>
                                        <input type="email" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-blue-500 focus:bg-black outline-none transition-all placeholder-zinc-700" placeholder="john@company.com" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                                        <textarea rows="4" className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl p-4 text-white focus:border-blue-500 focus:bg-black outline-none transition-all placeholder-zinc-700" placeholder="How can we help you?"></textarea>
                                    </div>

                                    <button type="button" className="w-full py-4 bg-white text-black font-bold rounded-xl text-lg hover:bg-gray-200 transition-all shadow-xl shadow-white/5 transform hover:-translate-y-1">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>

                    {/* FAQ */}
                    <div className="max-w-3xl mx-auto pt-24 border-t border-white/5">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                            <p className="text-gray-400">Quick answers to common questions.</p>
                        </div>
                        <div className="space-y-4">
                            {[
                                { q: "Do you offer a free trial?", a: "Yes, we offer a 14-day free trial on all plans. No credit card required. You can test out all the features before committing." },
                                { q: "Can I cancel my subscription anytime?", a: "Absolutely. There are no lock-in contracts and you can cancel your subscription at any time from your dashboard settings." },
                                { q: "Do you have enterprise pricing?", a: "Yes, for teams larger than 100 people, we offer custom Enterprise plans with dedicated support, SLA, and advanced security features." },
                                { q: "Is my data secure?", a: "Security is our top priority. We use bank-grade encryption (AES-256) for all data at rest and in transit, and we're SOC 2 Type II compliant." }
                            ].map((item, i) => (
                                <details key={i} className="group bg-zinc-900/30 rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
                                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                                        <span className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{item.q}</span>
                                        <span className="text-gray-500 bg-white/5 p-2 rounded-lg transition-transform duration-300 group-open:rotate-45 group-open:bg-blue-500/10 group-open:text-blue-400">
                                            <FiPlus size={20} />
                                        </span>
                                    </summary>
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                        {item.a}
                                    </div>
                                </details>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </PublicLayout>
    );
}
