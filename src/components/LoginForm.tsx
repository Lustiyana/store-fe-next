/** @format */
"use client";
import Link from "next/link";
import React from "react";
import TextInput from "./TextInput";
import { icons } from "@/constants/icons";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { loginUser } from "@/actions/authActions";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      await loginUser(data);
      router.replace("/dashboard");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2">
        <TextInput
          icon={icons.EMAIL}
          placeholder="Email"
          type="text"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email address",
            },
          })}
          error={errors.email?.message}
        />
        <TextInput
          icon={icons.PASSWORD}
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password?.message}
        />
      </div>
      <div className="flex flex-col gap-2">
        <button className="btn btn-accent w-full">Sign In</button>
        <Link href="/register" className="btn btn-ghost w-full">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
