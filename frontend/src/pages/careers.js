import PublicLayout from '../components/common/PublicLayout';

export default function Careers() {
    return (
        <PublicLayout>
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
                <div className="text-6xl mb-6">🚀</div>
                <h1 className="text-4xl font-bold mb-4">Join our team</h1>
                <p className="text-gray-400 max-w-lg mb-8">
                    We're always looking for talented individuals. While we don't have open positions right now, feel free to drop your resume at careers@emptrack.com.
                </p>
                <span className="px-4 py-2 bg-zinc-900 rounded-lg text-sm text-gray-500 border border-zinc-800">No open positions</span>
            </div>
        </PublicLayout>
    );
}
