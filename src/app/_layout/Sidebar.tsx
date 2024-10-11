import React from "react";
import HeaderSide from "./HeaderSide";
import Link from "next/link";

const headerLink = [
  { name: "HOME", link: "/" },
  { name: "SHOP", link: "shop" },
  { name: "LOGIN", link: "login" },
  { name: "CONTACT", link: "contact" },
];
type Props = {
  click: () => void;
};
function Sidebar({ click }: Props) {
  return (
    <div className=" fixed inset-0  z-50 grid grid-cols-2">
      <div className="bg-transparent col-span-1 " onClick={click}>
      </div>
      <div className=" flex flex-col bg-white  text-center font-extrabold p-16 md:hidden text-3xl text-[#666666] gap-8 col-span-1">
        {headerLink.map((item, index) => (
          <Link key={index} className=" hover:text-yellow" href={item.link}  onClick={click}>
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
