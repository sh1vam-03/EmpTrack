import PublicLayout from '../components/common/PublicLayout';

export default function Terms() {
    return (
        <PublicLayout>
            <div className="max-w-4xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-blue-500 uppercase tracking-widest mb-4">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
                    <p className="text-gray-400">Last updated: January 28, 2026</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="lead text-xl text-gray-300 mb-12">
                        Please read these Terms of Service ("Terms") carefully before using the EmpTrack website and services operated by EmpTrack Inc.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">1. Acceptance of Terms</h3>
                    <p>
                        By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">2. Accounts</h3>
                    <p>
                        When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
                    </p>
                    <p>
                        You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">3. Subscriptions</h3>
                    <p>
                        Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set either on a monthly or annual basis, depending on the type of subscription plan you select when purchasing a Subscription.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">4. Termination</h3>
                    <p>
                        We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                    </p>
                    <p>
                        All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">5. Changes</h3>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
                    </p>

                    <div className="mt-16 p-8 bg-zinc-900 rounded-2xl border border-zinc-800 text-sm text-gray-400">
                        <p className="mb-2 font-bold text-white">Contact Us</p>
                        <p>If you have any questions about these Terms, please contact us at <a href="mailto:legal@emptrack.com" className="text-blue-400 hover:underline">legal@emptrack.com</a>.</p>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
