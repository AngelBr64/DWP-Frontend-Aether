import api from './api';

export const login = async (email, password) => {
    try {
        const response = await api.post('/login', { email, password });
        localStorage.setItem('token', response.data.token);
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al iniciar sesión";
    }
};

export const register = async (email, password) => {
    try {
        const response = await api.post('/register', { email, password });
        return response.data;
    } catch (error) {
        throw error.response?.data?.message || "Error al registrarse";
    }
};
