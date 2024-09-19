import React from "react";

import CategoryCard from "./CategoryCard";
import { frontendApi } from "../api/apis";


const Categories = async() => {
  const response = await frontendApi.getHomepage()
  const categoryData  = response.data.data.categories
  return (
    <div className="flex-col  flex pt-20 items-center">
      <div className="font-extrabold text-global-font-h5">CATEGORIES</div>
      <div className="pt-3">Lorem ipsum dolor sit amet. </div>
      <div className="grid  w-full gap-5 p-24 md:grid-cols-3 ">
{categoryData.map((category :any , index:number) => (
  

    <CategoryCard
    key={index}
      image={category.image}
      text={category.name}
      id={category._id}
    />
  
))}
      
       
        {/* <div className="flex flex-col gap-2">
        <CategoryCard
          image={categorydata.at(2)!.image}
          text={categorydata.at(2)!.text} className="h-[17.75rem] "
        />
        <CategoryCard
          image={categorydata.at(3)!.image}
          text={categorydata.at(3)!.text} className="h-[17.75rem]"
          
        />
        
        </div> */}
        
        
      </div>
    </div>
  );
};

export default Categories;
