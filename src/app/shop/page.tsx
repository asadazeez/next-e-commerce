import React from "react";
import Men from "@public/image/categories/men.jpeg";
import Women from "@public/image/categories/women.jpeg";
import Accessories from "@public/image/categories/accessories.jpeg";
import Kids from "@public/image/categories/kids.jpeg";
import Card from "@/components/Card";

const categorydatas = [
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

const page = () => {
  return (
    <div>
      <div className="text-3xl font-extrabold flex justify-center align-middle">
        CATEGORIES
      </div>

      <div className="grid grid-cols-4 gap-5">
        <Card
          image={categorydatas.at(0)!.image}
          text={categorydatas.at(0)!.text}
        />

        <Card
          image={categorydatas.at(1)!.image}
          text={categorydatas.at(1)!.text}
        />

        <Card
          image={categorydatas.at(2)!.image}
          text={categorydatas.at(2)!.text}
        />

        <Card
          image={categorydatas.at(3)!.image}
          text={categorydatas.at(3)!.text}
        />
      </div>
    </div>
  );
};

export default page;
