import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Sidebar from "../components/sidebar"

const Home = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState(null);

  useEffect(()=>{
    const data = localStorage.getItem('user-info');
    const userData = JSON.parse(data);
    setUserInfo(userData);
  },[]);

  const handleLogout = () =>{
    localStorage.removeItem('user-info');
    navigate('/login');
  }

  return (
    <div className="flex justify-between">
      <Sidebar/>

      <div className="flex mt-2">
        <div>{userInfo?.name}</div>
        <div className="mx-4">{userInfo?.email}</div>
        <img className="h-10 w-10 rounded-full " src={userInfo?.image} alt="userImage" />
        <div>
          <button className="mx-4 px-4 py-1 bg-green-600 rounded text-white" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Home
