import React from "react";
import FeaturedCard from "@/app/_components/FeaturedCard";
import { frontendApi } from "@/app/api/apis";



const ProductPage = async ({params}:{ params: { products: string }}) => {

  const response = await frontendApi.getProductPage(params.products)
  const shopData = response.data.data.products
  const {categoryname, description} = response.data.data.categoryData
  
  
  return (
    <div>
      <div className="flex-col  flex pt-20 items-center">
        <div className="font-bold text-global-font-h5">
          {categoryname} Products
        </div>
        <div className="pt-3">{description} </div>
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
    </div>
  );
};

export default ProductPage;
