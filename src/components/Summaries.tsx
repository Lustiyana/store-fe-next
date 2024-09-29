/** @format */

import React from "react";
import Card from "./Card";

const SummaryCard = () => (
  <div className="card bg-base-100 w-full shadow-sm border">
    <div className="card-body">
      <div className="flex items-center">
        <div>
          <h2 className="card-title">Card title!</h2>
          <p className="text-xs">
            If a dog chews shoes whose shoes does he choose?
          </p>
        </div>
        <h1 className="text-6xl">50</h1>
      </div>
    </div>
  </div>
);

const Summaries = () => {
  return (
    <section className="grid grid-cols-3 gap-4">
      <SummaryCard />
      <SummaryCard />
      <SummaryCard />
    </section>
  );
};

export default Summaries;
