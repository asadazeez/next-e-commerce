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
    <Link href={`/shop/${product}/${id}`} className="col-span-2 lg:col-span-1">
      <div className=" justify-center  relative flex  hover:shadow-2xl   h-60 w-full">
        <Image
          src={storageUrl + image}
          alt="image"
          fill
          className="object-cover rounded-xl"
        />
        <div className="font-bold pt-2 absolute bottom-0 mb-[-1.5rem] text-base">
          {heading}
        </div>
        <div className="font-extrabold absolute bottom-0 mb-[-2.5rem] text-xs">
          {" "}
          ₹{subhead}
        </div>
      </div>
    </Link>
  );
};

export default FeaturedCard;
