import Sidebar from './Sidebar';
import { useAuth } from '../../context/AuthContext';

export default function Layout({ children }) {
    const { currentUser } = useAuth();

    if (!currentUser) return <>{children}</>;

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-black font-sans">
            <Sidebar />
            <main className="flex-1 p-4 md:p-8 overflow-y-auto h-screen">
                <div className="max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
