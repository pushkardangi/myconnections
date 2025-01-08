import { useState } from "react";

import InputField from "../components/InputField";
import GoogleLoginBtn from "../components/GoogleLoginBtn";
import StatusGlobe from "../components/StatusGlobe";

const Login = () => {
    // State for errors
    const [statusInfo, setStatusInfo] = useState({
        status: "default",
        message: "Happy Productive Day!",
    });

    // State for form data
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatusInfo({
                status: "error",
                message: "Invalid email address!",
            });

            setTimeout(() => {
                setStatusInfo({
                    status: "default",
                    message: "Happy Productive Day!",
                });
            }, 5000);
            return;
        }

        // Simulate backend call
        try {
            const response = await axios.post(
                "https://your-backend-api.com/signup",
                formData
            );
            console.log("Form submitted successfully:", response.data);
        } catch (err) {
            console.error("Error submitting form:", err);
            setStatusInfo({
                status: "error",
                message: "Failed to submit the form. Please try again!",
            });
        }
    };

    const handleForgotPassword = () => {
        setStatusInfo({
            status: "error",
            message: "Sorry!! This feature is in development!",
        });

        setTimeout(() => {
            setStatusInfo({
                status: "default",
                message: "Happy Productive Day!",
            });
        }, 5000);
    };

    return (
        <div className="flex h-screen bg-green-100">
            <div className="m-auto">
                <div className="grid md:grid-cols-2 bg-gray-900 rounded-lg">
                    {/* Form Section */}
                    <div className="p-10 mx-8">
                        <div className="text-center my-6 mx-20">
                            <div className="text-zinc-500 my-4 text-4xl font-bold">
                                Login
                            </div>
                            <div className="text-zinc-400 font-thin">
                                Log in to your account
                            </div>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <InputField
                                id="email"
                                label="Email"
                                type="email"
                                placeholder="Enter your email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <InputField
                                id="password"
                                label="Password"
                                type="password"
                                placeholder="Enter your password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                            <div className="text-right">
                                <div
                                    className="text-cyan-400 text-xs cursor-pointer"
                                    onClick={handleForgotPassword}
                                >
                                    Forgot password
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="p-2 my-4 flex w-full justify-center bg-green-600 hover:bg-green-500 text-white font-medium rounded"
                            >
                                Login
                            </button>
                        </form>
                        <div className="text-center my-4">
                            <GoogleLoginBtn />
                        </div>

                        <div className="text-center text-white">or</div>

                        <div className="text-center my-4">
                            <button className="flex justify-center items-center w-full bg-white hover:bg-green-200 p-2 rounded-md">
                                Create an account
                            </button>
                        </div>
                    </div>

                    {/* Decorative Section */}
                    <div className="hidden md:flex justify-center items-center">
                        <StatusGlobe statusInfo={statusInfo} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
