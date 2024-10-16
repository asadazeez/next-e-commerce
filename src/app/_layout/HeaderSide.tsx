
import Link from "next/link";
import React from "react";
const headerLink = [
  { name: "HOME", link: "/" },
  { name: "SHOP", link: "/shop" },
  { name: "LOGIN", link: "/login" },
  { name: "CONTACT", link:"/contact"  },
];
function HeaderSide() {
  return (
    <div className="hidden  justify-center space-x-3 md:flex">
      {headerLink.map((item, index) => (
        <Link key={index} className="hover:underline  "  href={item.link}> {item.name} </Link>
      ))}
    </div>
  );
}

export default HeaderSide;
