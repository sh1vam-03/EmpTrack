import Link from 'next/link';
import { FiCheck, FiArrowRight, FiLayout, FiShield, FiUsers, FiClock } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-blue-500 selection:text-white font-sans overflow-hidden">

      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      <nav className="relative z-10 container mx-auto p-6 flex justify-between items-center">
        <div className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-purple-500">
          EmpTrack
        </div>
        <div className="space-x-4">
          <Link href="/login" className="px-6 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link href="/signup" className="px-6 py-2 text-sm font-medium bg-white text-black rounded-full hover:bg-gray-100 transition-colors shadow-lg shadow-white/10">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="container mx-auto px-6 pt-20 pb-32 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-gray-400 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            v2.0 Now Available
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            Manage your <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-indigo-500 to-purple-500">Workforce</span> <br />
            like never before.
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            The all-in-one HRMS solution for modern organizations. Track attendance, manage tasks, and process payroll with enterprise-grade efficiency.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2">
              Start Free Trial <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/#demo" className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 rounded-full font-semibold transition-all">
              View Live Demo
            </Link>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="mt-20 relative max-w-5xl mx-auto">
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500 to-purple-600 rounded-2xl opacity-20 blur-xl"></div>
            <div className="relative bg-zinc-900 rounded-xl border border-zinc-800 shadow-2xl overflow-hidden aspect-video flex items-center justify-center">
              <span className="text-gray-600">Dashboard Preview Image Placeholder</span>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section className="container mx-auto px-6 py-24 border-t border-zinc-900" id="features">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FiUsers, title: 'Employee Management', desc: 'Centralized database for all your employee records and documents.' },
              { icon: FiClock, title: 'Smart Attendance', desc: 'NFC-enabled attendance tracking with real-time reporting.' },
              { icon: FiShield, title: 'Secure & Private', desc: 'Enterprise-grade security ensuring your data remains isolated and safe.' },
              { icon: FiLayout, title: 'Task Tracking', desc: 'Kanban-style task management to keep your team productive.' },
              { icon: FiCheck, title: 'Automated Payroll', desc: 'One-click payroll generation with detailed payslips.' },
              { icon: FiArrowRight, title: 'Scalable Architecture', desc: 'Built to grow with your organization from day one.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <div className="w-12 h-12 bg-zinc-800 rounded-xl flex items-center justify-center text-blue-400 mb-6">
                  <feature.icon className="text-2xl" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-zinc-900 py-12 text-center text-gray-500 text-sm">
          <p>© 2024 EmpTrack Inc. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}
