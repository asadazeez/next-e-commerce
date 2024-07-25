import { link } from "fs";
import Link from "next/link";
import React from "react";
const headerLink = [
  { name: "HOME", link: "/" },
  { name: "ABOUT", link: "about" },
  { name: "SIGN UP", link: "signup" },
  { name: "CONTACT", link: "contact" },
];
function HeaderSide() {
  return (
    <div className="hidden justify-between space-x-3 md:flex">
      {headerLink.map((item, index) => (
        <Link className="hover:text-yellow"  href={item.link}> {item.name} </Link>
      ))}
    </div>
  );
}

export default HeaderSide;
