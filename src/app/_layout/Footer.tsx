import React from "react";
import FooterSide from "./Footerside";
import FooterSidebar from "./FooterSidebar";

function Footer() {
  return (
    <>
      <div className="flex flex-col text-black p-6 sm:justify-between sm:flex sm:flex-row">
        <div className="font-[700] text-center">E-COMMERCE </div>

        <div>
          <div className="flex justify-center font-semibold pb-4">Links</div>
          <div className="flex justify-center">
            <FooterSide />
          </div>
        </div>
        <div className="sm:block">
        <div className="font-semibold flex justify-center sm:block">Get In Touch</div>
      <div className="text-slate-500 flex justify-center  sm:block pt-4">
        Koottanad (via), Palakkad District
      </div>
        <div className="flex justify-center sm:block ">
          <FooterSidebar />
          </div>
          </div>
      </div>
    </>
  );
}

export default Footer;
