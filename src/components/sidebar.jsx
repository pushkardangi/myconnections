import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="h-screen w-16 flex flex-col justify-between bg-gray-900 text-white shadow-lg">
      <div className="flex flex-col">
        <SideBarIcon icon={<BsPlus size={38} />} text="Add Card" />
        <SideBarIcon icon={<FaUser size={21} />} text="People" />
        <SideBarIcon icon={<BsGearFill size={24} />} text="Settings" />
      </div>
      <SideBarIcon icon={<BsFillLightningFill size={24} />} text="Light Mode" />
    </div>
  );
}

const SideBarIcon = ({ icon, text }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
