import { useNavigate } from 'react-router-dom';

import Sidebar from "../components/sidebar"

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/auth/authSlice";
import { logoutUser } from "../api.js";

const Home = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const userInfo = useSelector((state) => state.auth.userInfo);

  const handleLogout = async () =>{
    let apiRes = await logoutUser();
    console.log("API Response", apiRes);
    dispatch(logout());
    navigate('/login');
  }

  return (
    <div className="flex justify-between">
      <Sidebar/>

      <div className="flex mt-2">
        <div>{userInfo?.name}</div>
        <div className="mx-4">{userInfo?.email}</div>
        <img className="h-10 w-10 rounded-full" src={userInfo?.image} alt="userImage" referrerPolicy="no-referrer" />
        <div>
          <button className="mx-4 px-4 py-1 bg-green-600 rounded text-white" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Home
