import PublicLayout from '../components/common/PublicLayout';

export default function Changelog() {
    return (
        <PublicLayout>
            <section className="py-20 bg-zinc-900/10 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl font-bold mb-6">Changelog</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">See what's new in EmpTrack.</p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-12 max-w-3xl">
                <div className="border-l-2 border-zinc-800 pl-8 space-y-12">
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-500 border-4 border-black"></span>
                        <div className="mb-2 text-sm text-gray-500">January 27, 2026</div>
                        <h3 className="text-2xl font-bold mb-4">v2.0.0 - Major Design Overhaul</h3>
                        <ul className="list-disc pl-5 text-gray-400 space-y-2">
                            <li>Completely redesigned UI with glassmorphism aesthetics.</li>
                            <li>Added Public Landing pages (About, Contact, Blog).</li>
                            <li>Improved Task Management visuals.</li>
                            <li>Enhanced Security features.</li>
                        </ul>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-zinc-700 border-4 border-black"></span>
                        <div className="mb-2 text-sm text-gray-500">December 15, 2025</div>
                        <h3 className="text-2xl font-bold mb-4">v1.5.0 - Payroll Beta</h3>
                        <ul className="list-disc pl-5 text-gray-400 space-y-2">
                            <li>Introduced automated payroll calculations.</li>
                            <li>Added support for overtime tracking.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </PublicLayout>
    );
}
