import { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import { useAuth } from '../context/AuthContext';
import { useEmployees } from '../context/EmployeeContext';
import { useAttendance } from '../context/AttendanceContext';
import { useAlert } from '../context/AlertContext';
import { useRouter } from 'next/router';
import { generatePaySlip } from '../utils/pdfGenerator';
import { calculateNetSalary } from '../utils/salaryCalculator';
import { FiInbox } from 'react-icons/fi';
import { FaRupeeSign } from 'react-icons/fa';

export default function Payroll() {
    const { currentUser, loading: authLoading } = useAuth();
    const { employees } = useEmployees();
    const { attendanceHistory, calculatePresentDays } = useAttendance();
    const { showAlert } = useAlert();
    const router = useRouter();
    const [isGenerating, setIsGenerating] = useState(false);
    const [payrolls, setPayrolls] = useState([]);

    useEffect(() => {
        if (!authLoading && !currentUser) {
            router.push('/');
        }
    }, [currentUser, router, authLoading]);

    // Load initial payrolls if stored (optional, for now we generate on fly or keep state)
    // For this refactor, let's keep it simple: State is local to this page component OR 
    // ideally moved to a PayrollContext if we needed persistence across pages.
    // The previous implementation had it in EmployeeContext.
    // Let's implement local state for payrolls, or if we want persistence, we can use localStorage here too.
    useEffect(() => {
        const stored = localStorage.getItem('payrolls');
        if (stored) setPayrolls(JSON.parse(stored));
    }, []);

    useEffect(() => {
        if (payrolls.length > 0) localStorage.setItem('payrolls', JSON.stringify(payrolls));
    }, [payrolls]);


    if (authLoading) return <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900 text-zinc-500 font-medium">Loading...</div>;
    if (!currentUser) return null;

    const isAdminOrHR = currentUser.role === 'Admin' || currentUser.role === 'HR';

    // Payroll Data
    const myPayroll = payrolls.filter(p => p.empId === currentUser.id);
    const displayPayrolls = isAdminOrHR
        ? payrolls.filter(p => {
            const emp = employees.find(e => e.id === p.empId);
            return emp?.role === 'Employee';
        })
        : myPayroll;

    const handleGenerate = () => {
        setIsGenerating(true);
        setTimeout(() => {
            const currentMonth = new Date().toLocaleString('default', { month: 'long' });
            const currentYear = new Date().getFullYear();

            // Only generate for "Employee" role
            const eligibleEmployees = employees.filter(e => e.role === 'Employee');

            const newPayrolls = eligibleEmployees.map(emp => {
                const daysPresent = calculatePresentDays(emp.id, currentMonth, currentYear);
                const netSalary = calculateNetSalary(emp.salary, daysPresent);

                const perDaySalary = Math.round(emp.salary / 30);

                return {
                    id: `${emp.id}-${currentMonth}-${currentYear}`,
                    empId: emp.id,
                    name: emp.name,
                    department: emp.department,
                    role: emp.role,
                    month: currentMonth,
                    year: currentYear,
                    basicSalary: emp.salary,
                    perDaySalary: perDaySalary,
                    totalWorkingDays: 30, // Standardized for calculation
                    daysPresent: daysPresent,
                    netSalary: netSalary,
                    generatedBy: currentUser.role // Track who generated this for the PDF
                };
            });

            setPayrolls(newPayrolls);
            setIsGenerating(false);
            if (newPayrolls.length > 0) {
                showAlert(`Payroll generated for ${newPayrolls.length} employees!`, 'success');
            }
        }, 1500);
    };

    const handleDownload = (id) => {
        const slip = payrolls.find(p => p.id === id);
        if (slip) {
            generatePaySlip(slip);
            showAlert('Pay slip downloaded successfully!', 'success');
        } else {
            showAlert("Error: Pay slip not found!", 'error');
        }
    };

    return (
        <Layout>
            <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Payroll Management</h1>
                    <p className="text-gray-500 dark:text-zinc-400">
                        {isAdminOrHR ? 'Calculate and manage employee salaries.' : 'View your monthly payslips.'}
                    </p>
                </div>

                {/* Admin Action */}
                {isAdminOrHR && (
                    <button
                        onClick={handleGenerate}
                        disabled={isGenerating}
                        className={`mt-4 md:mt-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg transition-all transform hover:scale-105 ${isGenerating ? 'bg-gray-400 cursor-not-allowed' : 'bg-linear-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 active:scale-95'
                            }`}
                    >
                        {isGenerating ? (
                            <>
                                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Processing...
                            </>
                        ) : (
                            <>
                                <FaRupeeSign className="text-xl" />
                                <span>Process Current Month Payroll</span>
                            </>
                        )}
                    </button>
                )}
            </div>

            {/* Payroll List */}
            <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-sm border border-gray-200 dark:border-zinc-800 overflow-hidden text-sm transition-colors duration-300">
                {displayPayrolls.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="bg-gray-50/50 dark:bg-zinc-800/50 text-gray-500 dark:text-zinc-400 text-xs uppercase font-bold tracking-wider border-b border-gray-100 dark:border-zinc-800">
                                <tr>
                                    <th className="p-5 pl-6">Period</th>
                                    <th className="p-5">Employee</th>
                                    <th className="p-5 text-center">Days Present</th>
                                    <th className="p-5 text-right">Basic Salary</th>
                                    <th className="p-5 text-right">Net Pay</th>
                                    <th className="p-5 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-zinc-800/50">
                                {displayPayrolls.map(slip => (
                                    <tr key={slip.id} className="hover:bg-blue-50/30 dark:hover:bg-zinc-800/30 transition-colors group">
                                        <td className="p-5 pl-6">
                                            <span className="font-bold text-gray-800 dark:text-zinc-200 bg-gray-100 dark:bg-zinc-800 px-3 py-1 rounded-lg text-xs">{slip.month} {slip.year}</span>
                                        </td>
                                        <td className="p-5">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold text-xs">
                                                    {slip.name.charAt(0)}
                                                </div>
                                                <div>
                                                    <div className="font-semibold text-gray-900 dark:text-white">{slip.name}</div>
                                                    <div className="text-xs text-gray-400 font-mono">{slip.empId}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-5 text-center">
                                            <span className="inline-flex items-center justify-center px-2.5 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-md text-xs font-bold border border-green-100 dark:border-green-900/30">
                                                {slip.daysPresent} Days
                                            </span>
                                        </td>
                                        <td className="p-5 text-right text-gray-500 dark:text-zinc-400 font-medium font-mono">₹{slip.basicSalary.toLocaleString()}</td>
                                        <td className="p-5 text-right">
                                            <span className="text-gray-900 dark:text-white font-bold text-base font-mono tracking-tight">₹{slip.netSalary.toLocaleString()}</span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <button
                                                onClick={() => handleDownload(slip.id)}
                                                className="text-gray-400 hover:text-blue-600 dark:text-zinc-500 dark:hover:text-blue-400 transition-colors p-2 bg-gray-50 dark:bg-zinc-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20"
                                                title="Download Slip"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="p-20 flex flex-col items-center justify-center text-center">
                        <div className="w-20 h-20 bg-gray-50 dark:bg-zinc-800/50 rounded-full flex items-center justify-center mb-6 text-gray-300 dark:text-zinc-600">
                            <FiInbox className="text-4xl" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">No Payroll Records</h3>
                        <p className="text-gray-500 dark:text-zinc-400 max-w-md mx-auto leading-relaxed">
                            {isAdminOrHR
                                ? "Click the 'Process Current Month Payroll' button above to automatically generate salary slips for all eligible employees."
                                : "Payroll for this month hasn't been generated yet. Please check back after the pay period ends."}
                        </p>
                    </div>
                )}
            </div>
        </Layout>
    );
}
