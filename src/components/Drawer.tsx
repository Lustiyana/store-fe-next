/** @format */

"use client";
import { menu } from "@/data/menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Drawer = () => {
  const pathname = usePathname();
  return (
    <div className="drawer-side">
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu  text-base-content min-h-full w-80 p-4 border-r">
        <li className="text-center font-bold text-3xl">MOStore</li>
        {menu.map((item, index) => (
          <li
            key={index}
            className={`${pathname == item.url ? "bg-accent rounded-md" : ""}`}
          >
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Drawer;
