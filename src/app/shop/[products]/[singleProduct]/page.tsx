import Image from "next/image";
import React, { useEffect, useState } from "react";
import Addcart from "@/app/cart/_components/Addcart";
import { frontendApi } from "@/app/api/apis";
import { storageUrl } from "@/utilis/baseUrl";
import CardNewOne from "@/components/CardNewOne";

const SingleProductPage = async ({
  params,
}: {
  params: { singleProduct: string };
}) => {
  const response = await frontendApi.getSingleProduct(params.singleProduct);
  const ProductData = response.data.data.product;

  return (
    <div className="relative  py-24   gap-9  grid md:grid-cols-2">
      <div className="flex justify-center items-center px-14 lg:px-28 col-span-1">
      <div className="relative h-[25rem] w-full   md:w-96 md:h-[30rem]">
        <Image
          src={storageUrl + ProductData.image}
          alt="product image"
          fill
          className="object-cover "
        />
      </div>
      </div>
      
      <div className="flex flex-col text-center justify-center gap-3 md:text-start">
        <div className="sen-semibold text-xl">{ProductData.name}</div>
        <div className="sen-bold text-4xl">₹{ProductData.price}</div>
        <div className="sen-semibold">{ProductData.brand}</div>
        <div className="sen-semibold">{ProductData.description}</div>

        <div className="flex flex-col  gap-3 justify-start">
          {/* <Addcart ProductData={ProductData} /> */}
          <CardNewOne ProductData={ProductData}/>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
