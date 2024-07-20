/** @format */

import Image from "next/image";
import React from "react";
import TextItem from "../../atom/TextItem";
import ArrowRightIcon from "@/components/atom/icons/ArrowRightIcon";

const ItemRecentTransaction = ({item}: any) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
        <Image
          src={item?.image?.url}
          alt={item?.image?.alt}
          width={32}
          height={32}
          className="rounded-md"
        />
        <TextItem value={item?.productName}/>
      </div>
      <TextItem value={item?.userName}/>
      <TextItem value={item?.date}/>
      <ArrowRightIcon/>
    </div>
  );
};

export default ItemRecentTransaction;
