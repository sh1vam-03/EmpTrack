import { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';
import { useAuth } from './AuthContext';

export const EmployeeContext = createContext();

export function useEmployees() {
    const context = useContext(EmployeeContext);
    if (!context) {
        throw new Error('EmployeeContext must be used within an EmployeeProvider');
    }
    return context;
}

export function EmployeeProvider({ children }) {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth(); // Depend on auth

    useEffect(() => {
        const fetchEmployees = async () => {
            // Only fetch if authenticated and authorized (Admin/HR)
            // But simpler to just try fetching, API will reject if not allowed.
            // Or rely on currentUser role.
            if (currentUser && (currentUser.role === 'Admin' || currentUser.role === 'HR')) {
                try {
                    const { data } = await api.get('/employees');
                    setEmployees(data);
                } catch (error) {
                    console.error("Failed to fetch employees", error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, [currentUser]);

    const addEmployee = async (employeeData) => {
        try {
            const { data } = await api.post('/employees', employeeData);
            setEmployees(prev => [...prev, data]);
            return { success: true };
        } catch (error) {
            console.error("Error adding employee", error);
            throw error;
        }
    };

    const updateEmployee = async (id, updatedData) => {
        try {
            const { data } = await api.put(`/employees/${id}`, updatedData);
            setEmployees(prev =>
                prev.map(emp => emp._id === id ? data : emp)
            );
            return { success: true };
        } catch (error) {
            console.error("Error updating employee", error);
            throw error;
        }
    };

    const deleteEmployee = async (id) => {
        try {
            await api.delete(`/employees/${id}`);
            setEmployees(prev => prev.filter(emp => emp._id !== id));
            return { success: true };
        } catch (error) {
            console.error("Error deleting employee", error);
            throw error;
        }
    };

    const value = {
        loading,
        employees,
        addEmployee,
        updateEmployee,
        deleteEmployee
    };

    return (
        <EmployeeContext.Provider value={value}>
            {children}
        </EmployeeContext.Provider>
    );
}
