import React from "react";
import Facebook from "../../svg/Facebook";

import Xsvg from "../../svg/Xsvg";
import Instagram from "../../svg/Instagram";

function FooterSidebar() {
  return (
    <div className=" ">
      <div className="flex pt-6 space-x-6 ">
        <Facebook className="size-[2.975rem]" />
        <Instagram className="size-[2.8rem]" />
        <Xsvg className="size-[2.975rem]" />
      </div>
    </div>
  );
}

export default FooterSidebar;
