/** @format */

import React, { ReactNode } from "react";
import Card from "./Card";

interface AuthLayoutProps {
  title: string;
  children: ReactNode;
}
const AuthLayout: React.FC<AuthLayoutProps> = ({ title, children }) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <Card title={title}>{children}</Card>
      </div>
    </div>
  );
};

export default AuthLayout;
