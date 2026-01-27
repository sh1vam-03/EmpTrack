import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100 font-sans">
      <Head>
        <title>EmpTrack - Smart Employee Management</title>
        <meta name="description" content="Manage employees, attendance, payroll, and tasks efficiently." />
      </Head>

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          EmpTrack
        </div>
        <div>
          <Link href="/login" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-md">
            Login
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center px-6 py-20 lg:py-32">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-linear-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
          Simplify Your <br /> Workforce Management
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mb-10 leading-relaxed">
          The all-in-one solution for Employee Tracking, Attendance, Payroll, and Task Management. Designed for efficiency and clarity.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/signup" className="px-8 py-3.5 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-transform transform hover:scale-105 shadow-lg">
            Get Started
          </Link>
          <a href="#features" className="px-8 py-3.5 text-lg font-semibold text-blue-600 bg-blue-100 dark:bg-zinc-800 dark:text-blue-400 rounded-full hover:bg-blue-200 dark:hover:bg-zinc-700 transition-colors">
            Learn More
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-gray-600 dark:text-gray-400">Everything you need to manage your team in one place.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {/* Feature 1 */}
            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 dark:border-zinc-800">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-6 text-green-600 dark:text-green-300 text-2xl">
                ⏱️
              </div>
              <h3 className="text-xl font-bold mb-3">Smart Attendance</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Track check-in and check-out times seamlessly. View detailed history and monthly summaries.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 dark:border-zinc-800">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-6 text-purple-600 dark:text-purple-300 text-2xl">
                💰
              </div>
              <h3 className="text-xl font-bold mb-3">Automated Payroll</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Calculate monthly salaries automatically based on attendance records. No more manual errors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 bg-gray-50 dark:bg-zinc-900 rounded-2xl hover:shadow-xl transition-shadow border border-gray-100 dark:border-zinc-800">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-6 text-blue-600 dark:text-blue-300 text-2xl">
                ✅
              </div>
              <h3 className="text-xl font-bold mb-3">Task Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Assign tasks to employees, track status updates, and ensure projects stay on schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 dark:text-gray-500 text-sm border-t border-gray-200 dark:border-zinc-800">
        <p>&copy; {new Date().getFullYear()} EmpTrack System. All rights reserved.</p>
      </footer>
    </div>
  );
}
