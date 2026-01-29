import Header from './Header';
import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';
import { useState } from 'react';

export default function Layout({ children }) {
    const { currentUser } = useAuth();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    if (!currentUser) return <>{children}</>;

    return (
        <div className="flex min-h-screen bg-gray-50/50 dark:bg-black font-sans selection:bg-blue-500 selection:text-white">
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
            {/* Mobile Sidebar Overlay would go here in a full impl */}

            <main className="flex-1 flex flex-col min-h-screen relative">
                <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
                <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto space-y-6">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
