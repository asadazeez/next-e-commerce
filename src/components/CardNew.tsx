"use client";
import { storageUrl } from "@/utilis/baseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  image: string;
  id: string;
  name: string;
};

const CardNew = (props: CardProps) => {
  return (
    <Link href={`/shop/${props.id}`}>
      <div className=" relative h-[200px] p-[0.5rem]  rounded-[8px]  transform skew-x-[10deg] transition-all ease-in-out duration-[400ms] overflow-hidden w-full hover:h-[456px] hover:skew-x-0 hover:transform">
        <Image
          src={storageUrl + props.image}
          fill
          alt="Category Image"
          className="object-cover"
        />

        <div className=" absolute inset-0 josefin-sans-bold text-white bg flex items-center justify-center ">
          {props.name}
        </div>
      </div>
    </Link>
  );
};

export default CardNew;