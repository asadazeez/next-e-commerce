import React from "react";
import Facebook from "../../svg/Facebook";

import Xsvg from "../../svg/Xsvg";
import Instagram from "../../svg/Instagram";
import Youtube from "@/svg/Youtube";

function FooterSidebar() {
  return (
   
      <div className="flex pt-2  space-x-2 ">
        <Facebook className="size-[1.15rem]" />
        <Instagram className="size-5" />
        <Xsvg className="size-5" />
        <Youtube className="size-5"/>
      </div>
   
  );
}

export default FooterSidebar;
