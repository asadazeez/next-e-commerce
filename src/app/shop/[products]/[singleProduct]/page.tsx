import FeaturedCard from "@/app/_components/FeaturedCard";
import Image from "next/image";
import React from "react";
import Fragrance from "@public/image/featured/closeup-shot-beautifully-shaped-glass-bottles-filled-with-perfume.jpg";
import PrimaryButton from "@/components/PrimaryButton";

const page = async ({ params }: { params: { singleProduct: string } }) => {
  let res = await fetch(
    "https://dummyjson.com/products/" + params.singleProduct
  );
  const shopData = await res.json();
  

  return (
    <div className="relative gap-9 grid grid-cols-2">
      <div className="relative h-96 p-72 border-dotted border-[1px] ">
        <Image src={shopData.thumbnail} alt="product image" fill className="object-fill" />
      </div>
      <div className="flex flex-col justify-center gap-3">
        <div className="font-bold text-xl">{shopData.title}</div>
        <div className="font-black text-4xl">₹{shopData.price}</div>
        <div className="font-medium">{shopData.brand}</div>
        <div className="flex flex-col px-32 gap-3 justify-start" >
          <PrimaryButton type="submit"
          classname="bg-blue px-32 py-2 rounded-lg font-semibold text-white" text="BUY NOW"/>

<PrimaryButton type="submit" 
          classname="bg-blue px-[7.1rem] py-2 rounded-lg font-semibold text-white" text="ADD TO CART"/>
          </div>
        
      </div>
    </div>
  );
};

export default page;
