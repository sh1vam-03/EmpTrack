import PublicLayout from '../components/common/PublicLayout';

export default function Privacy() {
    return (
        <PublicLayout>
            <div className="container mx-auto px-6 py-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
                <div className="prose prose-invert prose-lg max-w-none text-gray-400">
                    <p>Last updated: January 2026</p>

                    <h3 className="text-white mt-8 mb-4 text-xl font-bold">1. Introduction</h3>
                    <p>
                        Welcome to EmpTrack. We respect your privacy and are committed to protecting your personal data.
                        This privacy policy will inform you as to how we look after your personal data when you visit our website
                        and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h3 className="text-white mt-8 mb-4 text-xl font-bold">2. Data We Collect</h3>
                    <p>
                        We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li><strong>Identity Data:</strong> includes first name, maiden name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes billing address, delivery address, email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version.</li>
                    </ul>

                    <h3 className="text-white mt-8 mb-4 text-xl font-bold">3. How We Use Your Data</h3>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>
                </div>
            </div>
        </PublicLayout>
    );
}
