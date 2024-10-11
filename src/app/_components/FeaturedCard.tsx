import { baseUrl, storageUrl } from "@/utilis/baseUrl";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type FeaturedProps = {
  image: string;
  heading: string;
  subhead: string;
  product: string;
  id: string;
};

const FeaturedCard = ({
  image,
  heading,
  subhead,
  product,
  id,
}: FeaturedProps) => {
  return (
    <Link href={`/shop/${product}/${id}`} className="col-span-3 lg:col-span-1">
      <div className=" justify-center items-center flex-col flex   ">
        <div className="overflow-hidden h-[22rem] w-full  relative">
        <Image
          src={storageUrl + image}
          alt="image"
          fill
          className="object-cover transition duration-300 hover:scale-105 "
        />
        </div>
        <div className="sen-semibold  text-lg">
          {heading}
        </div>
        <div className="sen-semibold mt-1  text-sm">
          
          ₹{subhead}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
