/** @format */

"use client";

import CaptionPage from "@/components/atom/CaptionPage";
import TitlePage from "@/components/atom/TitlePage";
import { menu } from "@/data/menu";
import { Menu } from "@/types/data";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const HeaderText = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [dataPage, setDataPage] = useState<Menu>({
    id: 0,
    name: "",
    caption: "",
    url: "",
  });

  useEffect(() => {
    const data: Menu | undefined = menu.find((item) => item.url == pathname);

    setDataPage(data || dataPage);
  }, [pathname]);
  return (
    <div className="flex flex-col gap-4">
      <TitlePage name={dataPage?.name} />
      <CaptionPage caption={dataPage?.caption} />
    </div>
  );
};

export default HeaderText;
