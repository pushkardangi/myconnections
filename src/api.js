import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.MODE === "production"
        ? "https://myconnections-backend.onrender.com/auth"
        : "http://localhost:8080/auth",
    withCredentials: true,
});

export const googleAuth = async (code) => {
    if (!code) {
        throw new Error("Authorization code is required.");
    }

    try {
        const response = await api.get(`/google?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("Google Auth Error:", error.message);
        throw error;
    }
};
