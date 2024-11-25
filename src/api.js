import axios from "axios";

const api = axios.create({
    baseURL: "https://myconnections-backend.onrender.com/auth"
    // baseURL: "http://localhost:8080/auth" // for development
    
});

export const googleAuth = (code) => api.get(`/google?code=${code}`);
