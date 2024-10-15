import React from "react";
import FeaturedCard from "@/app/_components/FeaturedCard";
import { frontendApi } from "@/app/api/apis";
import NoProduct from "@public/image/rdi1nzGJII-P36cSOQPjO-transformed.jpeg";
import Image from "next/image";
import CardNewOne from "@/components/CardNewOne";



const ProductPage = async ({params}:{ params: { products: string }}) => {

  const response = await frontendApi.getProductPage(params.products)
  const shopData = response.data.data.products
  const title = response.data.data.categoryData
  
  
  return (
    <div>
        {shopData.length>0 ? 
      <div className="flex-col pt-24  flex p-20 items-center">

        <div className="josefin-sans-bold text-2xl">
          {title.categoryname} PRODUCTS
        </div>
        <div className="pt-7">{title.description} </div>
        <div className="grid  w-full gap-10 p-24 md:grid-cols-4 ">
          {shopData.map((item: any , index:number) => (
            <FeaturedCard
           key={index}
              image={item.image}
              heading={item.name!}
              subhead={item.price!}
              product= {params.products}
              id={item._id}
            />
          ))}
        </div>
       
    </div>
    :<div className="pt-24"> 
    <div className="h-[45rem] ravi-prakash-regular text-xl items-center flex flex-col justify-center">
    
    <Image src={NoProduct} alt="No Product Found" className="size-[70%] object-contain" /> “We’ve temporarily run out of stock—stay tuned for a restock!” </div>  </div> 
    }
      </div>
  );
};

export default ProductPage;
