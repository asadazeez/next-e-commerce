import React from "react";
import FooterSide from "./Footerside";
import FooterSidebar from "./FooterSidebar";
import IconSvg from "@public/Icon/IconLogo";
import Link from "next/link";

function Footer() {
  return (
    <>
      <div className="flex flex-col  bg-[#EEEEEE] josefin-sans-bold text-lg text-[#666666] p-6  lg:pr-20 sm:justify-between lg:flex lg:flex-row ">
      
      <div className=" text-2xl font-josefin ml-3 flex gap-2 justify-center  ">
      <div className="-m-7 h-[3.7rem] overflow-hidden"><IconSvg/></div>
     E-SHOP </div>
     

        <div>
          <div className="flex justify-center font-semibold pb-2">LINKS</div>
          <div className="flex justify-center">
            <FooterSide />
          </div>
        </div>
        <div >
          <div className="  flex justify-center lg:block">
           FOLLOW US
          </div>
          {/* <div className=" flex justify-center  lg:block pt-4">
            Koottanad (via), Palakkad District
          </div> */}
          <div className="flex  justify-center lg:block ">
            <FooterSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
