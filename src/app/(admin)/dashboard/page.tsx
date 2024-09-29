/** @format */

import Summaries from "@/components/Summaries";
import TableProducts from "@/components/TableProducts";
import React from "react";

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Summaries />
      <TableProducts />
    </div>
  );
};

export default Page;
