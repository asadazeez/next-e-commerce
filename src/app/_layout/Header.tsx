"use client";
import React, { useEffect, useState } from "react";
import HeaderSide from "./HeaderSide";
import CartSvg from "../../svg/CartSvg";

import Sidebar from "./Sidebar";
import Burger from "../../svg/Burger";
import Link from "next/link";
import { useCart } from "@mrvautin/react-shoppingcart";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [client, setClient] = useState(false);
  const { totalUniqueItems } = useCart();

  useEffect(() => {
    if (!client) {
      setClient(true);
    }
  }, [client]);

  if (!client) {
    return;
  }

  const click = () => {
    setToggle(!toggle);
  };


  return (
    <div>
    <div className="flex justify-between bg-emerald-50 text-sky-500 p-6 my-3">
      <Link href={"/"}>
      <div className="font-black text-2xl ">E-COMMERCE </div>
      </Link>

      <div className="space-x-3 font-medium flex ">
        <HeaderSide />
        <div className="relative">
          <div className="flex">
            <div className=" absolute  top-[-5px] right-[-5px] size-4 bg-yellow rounded-full flex justify-center text-xs items-center">
             {totalUniqueItems}
            </div>
          </div>
          <Link href={"/cart"}>
          <CartSvg className="size-7 hover:shadow-lg" /></Link>
        </div>
        <Burger className="size-7 md:hidden " onClick={click} />
      </div>
    </div>
        {toggle ? <Sidebar click={click}/> : ""}
        </div>
        
      
  );
};

export default Header;
