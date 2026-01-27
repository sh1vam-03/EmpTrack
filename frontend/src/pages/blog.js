import PublicLayout from '../components/common/PublicLayout';
import Link from 'next/link';

export default function Blog() {
    const posts = [
        {
            title: "The Future of Remote Work in 2026",
            excerpt: "How AI and VR are changing the way distributed teams collaborate.",
            date: "Jan 24, 2026",
            category: "Trends",
            readTime: "5 min read",
            image: "bg-blue-900"
        },
        {
            title: "5 Tips for Better Employee Retention",
            excerpt: "Why culture matters more than perks when it comes to keeping top talent.",
            date: "Jan 18, 2026",
            category: "Management",
            readTime: "7 min read",
            image: "bg-purple-900"
        },
        {
            title: "Introducing EmpTrack v2.0",
            excerpt: "A deep dive into our biggest update yet. AI analytics, new UI, and more.",
            date: "Jan 10, 2026",
            category: "Product",
            readTime: "10 min read",
            image: "bg-indigo-900"
        }
    ];

    return (
        <PublicLayout>
            <section className="py-20 bg-zinc-900/10 border-b border-white/5">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">The EmpTrack Blog</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">Insights, news, and tips for building better workplaces.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {posts.map((post, i) => (
                            <Link key={i} href="#" className="group block bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 hover:border-blue-500/50 transition-colors">
                                <div className={`h-48 ${post.image} relative overflow-hidden group-hover:opacity-90 transition-opacity`}>
                                    {/* Placeholder visuals */}
                                    <div className="absolute inset-0 bg-linear-to-tr from-black/50 to-transparent"></div>
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-4 text-xs font-bold uppercase tracking-wider">
                                        <span className="text-blue-400">{post.category}</span>
                                        <span className="text-gray-500">{post.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                        {post.excerpt}
                                    </p>
                                    <div className="text-xs text-gray-500">{post.readTime}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </PublicLayout>
    );
}
