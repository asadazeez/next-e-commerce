import React from "react";
import Men from "@public/image/categories/men.jpeg";
import Women from "@public/image/categories/women.jpeg";
import Accessories from "@public/image/categories/accessories.jpeg";
import Kids from "@public/image/categories/kids.jpeg";
import Card from "@/components/Card";






//   {
//     image: Men,
//     text: "MEN",
//   },

//   {
//     image: Women,
//     text: "WOMEN",
//   },
//   {
//     image: Accessories,
//     text: "ACCESSORIES",
//   },
//   {
//     image: Kids,
//     text: "KIDS",
  
//   },
// ];

const page = async () => {
  let res = await fetch('https://dummyjson.com/products/category-list')
  const categorydatas= await res.json()
  // console.log("-------",categorydatas);
  

  return (
    <div>
      <div className="text-3xl font-extrabold flex justify-center align-middle">
        CATEGORIES
      </div>

      <div className="grid grid-cols-4 p-32 gap-8 ">
        
        
        {categorydatas.map((item:any)=>(
          <Card
          
         
          text={item}
          image={item.thumbnail}/>
        ))}
        
      </div>
    </div>
  );
};

export default page;
