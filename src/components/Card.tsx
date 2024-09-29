/** @format */

import React, { ReactNode } from "react";
interface CardProps {
  title?: string;
  children: ReactNode;
  action?: ReactNode;
}
const Card: React.FC<CardProps> = ({ title, children, action }) => {
  return (
    <div className="card bg-base-100 min-w-96 shadow-xl h-full flex w-full">
      <div className="card-body">
        <div className="flex items-center justify-between">
          <h2 className="card-title mb-8">{title}</h2>
          <div>{action}</div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Card;
