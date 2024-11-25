import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const responseGoogle = async (authResult) =>{
    try{
      if(authResult["code"]){
        const result = await googleAuth(authResult['code']);

        const { email, name, image } = result.data.user;
        
        const token = result.data.token;
        const userData = {email, name, image, token};

        localStorage.setItem('user-info', JSON.stringify(userData));

        navigate('/home')
      } // (3)
    }
    catch (error){
      console.error("Error while requesting google code:", error)
    }

  }

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: responseGoogle, // (2)
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
