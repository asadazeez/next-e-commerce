"use client";
import React, { useEffect, useState } from "react";
import HeaderSide from "./HeaderSide";
import CartSvg from "../../svg/CartSvg";
import Sidebar from "./Sidebar";
import Burger from "../../svg/Burger";
import Link from "next/link";
import { useCart } from "@mrvautin/react-shoppingcart";
import IconSvg from "@public/Icon/IconLogo";
import { FiSearch } from 'react-icons/fi';
import SearchBar from "@/components/SearchBar";
import HumBurger from "@/components/NewButton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [isScrolled , setIsScrolled] = useState(false)
  // const [client, setClient] = useState(false);
  const { totalUniqueItems } = useCart();


  useEffect(() => {
   
    const handleScroll = () => {
      const scrollPosition = window.scrollY; 

     
      if (scrollPosition > 25) {
        setIsScrolled(true); 
      } else {
        setIsScrolled(false); 
      }
    };

   
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   if (!client) {
  //     setClient(true);
  //   }
  // }, [client]);

  // if (!client) {
  //   return;
  // }

  const click = () => {
    setToggle(!toggle);
  };


  return (
    <div>
    <div className={`flex justify-between josefin-sans-bold fixed transition-colors duration-500 z-50 w-full  p-6 ${isScrolled? "bg-[#2d2d2d] text-white " : "bg-transparent text-black"}`}>
      <Link href={"/"}>
      <div className=" text-2xl font-josefin ml-3 flex gap-2 justify-center  ">
      <div className="-m-7 h-[3.7rem] overflow-hidden"><IconSvg/></div>
     E-SHOP </div>
      </Link>

      <div className="space-x-3 mt-1 mr-[6.5rem] font-medium h-min flex">
        <HeaderSide />
       
      </div>


      <div className="flex gap-3 mr-6"> <div className="relative border-[1px] h-min rounded-full p-1">
          <div className="flex">
            {/* <div className=" absolute  top-[-5px] right-[-5px] size-3 font-mono bg-orange rounded-full flex justify-center text-xs items-center">
             {totalUniqueItems}
            </div> */}
          </div>
          <Link href={"/cart"}>
          <CartSvg className="size-4  hover:shadow-lg" /></Link>
        </div>         <Burger className="size-7 md:hidden  -mr-7" onClick={click} />
        </div>
    </div>
        {toggle ? <Sidebar click={click}/> : ""}
        </div>
        
      
  );
};

export default Header;
