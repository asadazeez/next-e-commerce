import { baseUrl, storageUrl } from "@/utilis/baseUrl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  image: string;
  name: string;
  id:string
};

const card = (props: CardProps) => {
  return (
    <Link href={`/shop/${props.id}` }>
      <div className="relative h-60 w-full flex justify-center hover:shadow-2xl items-center ">
        { storageUrl + props.image ? (
          <Image
            src={ storageUrl + props.image}
            alt="category image"
            className=" object-cover"
            fill
          />
        ) : (
          <div className="bg-gradient-to-r from-indigo-500  rounded-2xl inset-0 absolute"></div>
        )}
        <div className="absolute flex justify-center bg-white rounded-lg px-4 font-extrabold text-2xl text-black  ">
          {props.name}
        </div>
      </div>
    </Link>
  );
};

export default card;
