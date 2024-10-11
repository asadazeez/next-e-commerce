"use  client"
import React from "react";

import CategoryCard from "./CategoryCard";
import { frontendApi } from "../api/apis";


const Categories = async() => {
  const response = await frontendApi.getHomepage()
  const categoryData  = response.data.data.categories
  return (
    <div className="flex-col  flex  items-center">
      <div className="border-2 p-4 sen-bold text-2xl px-20">CATEGORIES</div>
      {/* <div className="pt-3">Lorem ipsum dolor sit amet. </div> */}
      <div className="grid  w-full gap-5 p-24 px-24 md:grid-cols-4 ">
{categoryData.map((category :any , index:number) => (
  <div key={index}>

    <CategoryCard
    
      image={category.image}
      text={category.name}
      id={category._id}
    />
  
      
       
       
        </div>
        ))}

        
      </div>
    </div>
  );
};

export default Categories;
