import { useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api"; // (3)

import { useDispatch } from "react-redux";
import { login } from "../redux/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const responseGoogle = async (authResult) =>{
    try{
      if(authResult["code"]){
        const result = await googleAuth(authResult['code']); // (4) sends code to the backend

        const { email, name, image } = result.user;
        const token = result.token;
        
        const userInfo = {email, name, image, token};

        dispatch(login(userInfo));

        navigate('/home')
      } // (3)
    }
    catch (error){
      console.error("Error while requesting google code:", error)
    }
  }

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: responseGoogle, // (2) request authentication code
    onError: responseGoogle,
    flow: "auth-code"
  })

  return (
    <div className="h-screen flex items-center justify-center">
      <button
        onClick={handleGoogleLogin} // (1)
        type="button"
        aria-label="Login with Google"
        className="px-5 py-2 rounded-lg text-white bg-green-700 hover:bg-green-600 transition-all duration-200 ease-in-out active:scale-95"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
