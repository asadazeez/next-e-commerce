import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type CardProps = {
  image: StaticImageData;
  text: string;
};

const card = (props: CardProps) => {
  return (
    <Link href={`/shop/${props.text}`}>
      <div className="relative h-60 w-full flex justify-center hover:shadow-2xl items-center ">
        {props.image ? (
          <Image
            src={props.image}
            alt="category image"
            className=" object-cover"
            fill
          />
        ) : (
          <div className="bg-gradient-to-r from-indigo-500  rounded-2xl inset-0 absolute"></div>
        )}
        <div className="absolute flex justify-center font-extrabold text-2xl text-white  ">
          {props.text}
        </div>
      </div>
    </Link>
  );
};

export default card;
