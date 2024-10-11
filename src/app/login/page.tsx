"use client";
import React, { useState } from "react";
import Image from "next/image";
import loginjpg from "@public/image/cjGRDUZhw1yFwIDKEwEvn-transformed.jpeg";
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
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(5, { message: "Must be 5 or more characters long" }),
});
type TSchema = z.infer<typeof Schema>;

const Page = () => {
  const [click, setClick] = useState(true);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TSchema>({ resolver: zodResolver(Schema) });

  const submitData = async (data: any) => {
    const response = await userApi.loginUser(data);

    if (!response.data.success) {
      toast.error(response.data.message);
    } else {
      toast.success(response.data.message);
      window.localStorage.setItem("accessToken", response.data.accessToken);
      Cookies.set("accessToken", response.data.accessToken);
      router.push("/");
      router.refresh();
    }
  };
  return (
    <div className="relative flex justify-center items-center">
      <Image src={loginjpg} alt="login Image" className="h-[51rem] relative" />
      <div className="absolute flex flex-col items-center bg-white   gap-1 p-7 sm:p-10 md:px-32">
        <div className="md:text-2xl text-[#2d2d2d] josefin-sans-bold font-extrabold">
          SIGN INTO EXPLORE
        </div>
        <div className="font-light md:text-lg text-sm josefin-sans-unique">
          Kindly submit your details!
        </div>

        <form onSubmit={handleSubmit(submitData)}>
          <div className="mt-3">
            <CostumInput
              type="Email"
              placeholder="E-MAIL"
              error={errors.email?.message}
              register={register("email")}
              className="border-solid border-[1px] text-[12px] w-full  mt-2 p-2 "
            />

            <div className=" relative  ">
              <CostumInput
                type={click == true ? "Password" : "text"}
                placeholder="PASSWORD"
                error={errors.password?.message}
                register={register("password")}
                className="border-solid border-[1px] text-[12px] w-full mt-2 p-2 "
              />

              {click == true ? (
                <EyeOpen
                  className="absolute size-4  right-3 top-[1.1rem]"
                  onClick={() => setClick(false)}
                />
              ) : (
                <EyeClose
                  className="absolute size-4 right-3 top-[1.1rem]"
                  onClick={() => setClick(true)}
                />
              )}
            </div>
          </div>
          <div className="mt-3 ">
            <button
              type="submit"
              className="bg-[#2d2d2d] font-light josefin-sans-unique text-white   w-full px-24 py-1  hover:bg-[#666666]"
            >
              SIGN IN
            </button>
          </div>
        </form>

        <div className="flex font-semibold josefin-sans-unique text-sm mt-3 gap-1 ">
          Don&apos;t have an account?
          <Link
            href={"sign-up"}
            className="text-violet-600 hover:text-violet-900"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
