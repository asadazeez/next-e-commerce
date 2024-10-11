"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import Image1 from "../../../public/image/WhatsApp Image 2024-07-26 at 15.08.03 (1).jpeg";
import Image2 from "../../../public/image/WhatsApp Image 2024-07-26 at 15.08.03 (2).jpeg";
import Image3 from "@public/image/WhatsApp Image 2024-07-26 at 15.08.03.jpeg";
import cn from "@/utilis/tailwind";
import { storageUrl } from "@/utilis/baseUrl";
import Link from "next/link";
import NextSvg from "@/svg/Next";
import PrevSvg from "@/svg/Prev";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props ={
  gallery:any
}

// const gallery = [
//   {
//     image: Image1,
//     text: {
//       subHeading: "WINTER 2020",
//       heading: "30% Discount",
//       description:
//         " We know how large objects will act,but things on a small scale.",
//     },
//   },
//   {
//     image: Image2,
//     text: {
//       subHeading: "SUMMER 2020",
//       heading: "NEW COLLECTION",
//       description:
//         "We know how large objects will act, but things on a small scale.",
//     },
//   },
//   {
//     image: Image3,
//     text: {
//       subHeading: "SUMMER 2020",
//       heading: "EXPLORE",
//       description:
//         " We know how large objects will act,but things on a small scale.",
//     },
//   },
// ];

const Carousel =  ({gallery}:Props) => {


  function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-20 custom-next`} 
        style={{
          ...style,
          display:"block"
  ,        right: '30px' ,
        }}
        onClick={onClick}
      >
        <NextSvg width="25px" height="25px" className="transform  transition-transform duration-300  hover:scale-125"/>
      </div>
    );
  }
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} z-20 custom-prev`}
        style={{
          ...style,
          display: 'block',
          left: '30px' ,
        }}
        onClick={onClick}
      >
        <PrevSvg width="25px" height="25px" className="transform transition-transform duration-300 hover:scale-125"/>
      </div>
      
    );
  }
  
 

  
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true, 
    pauseOnHover: false,        
    autoplaySpeed: 3000,  
    nextArrow: <SampleNextArrow /> ,
    prevArrow:<SamplePrevArrow/>  
  };


  // const [index, setIndex] = useState(0);
  // const abc = gallery.length;

  // const onnext = () => {
  //   if (abc - 1 == index) {
  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  // };

  // const previous = () => {
  //   if (index == 0) {
  //     setIndex(abc - 1);
  //   } else {
  //     setIndex(index - 1);
  //   }
  // };

  return (
    <div>
      <Slider {...settings}>
      {gallery.map((item:any,index:number) => (
        <div key={index} className="w-full h-[51rem] relative">
 <Link href={`/shop/${item.category}`} >
<Image src={storageUrl + item.image} className="object-cover" fill alt="Carousel image" /></Link>

</div>




      )   )}
      {/*

   
      <Image
        className=" object-cover"
        src={storageUrl + gallery.at(index)!.image}
        alt="gallery"
       fill
       
      />
    </Link> */}
    </Slider>
     {/* <div className="absolute inset-0  left-4 right-4 flex justify-between"> */}
        
         {/* <PrevSvg onClick={previous} className="size-6 absolute left-4 top-[45%] transform transition-transform duration-300 hover:scale-125 "/>
       
        
         <NextSvg onClick={onnext} className="size-6 absolute top-[45%] transform transition-transform duration-300 hover:scale-125 right-4"/> */}
{/*        
        </div> */}
       
        

      {/* <div className={cn("absolute top-48 inset-x-0 mx-12 ",{'text-center':index==1},{"text-end":index==2})}>
        
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
        <Link href={"/shop"}>
        SHOP NOW </Link>
        </button>
        </div> */}
    </div>
  );
};

export default Carousel;
