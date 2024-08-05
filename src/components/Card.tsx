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
    <div className="relative flex justify-center items-center mt-20">
      <Image
        src={props.image}
        alt="category image"
        className="size-96 object-cover"
      />
      <div className="absolute flex justify-center font-extrabold text-2xl text-white  ">
        {props.text}
      </div>
    </div>
    </Link>
  );
};

export default card;
