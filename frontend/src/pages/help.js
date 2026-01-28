import PublicLayout from '../components/common/PublicLayout';
import { FiSearch, FiChevronDown, FiBook, FiUser, FiSettings, FiDollarSign, FiShield, FiFileText, FiLifeBuoy } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

export default function Help() {
    const [openIndex, setOpenIndex] = useState(null);

    const categories = [
        { icon: FiBook, title: "Getting Started", desc: "Guides for new users and admins." },
        { icon: FiUser, title: "Account & Profile", desc: "Manage detailed profile settings." },
        { icon: FiDollarSign, title: "Billing & Plans", desc: "Invoices, upgrades, and payments." },
        { icon: FiSettings, title: "Integrations", desc: "Connect Slack, Google to EmpTrack." },
        { icon: FiShield, title: "Security & Privacy", desc: "SAML, 2FA, and data protection." },
        { icon: FiFileText, title: "API Documentation", desc: "For developers building on EmpTrack." }
    ];

    const faqs = [
        {
            q: "How do I add a new employee?",
            a: "To add a new employee, navigate to the Employees tab in your dashboard and click the 'Add Employee' button. Fill in the required details like name, email, and role."
        },
        {
            q: "Is the Startup plan really free?",
            a: "Yes, utterly. We believe in helping companies establish their culture early. You get up to 10 employees for free, forever."
        },
        {
            q: "Can I export payroll data?",
            a: "Yes! In the Payroll section, you can generate PDF payslips for individual employees. We are working on a bulk CSV export feature for the next release."
        },
        {
            q: "How does the NFC attendance work?",
            a: "Employees can use their assigned NFC tags (cards, fobs, or phone) to tap on the designated reader. The system automatically logs the check-in time."
        },
        {
            q: "Do you offer discounts for non-profits?",
            a: "Yes! We love supporting mission-driven organizations. Contact our sales team for special pricing."
        },
        {
            q: "What happens if I grow past 10 employees?",
            a: "We'll help you upgrade to our Enterprise plan seamlessly. You won't lose any data or configuration."
        },
        {
            q: "Is my data secure?",
            a: "Absolutely. We use industry-standard encryption for all data in transit and at rest. Your organizational data is isolated and backed up daily. We are SOC 2 compliant."
        }
    ];

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
                        Support Center
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                        How can we <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-indigo-500">help?</span>
                    </h1>

                    <div className="max-w-2xl mx-auto relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                        <div className="relative">
                            <FiSearch className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl group-focus-within:text-blue-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search for articles, guides, and FAQs..."
                                className="w-full bg-black border border-zinc-800 rounded-full py-5 pl-14 pr-6 text-white text-lg focus:border-blue-500 outline-none shadow-xl placeholder-zinc-700 transition-all"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories */}
            <section className="py-24">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">Find the answers you need in our curated documentation.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((cat, i) => (
                            <div key={i} className="p-10 bg-black rounded-3xl border border-zinc-800 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/10 transition-all group cursor-pointer">
                                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center text-gray-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all mb-6">
                                    <cat.icon className="text-2xl" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{cat.title}</h3>
                                <p className="text-gray-400 leading-relaxed text-lg">{cat.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-zinc-900/10 border-t border-white/5">
                <div className="container mx-auto px-6 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
                        <p className="text-gray-400">Quick answers to common questions.</p>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="group bg-black rounded-2xl border border-zinc-800 overflow-hidden hover:border-zinc-700 transition-colors">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex justify-between items-center p-6 text-left"
                                >
                                    <span className="font-bold text-lg text-white group-hover:text-blue-400 transition-colors">{faq.q}</span>
                                    <span className="text-gray-500 bg-white/5 p-2 rounded-lg transition-transform duration-300 group-open:rotate-45 group-open:bg-blue-500/10 group-open:text-blue-400">
                                        <FiChevronDown size={20} />
                                    </span>
                                </button>
                                <div className={`grid transition-all duration-300 ease-in-out ${openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className="overflow-hidden">
                                        <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4">
                                            {faq.a}
                                        </div>
                                    </div>
                                </div>
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

                        <h2 className="text-4xl md:text-5xl font-bold mb-6 relative z-10">Still need help?</h2>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 relative z-10">Our support team is available 24/7 to assist you with any issues.</p>
                        <div className="relative z-10">
                            <Link href="/contact" className="px-8 py-4 bg-white text-black font-bold rounded-full text-lg hover:bg-gray-100 transition-colors shadow-xl shadow-white/5 inline-flex items-center gap-2">
                                <FiLifeBuoy size={20} /> Contact Support
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
