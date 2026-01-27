import PublicLayout from '../components/common/PublicLayout';
import AuthInput from '../components/auth/AuthInput'; // Reusing for consistency
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi';

export default function Contact() {
    return (
        <PublicLayout>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl font-bold mb-4">Get in touch</h1>
                        <p className="text-gray-400">We'd love to hear from you. Our team is always here to chat.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">

                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <p className="text-gray-400 mb-8">Fill up the form and our team will get back to you within 24 hours.</p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-blue-900/30 rounded-lg flex items-center justify-center text-blue-400 shrink-0">
                                        <FiMail size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Email Us</h3>
                                        <p className="text-gray-400">support@emptrack.com</p>
                                        <p className="text-gray-400">sales@emptrack.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-purple-900/30 rounded-lg flex items-center justify-center text-purple-400 shrink-0">
                                        <FiMapPin size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">HQ Office</h3>
                                        <p className="text-gray-400">123 Innovation Dr,</p>
                                        <p className="text-gray-400">Tech City, TC 90210</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-green-900/30 rounded-lg flex items-center justify-center text-green-400 shrink-0">
                                        <FiPhone size={20} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white">Call Us</h3>
                                        <p className="text-gray-400">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800">
                            <form className="space-y-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                                        <input type="text" className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-blue-500 outline-none transition-colors" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                                        <input type="text" className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-blue-500 outline-none transition-colors" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Email</label>
                                    <input type="email" className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-blue-500 outline-none transition-colors" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                                    <textarea rows="4" className="w-full bg-black border border-zinc-700 rounded-xl p-3 text-white focus:border-blue-500 outline-none transition-colors"></textarea>
                                </div>

                                <button type="button" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors">
                                    Send Message
                                </button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
