import Link from 'next/link';
import PublicLayout from '../components/common/PublicLayout';
import { FiCheck, FiArrowRight, FiLayout, FiShield, FiUsers, FiClock, FiStar, FiZap, FiBarChart2 } from 'react-icons/fi';

export default function Home() {
  return (
    <PublicLayout>

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-32 pb-32 text-center relative">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-blue-400 mb-8 animate-fade-in-up shadow-lg shadow-blue-900/10 hover:border-blue-500/30 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            New: Advanced Analytics Dashboard
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-white">
            The Operating System for <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-purple-500 to-indigo-500">Modern Teams.</span>
          </h1>

          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            EmpTrack unifies attendance, payroll, and task management into a single, beautiful dashboard. Built for speed, designed for scale.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-bold transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95">
              Start for Free <FiArrowRight className="text-xl" />
            </Link>

          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="mt-24 relative max-w-6xl mx-auto perspective-1000">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 blur-2xl"></div>
            <div className="relative bg-[#0F1115] rounded-2xl border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] group">
              {/* Decorative Browser Bar */}
              <div className="h-12 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="ml-4 flex-1 max-w-lg h-6 rounded bg-white/5 text-xs flex items-center px-3 text-gray-300 font-mono whitespace-nowrap overflow-hidden text-ellipsis">https://emptrack-sh1vam-03.vercel.app/admin</div>
              </div>

              {/* Inner Content (Placeholder for Screenshot) */}
              <div className="absolute inset-0 top-12 flex items-center justify-center bg-[url('/grid.svg')] bg-center bg-opacity-20">
                <div className="text-center transform group-hover:scale-105 transition-transform duration-700">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-linear-to-br from-blue-600 to-purple-600 shadow-2xl shadow-blue-500/30 mb-6">
                    <FiBarChart2 className="text-4xl text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Powerful Insights</h3>
                  <p className="text-gray-500">Real-time data visualization at your fingertips</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY */}
      <section className="py-10 border-y border-white/5 bg-black/50">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-medium text-gray-500 mb-8 tracking-widest uppercase">Trusted by innovative teams</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-50 hover:opacity-100 transition-opacity duration-500">
            {/* NEXUS */}
            <div className="flex items-center gap-2 text-white">
              <FiZap className="text-2xl" />
              <div className="text-2xl font-bold tracking-tighter">NEX<span className="font-light">US</span></div>
            </div>

            {/* TASKEY */}
            <div className="flex items-center gap-2 text-white">
              <FiClock className="text-2xl" />
              <div className="text-2xl font-black">TAS<span className="text-blue-500">KEY</span></div>
            </div>

            {/* PRINTPORTAL */}
            <div className="flex items-center gap-2 text-white">
              <FiLayout className="text-2xl" />
              <div className="text-2xl font-mono font-bold">PRINT<span className="text-blue-500">PORTAL</span></div>
            </div>

            {/* TECHFLOW */}
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded bg-blue-500 flex items-center justify-center text-xs font-bold text-white">TF</div>
              <div className="text-2xl font-serif font-bold">TECH<span className="italic">FLOW</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="container mx-auto px-6 py-32" id="features">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Everything you need to <br /> run a high-performance team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Stop juggling multiple tools. EmpTrack gives you a unified localized platform for all your HR needs.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: FiUsers, title: 'Employee Database', desc: 'Securely store and manage employee records, contracts, and documents in one place.' },
            { icon: FiClock, title: 'Smart Attendance', desc: 'Geofenced check-ins, biometric integration, and automated timesheet generation.' },
            { icon: FiShield, title: 'Enterprise Security', desc: 'Bank-grade encryption, role-based access control, and regular automated backups.' },
            { icon: FiLayout, title: 'Project Management', desc: 'Kanban boards, sprint planning, and task tracking built directly into your workflow.' },
            { icon: FiCheck, title: 'One-Click Payroll', desc: 'Automated salary calculations including taxes, deductions, and bonuses.' },
            { icon: FiZap, title: 'Real-time Analytics', desc: 'Visual insights into team performance, attendance trends, and project velocity.' }
          ].map((feature, i) => (
            <div key={i} className="group p-10 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/30 hover:bg-zinc-800/80 transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/50 relative z-10">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-200 transition-colors relative z-10">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-normal relative z-10">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-zinc-900/30 border-y border-white/5 relative" id="testimonials">
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-blue-500/20 to-transparent"></div>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
              <FiStar className="fill-purple-400" /> Wall of Love
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Loved by innovative teams</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">See what fast-moving companies are saying about EmpTrack.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "EmpTrack transformed how we handle payroll. It used to take 3 days, now it takes 15 minutes. It's a game changer.", author: "Sarah Jenkins", role: "HR Director at TechFlow" },
              { text: "The task management features are surprisingly robust. We actually ditched Trello for this because it's so integrated.", author: "Mike Ross", role: "Product Manager at Nexus" },
              { text: "Cleanest UI in the HR space. My employees actually enjoy using the app to log time and check benefits.", author: "Elena Rodriguez", role: "CEO at StartUp Inc." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-black border border-zinc-800 hover:border-purple-500/30 transition-all hover:-translate-y-1">
                <div className="flex text-yellow-500 mb-6 gap-1">
                  <FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" />
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center font-bold text-white text-lg">{item.author.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-white">{item.author}</div>
                    <div className="text-sm text-gray-500">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="container mx-auto px-6 py-32" id="pricing">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Simple, transparent pricing</h2>
          <p className="text-gray-400 text-lg">Start for free, upgrade when you need enterprise power.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Startup (Free) */}
          <div className="p-10 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col hover:border-zinc-700 transition-colors relative overflow-hidden group">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl uppercase tracking-wider">Free Forever</div>
            <h3 className="text-2xl font-bold text-white mb-2">Startup</h3>
            <p className="text-gray-400 mb-8">Perfect for small teams and startups.</p>
            <div className="text-6xl font-black mb-8 bg-clip-text text-transparent bg-linear-to-r from-blue-400 to-emerald-400 tracking-tight">FREE</div>
            <ul className="space-y-4 mb-10 flex-1">
              <li className="flex gap-3 text-gray-300"><FiCheck className="text-blue-500 shrink-0 text-xl" /> Unlimited Employees</li>
              <li className="flex gap-3 text-gray-300"><FiCheck className="text-blue-500 shrink-0 text-xl" /> Basic Attendance & Payroll</li>
              <li className="flex gap-3 text-gray-300"><FiCheck className="text-blue-500 shrink-0 text-xl" /> Task Management</li>
              <li className="flex gap-3 text-gray-300"><FiCheck className="text-blue-500 shrink-0 text-xl" /> Community Support</li>
            </ul>
            <Link href="/signup" className="w-full py-4 rounded-xl border border-zinc-700 text-white font-bold text-center hover:bg-zinc-800 transition-colors">Start for Free</Link>
          </div>

          {/* Enterprise */}
          <div className="p-10 rounded-3xl bg-linear-to-b from-blue-900/20 to-black border border-blue-500/30 flex flex-col hover:border-blue-500/50 transition-colors relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
            <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-gray-400 mb-8">For organizations requiring scale & security.</p>
            <div className="text-5xl font-bold text-white mb-8">Custom</div>
            <ul className="space-y-4 mb-10 flex-1 relative z-10">
              <li className="flex gap-3 text-gray-300"><FiCheck className="text-blue-400 shrink-0 text-xl" /> Unlimited Employees</li>
              <li className="flex gap-3 text-gray-300"><FiCheck className="text-blue-400 shrink-0 text-xl" /> Advanced Analytics & Reports</li>
              <li className="flex gap-3 text-gray-300"><FiCheck className="text-blue-400 shrink-0 text-xl" /> Dedicated Success Manager</li>
              <li className="flex gap-3 text-gray-300"><FiCheck className="text-blue-400 shrink-0 text-xl" /> SSO, Audit Logs & SLA</li>
            </ul>
            <Link href="/contact" className="w-full py-4 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25 relative z-10">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-32 bg-black border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white" id="how-it-works">Get started in minutes</h2>
            <p className="text-gray-400 text-lg">Three simple steps to modernize your HR workflow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900 border-t border-dashed border-white/20 z-0"></div>

            {[
              { step: "01", title: "Setup Organization", desc: "Create your Owner/Admin account and configure your company profile settings." },
              { step: "02", title: "Add Users", desc: "Manually create secure accounts for HR and Employees, then share credentials." },
              { step: "03", title: "Manage & Track", desc: "Monitor attendance, process payroll, and manage tasks from one central dashboard." }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 rounded-3xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl font-bold text-white mb-8 shadow-2xl shadow-black/50 group-hover:scale-110 group-hover:border-blue-500/50 group-hover:shadow-blue-500/20 transition-all duration-300">
                  <span className="bg-clip-text text-transparent bg-linear-to-br from-blue-400 to-purple-500">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container mx-auto px-6 pb-32">
        <div className="bg-linear-to-r from-blue-900/40 to-purple-900/40 border border-white/10 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/20 rounded-full blur-[100px]"></div>

          <h2 className="text-4xl md:text-6xl font-bold mb-8 relative z-10 text-white">Ready to streamline your HR?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto relative z-10">Join thousands of teams who are saving time and focusing on what matters—their people.</p>

          <div className="relative z-10">
            <Link href="/signup" className="px-10 py-5 bg-white text-black rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 inline-block">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

    </PublicLayout>
  );
}
