import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import RateReviewIcon from "@material-ui/icons/RateReview";

const Sidebar = () => {
  return (
    <div className="bg-white flex flex-col py-16 w-60">
    
      <Link to="/admin/dashboard" className="no-underline text-[rgba(0,0,0,0.493)] font-light text-base p-8 transition-all duration-500 hover:scale-110">
        <p className="flex items-center">
          <DashboardIcon className="mr-2" /> Dashboard
        </p>
      </Link>
      <Link to="/admin/users" className="no-underline text-[rgba(0,0,0,0.493)] font-light text-base p-8 transition-all duration-500 hover:text-tomato hover:scale-110">
        <p className="flex items-center">
          <PeopleIcon className="mr-2" /> Profile 
        </p>
      </Link>
      <Link to="/admin/orders" className="no-underline text-[rgba(0,0,0,0.493)] font-light text-base p-8 transition-all duration-500 hover:text-tomato hover:scale-110">
        <p className="flex items-center">
        <PeopleIcon className="mr-2" /> Societies 
        </p>
      </Link>
      <Link to="/admin/users" className="no-underline text-[rgba(0,0,0,0.493)] font-light text-base p-8 transition-all duration-500 hover:text-tomato hover:scale-110">
        <p className="flex items-center">
          <PeopleIcon className="mr-2" /> Events
        </p>
      </Link>
      <Link to="/admin/reviews" className="no-underline text-[rgba(0,0,0,0.493)] font-light text-base p-8 transition-all duration-500 hover:text-tomato hover:scale-110">
        <p className="flex items-center">
          <RateReviewIcon className="mr-2" /> Messages
        </p>
      </Link>
    </div>
  );
};

export default Sidebar;
