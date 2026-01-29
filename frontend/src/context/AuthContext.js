import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import api from '../services/api';

export const AuthContext = createContext();

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const loadUser = () => {
            try {
                const storedUser = localStorage.getItem('currentUser');
                if (storedUser) {
                    const user = JSON.parse(storedUser);
                    // Optional: Validate token with backend here
                    setCurrentUser(user);
                }
            } catch (error) {
                console.error("Failed to load user", error);
                localStorage.removeItem('currentUser');
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, []);

    const login = async (employeeId, password) => {
        try {
            const { data } = await api.post('/auth/login', { employeeId, password });
            setCurrentUser(data);
            localStorage.setItem('currentUser', JSON.stringify(data));
            return { success: true };
        } catch (error) {
            console.error("Login failed", error.response?.data?.message || error.message);
            return {
                success: false,
                message: error.response?.data?.message || 'Login failed'
            };
        }
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem('currentUser');
        router.push('/login');
    };

    const value = {
        currentUser,
        loading,
        login,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
