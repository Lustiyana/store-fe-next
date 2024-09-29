/** @format */
"use client";
import { menu } from "@/data/menu";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

const DrawerContent = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const selectedMenu = menu.find((item) => item.url == pathname);
  return (
    <div className="drawer-content">
      <div className="p-16 flex flex-col gap-8">
        <div>
          <h3 className="text-3xl font-semibold">{selectedMenu?.name}</h3>
          <p>{selectedMenu?.caption}</p>
        </div>
        {children}
      </div>
      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden"
      >
        Open drawer
      </label>
    </div>
  );
};

export default DrawerContent;
