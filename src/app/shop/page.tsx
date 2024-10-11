import React from "react";

import Card from "@/components/Card";
import { frontendApi } from "../api/apis";








const ShopPage = async () => {
const response = await frontendApi.getShopPage()
  const categoryDatas = response.data.data.categories

  return (
    <div>
      <div className=" sen-bold text-4xl flex justify-center pt-24 align-middle">
        CATEGORIES
      </div>

      <div className="grid  col-span-2  px-36 py-20 gap-8 md:grid-cols-3 ">
        
        
        {categoryDatas.map((category:any, index:number)=>(
           
          <Card
          key={index}
          
         id={category._id}
          name={category.name}
          image={category.image}/>
        ))}
        
      </div>
    </div>
  );
};

export default ShopPage;
