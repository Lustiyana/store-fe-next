/** @format */

"use client";

import TabMenu from "@/components/atom/TabMenu";
import { menu } from "@/data/menu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const SidebarMenu = () => {
  const pathname = usePathname();

  return (
    <div>
      {menu.map((item) => (
        <div key={item.id}>
          <Link href={item.url}>
            <TabMenu
              name={item.name}
              active={pathname == item.url}
              className={pathname == item.url ? "text-white" : "text-gray-400"}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default SidebarMenu;
