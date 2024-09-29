/** @format */
import AuthLayout from "@/components/AuthLayout";
import LoginForm from "@/components/LoginForm";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <AuthLayout title="Masuk Sekarang">
      <LoginForm />
    </AuthLayout>
  );
};

export default Page;
