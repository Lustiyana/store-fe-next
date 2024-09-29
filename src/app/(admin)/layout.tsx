/** @format */

import ButtonAdd from "@/components/ButtonAdd";
import Drawer from "@/components/Drawer";
import DrawerContent from "@/components/DrawerContent";
import React, { ReactNode } from "react";

const LayoutPage = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <DrawerContent>
          {children}
          <ButtonAdd />
        </DrawerContent>
        <Drawer />
      </div>
    </>
  );
};

export default LayoutPage;
