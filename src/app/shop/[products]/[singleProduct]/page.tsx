import Image from "next/image";
import React, { useEffect, useState } from "react";
import Addcart from "@/app/cart/_components/Addcart";
import { frontendApi } from "@/app/api/apis";
import { storageUrl } from "@/utilis/baseUrl";

const SingleProductPage = async ({
  params,
}: {
  params: { singleProduct: string };
}) => {
  const response = await frontendApi.getSingleProduct(params.singleProduct);
  const ProductData = response.data.data.product;

  return (
    <div className="relative   gap-9 pb-14 grid md:grid-cols-2">
      <div className="flex justify-center px-5 col-span-1">
      <div className="relative h-[15rem] w-full md:h-[25rem]">
        <Image
          src={storageUrl + ProductData.image}
          alt="product image"
          fill
          className="object-cover rounded-2xl"
        />
      </div>
      </div>
      
      <div className="flex flex-col text-center justify-center gap-3 md:text-start">
        <div className="font-bold text-xl">{ProductData.name}</div>
        <div className="font-black text-4xl">₹{ProductData.price}</div>
        <div className="font-medium">{ProductData.brand}</div>
        <div className="font-medium">{ProductData.description}</div>

        <div className="flex flex-col  gap-3 justify-start">
          <Addcart ProductData={ProductData} />
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
