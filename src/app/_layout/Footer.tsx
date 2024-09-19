import React from "react";
import FooterSide from "./Footerside";
import FooterSidebar from "./FooterSidebar";

function Footer() {
  return (
    <>
      <div className="flex flex-col  bg-gradient-to-r from-indigo-500 text-lg text-white p-6 sm:justify-between lg:flex lg:flex-row ">
        <div className=" font-black text-4xl text-center">E-COMMERCE </div>

        <div>
          <div className="flex justify-center font-semibold pb-4">Links</div>
          <div className="flex justify-center">
            <FooterSide />
          </div>
        </div>
        <div >
          <div className="font-semibold text-black flex justify-center lg:block">
            Get In Touch
          </div>
          <div className="text-black flex justify-center  lg:block pt-4">
            Koottanad (via), Palakkad District
          </div>
          <div className="flex justify-center lg:block ">
            <FooterSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
