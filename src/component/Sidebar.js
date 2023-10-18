import React from "react";
import { TbSettings2 } from "react-icons/tb";
import { SiPkgsrc } from "react-icons/si";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
function Sidebar() {
  return (
    <div className="sidebar-top">
      <div className="dashboard">
        <TbSettings2 className="icon-dashboard" />
        Dashboard
      </div>
      <div className="sidebar-middle">
        <div className="dashborad2">dASHBOARD</div>
        <div>
          <SiPkgsrc />
          Product
          <MdOutlineKeyboardArrowRight />
        </div>
        <div>
          Customer
          <MdOutlineKeyboardArrowRight />
        </div>
        <div>
          income
          <MdOutlineKeyboardArrowRight />
        </div>
        <div>
          promote
          <MdOutlineKeyboardArrowRight />
        </div>
        <div>
          help
          <MdOutlineKeyboardArrowRight />
        </div>
      </div>
      <div className="sidebar-bottom">profile</div>
    </div>
  );
}

export default Sidebar;
