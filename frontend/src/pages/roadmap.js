import PublicLayout from '../components/common/PublicLayout';

export default function Roadmap() {
    return (
        <PublicLayout>
            <section className="py-20 bg-zinc-900/10 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-6">Product Roadmap</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">See what we're building next.</p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12 max-w-4xl">
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500"></span> In Progress</h3>
                        <ul className="space-y-4">
                            <li className="p-4 bg-black rounded-xl border border-zinc-800 text-sm text-gray-300">Mobile App (iOS & Android)</li>
                            <li className="p-4 bg-black rounded-xl border border-zinc-800 text-sm text-gray-300">Slack Integration</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500"></span> Planned (Q1)</h3>
                        <ul className="space-y-4">
                            <li className="p-4 bg-black rounded-xl border border-zinc-800 text-sm text-gray-300">Custom Reports Builder</li>
                            <li className="p-4 bg-black rounded-xl border border-zinc-800 text-sm text-gray-300">Google Calendar Sync</li>
                        </ul>
                    </div>
                    <div className="p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800">
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-gray-500"></span> Future</h3>
                        <ul className="space-y-4">
                            <li className="p-4 bg-black rounded-xl border border-zinc-800 text-sm text-gray-300">AI Performance Reviews</li>
                            <li className="p-4 bg-black rounded-xl border border-zinc-800 text-sm text-gray-300">Global Payroll PEO</li>
                        </ul>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
