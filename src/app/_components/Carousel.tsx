"use client";
import Image from "next/image";
import React, { useState } from "react";
import Image1 from "../../../public/image/WhatsApp Image 2024-07-26 at 15.08.03 (1).jpeg";
import Image2 from "../../../public/image/WhatsApp Image 2024-07-26 at 15.08.03 (2).jpeg";
import Image3 from "@public/image/WhatsApp Image 2024-07-26 at 15.08.03.jpeg";
import cn from "@/utilis/tailwind";

const gallery = [
  {
    image: Image1,
    text: {
      subHeading: "WINTER 2020",
      heading: "30% Discount",
      description:
        " We know how large objects will act,but things on a small scale.",
    },
  },
  {
    image: Image2,
    text: {
      subHeading: "SUMMER 2020",
      heading: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
    },
  },
  {
    image: Image3,
    text: {
      subHeading: "SUMMER 2020",
      heading: "EXPLORE",
      description:
        " We know how large objects will act,but things on a small scale.",
    },
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const abc = gallery.length;

  const onnext = () => {
    if (abc - 1 == index) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previous = () => {
    if (index == 0) {
      setIndex(abc - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="relative">
      <Image
        className="w-full h-[35rem] object-cover"
        src={gallery.at(index)!.image}
        alt="gallery"
      />
      <div className="absolute inset-0 left-4 right-4 flex justify-between">
        <button
          onClick={previous}
          className=" hover:text-2xl text-white font-bold"
        >
          {"<"}
        </button>
        <button
          onClick={onnext}
          className="hover:text-2xl text-white font-bold"
        >
          {">"}
        </button>
      </div>
      <div className={cn("absolute top-48 inset-x-0 mx-12 ",{'text-center':index==1},{"text-end":index==2})}>
        
          <div className="font-thin text-white">
            {gallery.at(index)!.text.heading}
          </div>

        <div className="text-2xl font-black text-white">
          {gallery.at(index)!.text.subHeading}
        </div>
        <div className="font-semibold text-white">
          {gallery.at(index)!.text.description}
        </div>

        <button className="bg-sky-700 text-xs text-white font-semibold p-2 rounded-xl mt-3 hover:bg-fuchsia-950 px-3">
          SHOP NOW
        </button>
      </div>
    </div>
  );
};

export default Carousel;
