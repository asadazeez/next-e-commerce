"use client";
import React from "react";
import Image from "next/image";
import loginjpg from "@public/image/cjGRDUZhw1yFwIDKEwEvn-transformed.jpeg";
import Link from "next/link";
import CostumInput from "@components/CostumInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { userApi } from "../api/userApi";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Schema = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .refine((data) => data.trim() !== "", {
        message: "Name cannot be an empty string",
      }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(5, { message: "Must be 5 or more characters long" }),
    confirmPassword: z
      .string()
      .min(5, { message: "Must be 5 or more characters long" }),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

type TSchema = z.infer<typeof Schema>;

const Page = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSchema>({ resolver: zodResolver(Schema) });

  const submitData = async (data:any) => {
    
try {
  
  const response = await userApi.newUser(data)
  
    if (!response.data.success) {
      toast.error(response.data.message)
     
    }else{
      
      toast.success(response.data.message)
      window.localStorage.setItem("accessToken", response.data.accessToken);
      Cookies.set("accessToken", response.data.accessToken);
      router.push("/");
      router.refresh();
    }
} catch (error) {
  console.log(error)
  
}

  };
  return (
    <div className="relative flex justify-center items-center">
      <Image src={loginjpg} alt="login Image" className="h-[51rem]" />
      <div className="absolute flex flex-col items-center bg-white  gap-1  p-10 px-24">
        <div className="md:text-2xl text-[#2d2d2d] josefin-sans-bold font-extrabold">
          CREATE YOUR PROFILE
        </div>
        <div className="font-light josefin-sans-unique text-lg pb-5">
          Please enter your details!
        </div>
        <form onSubmit={handleSubmit(submitData)}>
          <CostumInput
            type="text"
            placeholder="NAME"
            register={register("name")}
            error={errors.name?.message}
            className="border-solid border-[1px] text-[12px] w-full  mt-2 p-2  "
          />
          <CostumInput
            type="Email"
            placeholder="E-MAIL"
            register={register("email")}
            error={errors.email?.message}
            className="border-solid border-[1px] text-[12px] w-full  mt-2 p-2  "
          />

          <CostumInput
            type="Password"
            placeholder="PASSWORD"
            error={errors.password?.message}
            register={register("password")}
            className="border-solid border-[1px] text-[12px] w-full  mt-2 p-2  "
          />

          <CostumInput
            type="Password"
            placeholder="CONFIRM PASSWORD"
            error={errors.confirmPassword?.message}
            register={register("confirmPassword")}
            className="border-solid border-[1px] text-[12px] w-full  mt-2 p-2  "
          />

          <button className="bg-[#2d2d2d] px-24 font-light josefin-sans-unique text-white mt  w-full py-1 mt-3  hover:bg-[#666666]">
            SIGN UP
          </button>
        </form>
        <div className="flex font-semibold josefin-sans-unique text-sm mt-3 gap-1 ">
         Have an account?
          <Link
            href={"login"}
            className="text-violet-600 hover:text-violet-900"
          >
            Log In
          </Link>{" "}
        </div>
      </div>
    </div>
  );
};

export default Page;
