import PublicLayout from '../components/common/PublicLayout';
import { FiSearch, FiChevronDown } from 'react-icons/fi';
import { useState } from 'react';

export default function Help() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "How do I add a new employee?",
            a: "To add a new employee, navigate to the Employees tab in your dashboard and click the 'Add Employee' button. Fill in the required details like name, email, and role."
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
            q: "Is my data secure?",
            a: "Absolutely. We use industry-standard encryption for all data in transit and at rest. Your organizational data is isolated and backed up daily."
        },
        {
            q: "Can I manage tasks for my team?",
            a: "Yes, the Task Management module allows you to assign tasks, set due dates, and track progress with a simple Kanban-style status view."
        }
    ];

    return (
        <PublicLayout>
            <section className="py-20 bg-zinc-900/50 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-6">How can we help?</h1>
                    <div className="max-w-2xl mx-auto relative">
                        <FiSearch className="absolute left-4 top-4 text-gray-500 text-xl" />
                        <input
                            type="text"
                            placeholder="Search for articles, guides, and FAQs..."
                            className="w-full bg-black border border-zinc-700 rounded-full py-4 pl-12 pr-6 text-white text-lg focus:border-blue-500 outline-none shadow-lg"
                        />
                    </div>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6 max-w-4xl">
                    <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>

                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <div key={i} className="border border-zinc-800 rounded-2xl bg-zinc-900 overflow-hidden">
                                <button
                                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                                    className="w-full flex justify-between items-center p-6 text-left hover:bg-zinc-800/50 transition-colors"
                                >
                                    <span className="font-bold text-lg text-gray-200">{faq.q}</span>
                                    <FiChevronDown className={`transform transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                                </button>
                                {openIndex === i && (
                                    <div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-zinc-800/50 pt-4">
                                        {faq.a}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
