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
      <div className="relative h-[30rem] w-full flex justify-center hover:shadow-2xl items-center ">
          <Image
            src={ storageUrl + props.image}
            alt="category image"
            className=" object-cover"
            fill
          />
        
        <div className="absolute flex justify-center border-2 py-2 bg-white  px-6 josefin-sans-unique 
  text-lg text-black  ">
          {props.name}
        </div>
      </div>
    </Link>
  );
};

export default card;
