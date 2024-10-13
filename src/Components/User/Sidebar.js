import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { HomeRounded, MessageOutlined } from "@material-ui/icons";
import { FeedOutlined } from "@mui/icons-material";

const Sidebar = () => {
  const location = useLocation(); // To get the current path

  return (
    <div className="bg-white flex flex-col py-16 w-52 h-screen border-r-2">
      <Link
        to="/user/Profile"
        className={`no-underline text-base font-light p-8 flex flex-col items-center ${
          location.pathname === "/user/Profile" ? "bg-blue-100" : "text-[rgba(0,0,0,0.493)] hover:text-black"
        } transition-all duration-500 hover:scale-110`}
      >
        <HomeRounded className="text-blue-500 mb-2" />
        <p>My Profile</p>
      </Link>

      <Link
        to="/user/dashboard"
        className="no-underline text-[rgba(0,0,0,0.493)] font-light text-base p-8 flex flex-col items-center transition-all duration-500 hover:text-black hover:scale-110"
      >
        <DashboardIcon className="mb-2" />
        <p>Dashboard</p>
      </Link>

      <Link
        to="/admin/orders"
        className="no-underline text-[rgba(0,0,0,0.493)] font-light text-base p-8 flex flex-col items-center transition-all duration-500 hover:text-black hover:scale-110"
      >
        <MessageOutlined className="mb-2" />
        <p>Society Chats</p>
      </Link>

      <Link
        to="/admin/users"
        className="no-underline text-[rgba(0,0,0,0.493)] font-light text-base p-8 flex flex-col items-center transition-all duration-500 hover:text-black hover:scale-110"
      >
        <FeedOutlined className="mb-2" />
        <p>User Feed</p>
      </Link>

      <div className="mt-auto">
        <Link
          to="/settings"
          className="no-underline text-[rgba(0,0,0,0.493)] font-light text-base p-8 flex flex-col items-center transition-all duration-500 hover:text-black hover:scale-110"
        >
          <span className="mb-2">⚙️</span>
          <p>Settings</p>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
