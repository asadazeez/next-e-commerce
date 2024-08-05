"use client";
import React, { useState } from "react";
import HeaderSide from "./HeaderSide";
import CartSvg from "../../svg/CartSvg";

import { log } from "console";
import Sidebar from "./Sidebar";
import Burger from "../../svg/Burger";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const click = () => {
    setToggle(!toggle);
    // console.log(toggle);
  };


  return (
    <div>
    <div className="flex justify-between text-sky-500 p-6">
      <div className="font-[1000] ">E-COMMERCE </div>

      <div className="space-x-3 font-medium flex ">
        <HeaderSide />
        <div className="relative">
          <div className="flex">
            <div className=" absolute  top-[-5px] right-[-5px] size-4 bg-yellow rounded-full flex justify-center text-xs items-center">
              1
            </div>
          </div>
          <CartSvg className="size-7 " />
        </div>
        <Burger className="size-7 md:hidden " onClick={click} />
      </div>
    </div>
        {toggle ? <Sidebar click={click}/> : ""}
        </div>
        
      
  );
};

export default Header;
