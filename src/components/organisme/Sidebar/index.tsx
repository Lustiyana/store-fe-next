/** @format */

import LogoMenu from "@/components/molekul/LogoMenu";
import LogoutMenu from "@/components/molekul/LogoutMenu";
import SidebarMenu from "@/components/molekul/SidebarMenu";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between h-screen py-12 px-8 w-1/4">
      <div className="flex flex-col gap-8">
        <LogoMenu />
        <SidebarMenu />
      </div>
      <LogoutMenu />
    </div>
  );
};

export default Sidebar;
