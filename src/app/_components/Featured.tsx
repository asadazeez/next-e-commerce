"use client";
import React from "react";
import FeaturedCard from "./FeaturedCard";
import { frontendApi } from "../api/apis";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { storageUrl } from "@/utilis/baseUrl";
import Image from "next/image";
import Link from "next/link";

type Props = {
  featuredData: any;
};

const Featured = ({ featuredData }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:false,
    pauseOnHover: true,   
    responsive: [
      {
        breakpoint: 768, // Change this breakpoint to whatever suits your design
        settings: {
          slidesToShow: 1, // Show 1 slide for smaller screens
        },
      },
      {
        breakpoint: 1024, // Optional: You can add more breakpoints as needed
        settings: {
          slidesToShow: 2, // Show 2 slides for medium screens
        },
      },
    ],
    
  };

  return (
    <div className="flex-col  flex pt-14 items-center">
      <div className=" border-2 p-4 sen-bold text-2xl">
        EXCLUSIVE SELECTIONS{" "}
      </div>
      {/* <div className="grid w-full gap-12 p-24 md:grid-cols-4 "> */}

      {featuredData.length<=3?      <div className="grid w-full gap-12 p-24 sm:grid-cols-2  md:grid-cols-3 ">
        
        {featuredData.map((featured:any , index:number) =>
        (
<FeaturedCard key={index} image={featured.image} heading={featured.name} subhead={featured.price} product={featured.category._id} id={featured._id}/>





        ) )}
        
        
        
        
        
          </div>:

      <div  id="featuredProductSlider" className="w-full  p-24">
        <Slider {...settings} className="">
          {featuredData.map((featured: any, index: number) => (
            <Link
              href={`/shop/${featured.category._id}/${featured._id}`}
              key={index}
            >
              <div className=" justify-center  items-center flex-col flex   ">
                <div className="overflow-hidden h-[22rem] w-full  relative">
                  <Image
                    src={storageUrl + featured.image}
                    alt="image"
                    fill
                    className="object-cover transition duration-300 hover:scale-105 "
                  />
                </div>
                <div className="sen-semibold line-clamp-2 text-ellipsis  text-lg">{featured.name}</div>
                <div className="sen-semibold mt-1  text-sm">
                  ₹{featured.price}
                </div>
              </div>
            </Link>

           
          ))}
        </Slider>
      </div>}
      {/* </div> */}
    </div>
  );
};

export default Featured;
