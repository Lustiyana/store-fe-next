/** @format */

import React from "react";

interface TabMenuProps {
  name: string;
  active?: boolean;
  className?: string;
};

const TabMenu: React.FC<TabMenuProps> = ({ name, active, className }) => {
  return (
    <div
      className={`${className} ${
        active ? "bg-[#91DDCF]" : ""
      } px-16 py-4 rounded-lg text-xl w-full font-semibold`}
    >
      <p>{name}</p>
    </div>
  );
};

export default TabMenu;
