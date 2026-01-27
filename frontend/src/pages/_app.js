import "@/styles/globals.css";
import { EmployeeProvider } from "../context/EmployeeContext";
import { AuthProvider } from "../context/AuthContext";
import { AttendanceProvider } from "../context/AttendanceContext";
import { TaskProvider } from "../context/TaskContext";
import { AlertProvider } from "../context/AlertContext";
import { ConfirmProvider } from "../context/ConfirmContext";

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AlertProvider>
        <ConfirmProvider>
          <EmployeeProvider>
            <AttendanceProvider>
              <TaskProvider>
                <Component {...pageProps} />
              </TaskProvider>
            </AttendanceProvider>
          </EmployeeProvider>
        </ConfirmProvider>
      </AlertProvider>
    </AuthProvider>
  );
}
