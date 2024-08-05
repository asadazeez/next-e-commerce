import React from "react";
import Image from "next/image";
import Men from "@public/image/categories/men.jpeg";
import Women from "@public/image/categories/women.jpeg";
import Accessories from "@public/image/categories/accessories.jpeg";
import Kids from "@public/image/categories/kids.jpeg";
import CategoryCard from "./CategoryCard";

const categorydata = [
  {
    image: Men,
    text: "MEN",
  },

  {
    image: Women,
    text: "WOMEN",
  },
  {
    image: Accessories,
    text: "ACCESSORIES",
  },
  {
    image: Kids,
    text: "KIDS",
  },
];

const Categories = () => {
  return (
    <div className="flex-col  flex pt-20 items-center">
      <div className="font-bold text-global-font-h5">Categories</div>
      <div className="pt-3">Lorem ipsum dolor sit amet. </div>
      <div className="grid grid-cols-3 w-full gap-5 p-24">
        <CategoryCard
          image={categorydata.at(0)!.image}
          text={categorydata.at(0)!.text}
        />
        <CategoryCard
          image={categorydata.at(1)!.image}
          text={categorydata.at(1)!.text}       />
        <div className="flex flex-col gap-2">
        <CategoryCard
          image={categorydata.at(2)!.image}
          text={categorydata.at(2)!.text} className="h-[17.75rem] "
        />
        <CategoryCard
          image={categorydata.at(3)!.image}
          text={categorydata.at(3)!.text} className="h-[17.75rem]"
          
        />
        </div>
        
        
      </div>
    </div>
  );
};

export default Categories;
