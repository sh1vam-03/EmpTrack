import { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';
import { useAuth } from './AuthContext';

export const AttendanceContext = createContext();

export function useAttendance() {
    const context = useContext(AttendanceContext);
    if (!context) {
        throw new Error('AttendanceContext must be used within an AttendanceProvider');
    }
    return context;
}

export function AttendanceProvider({ children }) {
    const [attendanceHistory, setAttendanceHistory] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();

    useEffect(() => {
        const fetchAttendance = async () => {
            if (currentUser) {
                try {
                    const { data } = await api.get('/attendance');
                    setAttendanceHistory(data);
                } catch (error) {
                    console.error("Failed to fetch attendance", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchAttendance();
    }, [currentUser]);

    const markAttendance = async (nfcOrId) => {
        try {
            // Determine if it looks like an NFC code or ID.
            // Backend handles both in body.
            const payload = nfcOrId.startsWith('NFC') ? { nfc: nfcOrId } : { employeeId: nfcOrId };
            const { data } = await api.post('/attendance', payload);

            // Refresh history
            const res = await api.get('/attendance');
            setAttendanceHistory(res.data);

            return { success: true, message: data.message };
        } catch (error) {
            return { success: false, message: error.response?.data?.message || 'Failed' };
        }
    };

    const value = {
        attendanceHistory,
        loading,
        markAttendance
    };

    return (
        <AttendanceContext.Provider value={value}>
            {children}
        </AttendanceContext.Provider>
    );
}
