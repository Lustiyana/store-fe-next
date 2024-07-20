/** @format */

import Card from "@/components/atom/Card";
import React from "react";
import ItemSummary from "../../molekul/ItemSummary";

const summary = [
  {
    name: "Customer",
    value: "15,209",
  },
  {
    name: "Revenue",
    value: "$931,290",
  },
  {
    name: "Transaction",
    value: "22,409,399",
  },
];

const Summary = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      {summary.map((item) => (
        <Card>
          <ItemSummary item={item} />
        </Card>
      ))}
    </div>
  );
};

export default Summary;
