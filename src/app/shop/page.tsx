import React from "react";

import Card from "@/components/Card";
import { frontendApi } from "../api/apis";








const ShopPage = async () => {
const response = await frontendApi.getShopPage()
  const categoryDatas = response.data.data.categories

  return (
    <div>
      <div className="text-3xl font-extrabold flex justify-center align-middle">
        CATEGORIES
      </div>

      <div className="grid  col-span-2  p-32 gap-8 md:grid-cols-3 ">
        
        
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
