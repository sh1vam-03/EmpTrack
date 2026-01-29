import { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api';
import { useAuth } from './AuthContext';

export const TaskContext = createContext();

export function useTasks() {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('TaskContext must be used within a TaskProvider');
    }
    return context;
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();

    useEffect(() => {
        const fetchTasks = async () => {
            if (currentUser) {
                try {
                    const { data } = await api.get('/tasks');
                    setTasks(data);
                } catch (error) {
                    console.error("Failed to fetch tasks", error);
                } finally {
                    setLoading(false);
                }
            }
        };
        fetchTasks();
    }, [currentUser]);

    const assignTask = async (taskData) => {
        try {
            const { data } = await api.post('/tasks', taskData);
            setTasks(prev => [...prev, data]);
            return { success: true };
        } catch (error) {
            console.error(error);
            return { success: false };
        }
    };

    const updateTaskStatus = async (taskId, status) => {
        try {
            const { data } = await api.put(`/tasks/${taskId}`, { status });
            setTasks(prev => prev.map(t => t._id === taskId ? data : t));
            return { success: true };
        } catch (error) {
            console.error(error);
            return { success: false };
        }
    };

    const value = {
        tasks,
        loading,
        assignTask,
        updateTaskStatus
    };

    return (
        <TaskContext.Provider value={value}>
            {children}
        </TaskContext.Provider>
    );
}
