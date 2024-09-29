/** @format */

import AuthLayout from "@/components/AuthLayout";
import RegisterForm from "@/components/RegisterForm";
import React from "react";

const Page = () => {
  return (
    <AuthLayout title="Daftar Sekarang">
      <RegisterForm />
    </AuthLayout>
  );
};

export default Page;
