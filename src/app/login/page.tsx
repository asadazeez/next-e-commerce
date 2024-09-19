"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginjpg from "@public/image/vecteezy_modern-blue-wavy-shape-geometric-abstract-curve-line_7546115-1.jpg";
import Link from "next/link";
import { StaticImageData } from "next/image";
import eyeclose from "@app/svg/eye-icons/eye-close.png";
import eyeopen from "@app/svg/eye-icons/eye-open.png";
import CostumInput from "@/components/CostumInput";
import EyeOpen from "../../svg/EyeOpen";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CustomInput from "@/components/CostumInput";
import EyeClose from "@/svg/EyeClose";
import { userApi } from "../api/userApi";
import toast from "react-hot-toast";
import Cookies  from "js-cookie";
import { useRouter } from "next/navigation";

const Schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, { message: "Must be 5 or more characters long" }),
});
type TSchema = z.infer<typeof Schema>;

const Page = () => {
  const [click,setClick]=useState(true);
  const router = useRouter()

  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSchema>({ resolver: zodResolver(Schema) });

  const submitData = async (data:any)  => {
    const response = await userApi.loginUser(data)

      if (!response.data.success) {
        toast.error(response.data.message)
       
      }else{
        toast.success(response.data.message)
        window.localStorage.setItem("accessToken",response.data.accessToken)
        Cookies.set("accessToken",response.data.accessToken)
        router.push('/')
        router.refresh()
        
      }


  };
  return (
    <div className="relative flex justify-center items-center">
      <Image src={loginjpg} alt="login Image" className="h-[45rem]" />
      <div className="absolute flex flex-col items-center bg-white/60  gap-2 rounded-xl p-10 px-32">
        <div className="text-2xl text-violet-900 font-extrabold">
          Log in to your account
        </div>
        <div className="font-extralight text-base">
          Please enter your details!
        </div>

        <form onSubmit={handleSubmit(submitData)}>
          <div className="mt-6">
            <CostumInput
              type="Email"
              placeholder="E-mail"
              error={errors.email?.message}
              register={register("email")}
              className="border-solid border-[1px] pr-14 mt-2 rounded-md "
            />

            <div className=" relative flex justify-end items-center ">
              <CostumInput
                type={click ==true ?"Password":"text"}
                placeholder="Password"
                error={errors.password?.message}
                register={register("password")}
                className="border-solid border-[1px] pr-14 mt-2 rounded-md "
              />
{click==true?
              <EyeOpen className="absolute size-4 flex mr-2 bottom-[0.3rem]" onClick={() => setClick(false)}/>:
                <EyeClose  className="absolute size-4 flex mr-2 bottom-[0.3rem]" onClick={() => setClick(true)} />
}
            </div>
          </div>

          <div className="mt-3 ">
            <button
              type="submit"
              className="bg-yellow font-semibold px-24 rounded-md hover:bg-orange"
            >
              Log In
            </button>
          </div>
        </form>

        <div className="flex font-semibold text-xs mt-3 gap-1 ">
          Don&apos;t have an account?
          <Link
            href={"sign-up"}
            className="text-violet-600 hover:text-violet-800"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
