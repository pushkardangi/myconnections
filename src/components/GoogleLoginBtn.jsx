import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api.js"; // (3)

import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";

const GoogleLoginBtn = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();

    const responseGoogle = async (authResult) => {
        try {
            if (authResult["code"]) {
                const result = await googleAuth(authResult["code"]); // (4) sends code to the backend

                const userInfo = result.user;

                dispatch(login(userInfo));

                navigate("/home");
            } // (3)
        } catch (error) {
            console.error("Error while requesting google code:", error);
        }
    };

    const handleGoogleLogin = useGoogleLogin({
        onSuccess: responseGoogle, // (2) request authentication code
        onError: responseGoogle,
        flow: "auth-code",
    });

    return (
        <button
            className="flex justify-center items-center w-full bg-white hover:bg-green-200 p-2 rounded-md"
            onClick={handleGoogleLogin}
        >
            <img
                src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                alt="Google Logo"
                className="h-5 w-5 mr-2"
            />
            Google
        </button>
    );
};

export default GoogleLoginBtn;
