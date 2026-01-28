import PublicLayout from '../components/common/PublicLayout';

export default function Privacy() {
    return (
        <PublicLayout>
            <div className="max-w-4xl mx-auto px-6 py-24">
                <div className="text-center mb-16">
                    <p className="text-sm font-bold text-purple-500 uppercase tracking-widest mb-4">Legal</p>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Privacy Policy</h1>
                    <p className="text-gray-400">Last updated: January 28, 2026</p>
                </div>

                <div className="prose prose-invert prose-lg max-w-none text-gray-300">
                    <p className="lead text-xl text-gray-300 mb-12">
                        EmpTrack Inc. ("us", "we", or "our") operates the EmpTrack website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">1. Information Collection And Use</h3>
                    <p>
                        We collect several different types of information for various purposes to provide and improve our Service to you.
                    </p>
                    <h4 className="text-xl font-bold text-white mt-6 mb-4">Types of Data Collected</h4>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>Email address</li>
                        <li>First name and last name</li>
                        <li>Phone number</li>
                        <li>Address, State, Province, ZIP/Postal code, City</li>
                        <li>Cookies and Usage Data</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">2. Use of Data</h3>
                    <p>
                        EmpTrack uses the collected data for various purposes:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mb-6">
                        <li>To provide and maintain the Service</li>
                        <li>To notify you about changes to our Service</li>
                        <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                        <li>To provide customer care and support</li>
                        <li>To provide analysis or valuable information so that we can improve the Service</li>
                    </ul>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">3. Transfer Of Data</h3>
                    <p>
                        Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
                    </p>

                    <h3 className="text-2xl font-bold text-white mt-12 mb-6">4. Security Of Data</h3>
                    <p>
                        The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
                    </p>

                    <div className="mt-16 p-8 bg-zinc-900 rounded-2xl border border-zinc-800 text-sm text-gray-400">
                        <p className="mb-2 font-bold text-white">Contact Us</p>
                        <p>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@emptrack.com" className="text-blue-400 hover:underline">privacy@emptrack.com</a>.</p>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
