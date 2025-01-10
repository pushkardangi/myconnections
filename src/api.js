import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.MODE === "production"
        ? "https://myconnections-backend.onrender.com"
        : "http://localhost:3000",
    withCredentials: true,
});

export const googleAuth = async (code) => {
    if (!code) {
        throw new Error("Authorization code is required.");
    }

    try {
        const response = await api.get(`/auth/google?code=${code}`);
        return response.data;
    } catch (error) {
        console.error("googleAuth Error:", error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        const response = await api.get("/auth/logout");
        return response;
    } catch (error) {
        console.log("Error while logging out!", error);
    }
}
