/** @format */

import CaptionPage from "@/components/atom/CaptionPage";
import React from "react";
import SummaryValue from "../../atom/SummaryValue";

const ItemSummary = ({ item }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <CaptionPage caption={item.name} />
      <SummaryValue value={item.value} />
    </div>
  );
};

export default ItemSummary;
