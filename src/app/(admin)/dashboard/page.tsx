/** @format */

import React from "react";
import Summary from "./components/organisme/Summary";
import RecentTransactions from "./components/organisme/RecentTransactions";
import TemplatePage from "@/components/template/TemplatePage";

const Page = () => {
  return (
    <TemplatePage>
      <Summary/>
      <RecentTransactions/>
    </TemplatePage>
  )
};

export default Page;
