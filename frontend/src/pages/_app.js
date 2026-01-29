import "@/styles/globals.css";
import { Outfit } from 'next/font/google';
import { EmployeeProvider } from "../context/EmployeeContext";
import { AuthProvider } from "../context/AuthContext";
import { AttendanceProvider } from "../context/AttendanceContext";
import { TaskProvider } from "../context/TaskContext";
import { AlertProvider } from "../context/AlertContext";
import { ConfirmProvider } from "../context/ConfirmContext";
import { NotificationProvider } from "../context/NotificationContext";
const outfit = Outfit({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AlertProvider>
        <ConfirmProvider>
          <EmployeeProvider>
            <AttendanceProvider>
              <NotificationProvider>
                <TaskProvider>
                  <main className={outfit.className}>
                    <Component {...pageProps} />
                  </main>
                </TaskProvider>
              </NotificationProvider>
            </AttendanceProvider>
          </EmployeeProvider>
        </ConfirmProvider>
      </AlertProvider>
    </AuthProvider>
  );
}
