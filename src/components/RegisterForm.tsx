/** @format */
"use client";

import React from "react";
import TextInput from "./TextInput";
import { icons } from "@/constants/icons";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerUser } from "@/actions/authActions";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    try {
      const res = await registerUser(data);
      toast.success(res.message);
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-8"
      method="POST"
      action=""
    >
      <div className="flex flex-col gap-2">
        <TextInput
          placeholder="Full Name"
          icon={icons.USER}
          {...register("fullname", { required: "Username is required" })}
          error={errors.fullname?.message}
        />
        <TextInput
          placeholder="Email Address"
          icon={icons.EMAIL}
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
          placeholder="Password"
          type="password"
          icon={icons.PASSWORD}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          error={errors.password?.message}
        />
        <TextInput
          placeholder="Confirm Password"
          type="password"
          icon={icons.PASSWORD}
          {...register("confirm_password", {
            required: "Confirm Password is required",
            validate: (value) => {
              const { password } = getValues();
              return value === password || "Passwords must match";
            },
          })}
          error={errors.confirm_password?.message}
        />
        <TextInput
          placeholder="Phone Number"
          icon={icons.PHONE}
          {...register("phone_number", {
            required: "Phone Number is required",
            pattern: {
              value: /^\d{12}$/,
              message: "Invalid phone number",
            },
          })}
          error={errors.phone_number?.message}
        />
      </div>
      <div className="flex flex-col gap-2">
        <button className="btn btn-accent w-full" type="submit">
          Sign Up
        </button>
        <Link href="/login" className="btn btn-ghost w-full">
          Sign In
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;
