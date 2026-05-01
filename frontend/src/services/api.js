import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const generateProject = async (prompt) => {
    try {
        const response = await api.post('/projects/generate', prompt);
        return response.data;
    } catch (error) {
        console.error('Error generating project:', error);
        throw error;
    }
};

export default api;
