import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col justify-between bg-gray-900 text-white shadow-lg">
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
