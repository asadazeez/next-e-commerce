"use client";
import React from "react";
import Image from "next/image";
import loginjpg from "@public/image/vecteezy_modern-blue-wavy-shape-geometric-abstract-curve-line_7546115-1.jpg";
import Link from "next/link";
import { link } from "fs";
import CostumInput from "@components/CostumInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const Schema = z.object({
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .refine((data) => data.trim() !== "", {
      message: "Name cannot be an empty string",
    }),
  emailAddress: z.string().email({ message: "Invalid email address" }),
  pswrd: z.string().min(5, { message: "Must be 5 or more characters long" }),
  confirmPassword: z
    .string()
    .min(5, { message: "Must be 5 or more characters long" }),
}).superRefine(({ confirmPassword, pswrd }, ctx) => {
  if (confirmPassword !== pswrd) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ['confirmPassword']
    });
  }
});
  
type TSchema = z.infer<typeof Schema>;

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSchema>({ resolver: zodResolver(Schema) });
  console.log(errors);

  const submitData = () => {};
  return (
    <div className="relative flex justify-center items-center">
      <Image src={loginjpg} alt="login Image" className="h-[45rem]" />
      <div className="absolute flex flex-col items-center bg-white/60  gap-1 rounded-xl p-5 px-16">
        <div className="text-lg text-violet-900 font-extrabold">
          Create a new account
        </div>
        <div className="font-extralight text-xs pb-5">
          Please enter your details!
        </div>
        <form onSubmit={handleSubmit(submitData)}>
          
          <CostumInput
            type="text"
            placeholder="Name"
            register={register("name")}
            error={errors.name?.message}
          />
          <CostumInput
            type="Email"
            placeholder="E-mail"
            register={register("emailAddress")}
            error={errors.emailAddress?.message}
          />

          <CostumInput
            type="Password"
            placeholder="Password"
            error={errors.pswrd?.message}
            register={register("pswrd")}
          />

          <CostumInput
            type="Password"
            placeholder="Confirm Password"
            error={errors.confirmPassword?.message}
            register={register("confirmPassword")}
          />

          <button className="bg-yellow font-semibold text-sm px-24 py-1 mt-2 rounded-md hover:bg-orange">
            Sign Up
          </button>
          
        </form>
        <div className="flex font-semibold text-xs mt-3 gap-1 ">
          Already have an account?{" "}
          <Link
            href={"login"}
            className="text-violet-500 hover:text-violet-800"
          >
            Log In
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default page;
