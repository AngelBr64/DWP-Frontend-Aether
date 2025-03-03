import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Cambia esto según tu backend
    headers: { 'Content-Type': 'application/json' },
});

export default api;
