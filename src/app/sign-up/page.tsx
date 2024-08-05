import React from "react";
import Image from "next/image";
import loginjpg from "@public/image/vecteezy_modern-blue-wavy-shape-geometric-abstract-curve-line_7546115-1.jpg";
import Link from "next/link";
import { link } from "fs";
import CostumInput from "@components/CostumInput";

const page = () => {
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
        <CostumInput type="text" placeholder="Name" />
        <CostumInput type="Email" placeholder="E-mail" />
        <CostumInput type="Password" placeholder="Password" />
        <CostumInput type="Password" placeholder="Confirm Password" />

        <button className="bg-yellow font-semibold text-sm px-16 py-1 rounded-md hover:bg-orange">
          Sign Up
        </button>
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
