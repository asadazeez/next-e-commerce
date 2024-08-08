import React from "react";
import Fragrance from "@public/image/featured/closeup-shot-beautifully-shaped-glass-bottles-filled-with-perfume.jpg";
import FeaturedCard from "@/app/_components/FeaturedCard";
import { StaticImageData } from "next/image";



const page = async ({params }: { params: { products: string } }) => {
  let res = await fetch("https://dummyjson.com/products/category/"+ params.products)
  const shopData= await res.json()
  
  
  
  return (
    <div>
      <div className="flex-col  flex pt-20 items-center">
        <div className="font-bold text-global-font-h5">
          {params.products} PRODUCTS
        </div>
        <div className="pt-3">Lorem ipsum dolor sit amet. </div>
        <div className="grid grid-cols-4  w-full gap-10 p-24">
          {shopData.products.map((item: any) => (
            <FeaturedCard
          
              image={item.thumbnail}
              heading={item.title!}
              subhead={item.price!}
              product= {params.products}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
