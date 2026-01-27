import PublicLayout from '../components/common/PublicLayout';

export default function Terms() {
    return (
        <PublicLayout>
            <div className="container mx-auto px-6 py-20 max-w-4xl">
                <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
                <div className="prose prose-invert prose-lg max-w-none text-gray-400">
                    <p>Last updated: January 2026</p>

                    <h3 className="text-white mt-8 mb-4 text-xl font-bold">1. Agreement to Terms</h3>
                    <p>
                        By accessing our website, you agree to be bound by these Terms of Service and to comply with all applicable laws and regulations.
                        If you do not agree with these terms, you are prohibited from using or accessing this site or using any other services provided by EmpTrack.
                    </p>

                    <h3 className="text-white mt-8 mb-4 text-xl font-bold">2. Use License</h3>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on EmpTrack's website for personal,
                        non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc pl-6 space-y-2 mt-4">
                        <li>modify or copy the materials;</li>
                        <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                        <li>attempt to decompile or reverse engineer any software contained on EmpTrack's website;</li>
                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                    </ul>

                    <h3 className="text-white mt-8 mb-4 text-xl font-bold">3. Disclaimer</h3>
                    <p>
                        The materials on EmpTrack's website are provided on an 'as is' basis. EmpTrack makes no warranties, expressed or implied,
                        and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability,
                        fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                    </p>
                </div>
            </div>
        </PublicLayout>
    );
}
