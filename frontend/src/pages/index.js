import Link from 'next/link';
import PublicLayout from '../components/common/PublicLayout';
import { FiCheck, FiArrowRight, FiLayout, FiShield, FiUsers, FiClock, FiStar, FiZap } from 'react-icons/fi';

export default function Home() {
  return (
    <PublicLayout>

      {/* HERO SECTION */}
      <section className="container mx-auto px-6 pt-20 pb-32 text-center relative">
        {/* Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none z-0"></div>

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-medium text-blue-400 mb-8 animate-fade-in-up shadow-lg shadow-blue-900/10 hover:border-blue-500/30 transition-colors cursor-default">
            <FiZap className="fill-blue-400" />
            <span>v2.0 is now live with Advanced Analytics</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight text-white">
            The Operating System for <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-400 via-indigo-500 to-purple-500 animate-gradient-x">Modern Teams</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            EmpTrack unifies attendance, payroll, and task management into a single, beautiful dashboard. Built for speed, designed for scale.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/signup" className="px-8 py-4 bg-white text-black hover:bg-gray-100 rounded-full font-bold transition-all shadow-xl shadow-white/10 flex items-center justify-center gap-2 transform hover:scale-105">
              Start for Free <FiArrowRight className="text-xl" />
            </Link>
            <Link href="/contact" className="px-8 py-4 bg-zinc-900/50 hover:bg-zinc-900 text-gray-300 border border-white/10 rounded-full font-semibold transition-all backdrop-blur-sm">
              Book a Demo
            </Link>
          </div>

          {/* DASHBOARD PREVIEW */}
          <div className="mt-24 relative max-w-6xl mx-auto perspective-1000">
            <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-purple-600 rounded-2xl opacity-30 blur-2xl"></div>

            {/* Mockup Container */}
            <div className="relative bg-[#0F1115] rounded-xl border border-white/10 shadow-2xl overflow-hidden aspect-[16/9] flex items-center justify-center group">
              {/* Decorative UI Elements mimicking dashboard */}
              <div className="absolute top-0 left-0 w-full h-12 border-b border-white/5 bg-white/5 flex items-center px-4 gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                <div className="ml-4 w-64 h-6 rounded bg-white/5"></div>
              </div>

              <div className="text-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-linear-to-b from-white to-gray-500 mb-2">Interactive Dashboard</div>
                <p className="text-gray-500">Real-time data at your fingertips</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO CLOUD */}
      <section className="py-12 border-y border-white/5 bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">Trusted by industry leaders</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-xl font-bold text-white">ACME Corp</span>
            <span className="text-xl font-bold text-white">GlobalTech</span>
            <span className="text-xl font-bold text-white">Nebula</span>
            <span className="text-xl font-bold text-white">FoxRun</span>
            <span className="text-xl font-bold text-white">Circle</span>
          </div>
        </div>
      </section>

      {/* FEATURES GRID */}
      <section className="container mx-auto px-6 py-32" id="features">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Everything you need to <br /> run a high-performance team</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Stop juggling multiple tools. EmpTrack gives you a unified localized platform for all your HR needs.</p>
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
            <div key={i} className="group p-8 rounded-3xl bg-zinc-900 border border-zinc-800 hover:border-blue-500/30 hover:bg-zinc-800/80 transition-all duration-300">
              <div className="w-14 h-14 bg-zinc-800 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-lg shadow-black/50">
                <feature.icon className="text-2xl" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-100 transition-colors">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed font-normal">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-32 bg-zinc-900/30 border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Loved by innovative teams</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "EmpTrack transformed how we handle payroll. It used to take 3 days, now it takes 15 minutes.", author: "Sarah J.", role: "HR Director" },
              { text: "The task management features are surprisingly robust. We ditched Trello for this.", author: "Mike T.", role: "Product Manager" },
              { text: "Cleanest UI in the HR space. My employees actually enjoy using the app.", author: "Elena R.", role: "CEO, StartUp" }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-black border border-zinc-800">
                <div className="flex text-yellow-500 mb-4 gap-1">
                  <FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" /><FiStar fill="currentColor" />
                </div>
                <p className="text-gray-300 italic mb-6">"{item.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center font-bold text-zinc-500">{item.author.charAt(0)}</div>
                  <div>
                    <div className="font-bold text-white text-sm">{item.author}</div>
                    <div className="text-xs text-gray-500">{item.role}</div>
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
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Simple, transparent pricing</h2>
          <p className="text-gray-400">No hidden fees. scaling plans for growing teams.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Starter */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
            <p className="text-gray-400 text-sm mb-6">For small teams getting started.</p>
            <div className="text-4xl font-bold text-white mb-6">$0 <span className="text-sm font-normal text-gray-500">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> Up to 5 Employees</li>
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> Basic Attendance</li>
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> Task Management</li>
            </ul>
            <Link href="/signup" className="w-full py-3 rounded-xl border border-zinc-700 text-white font-bold text-center hover:bg-zinc-800 transition-colors">Get Started</Link>
          </div>

          {/* Growth */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-blue-500/50 relative overflow-hidden flex flex-col transform md:-translate-y-4 shadow-2xl shadow-blue-900/20">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">Popular</div>
            <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
            <p className="text-gray-400 text-sm mb-6">For scaling startups.</p>
            <div className="text-4xl font-bold text-white mb-6">$49 <span className="text-sm font-normal text-gray-500">/mo</span></div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> Up to 50 Employees</li>
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> Advanced Payroll</li>
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> Custom Roles</li>
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> Priority Support</li>
            </ul>
            <Link href="/signup" className="w-full py-3 rounded-xl bg-blue-600 text-white font-bold text-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25">Start Free Trial</Link>
          </div>

          {/* Enterprise */}
          <div className="p-8 rounded-3xl bg-zinc-900 border border-zinc-800 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
            <p className="text-gray-400 text-sm mb-6">For large organizations.</p>
            <div className="text-4xl font-bold text-white mb-6">Custom</div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> Unlimited Employees</li>
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> Dedicated Manager</li>
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> SSO & Audit Logs</li>
              <li className="flex gap-2 text-sm text-gray-300"><FiCheck className="text-blue-500 shrink-0" /> On-premise Deployment</li>
            </ul>
            <Link href="/contact" className="w-full py-3 rounded-xl border border-zinc-700 text-white font-bold text-center hover:bg-zinc-800 transition-colors">Contact Sales</Link>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container mx-auto px-6 pb-32">
        <div className="bg-linear-to-r from-blue-900 to-indigo-900 rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>

          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10 text-white">Ready to streamline your HR?</h2>
          <p className="text-blue-100 mb-10 max-w-xl mx-auto relative z-10">Join thousands of teams who are saving time and focusing on what matters—their people.</p>

          <div className="relative z-10">
            <Link href="/signup" className="px-10 py-4 bg-white text-blue-900 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1">
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

    </PublicLayout>
  );
}
