import React from "react";
import Image from "next/image";
import contact from "@public/image/Sld57IYnq8bNKuGmOA3nY-transformed.jpeg";
import AddressSvg from "../../svg/Address";
import CallSvg from "../../svg/Call";
import EmailSvg from "../../svg/Email";

const page = () => {
  return (
    <div className="relative h-[51rem] flex justify-center items-center">
      <Image src={contact} alt="contact image" fill className="object-cover"/>
      <div className=" text-white z-50  flex flex-col px-4 font-medium items-center gap-6 ">
        <h2 className="font-black text-3xl">CONTACT US</h2>
       
          <p className="text-center">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:
          </p>
          
     
        <div className="flex-col flex justify-center gap-10 font-black p-4 bg-white/55 rounded-lg backdrop-blur-sm text-black md:flex-row md:gap-12 ">
          <div className="flex items-center gap-5">
            <div className=" size-fit  bg-white rounded-full p-1">
              <AddressSvg className="size-10 " />
            </div>
            <div>
              <div>ADDRESS</div>
              <p className="font-light">
                1908, 19thFloor, Prism Tower, Business Bay
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <CallSvg className="size-12  p-1 bg-white rounded-full " />
            <div>
              <div>CALL</div>
              <p className="font-light">+91 9876543210</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="bg-white rounded-full size-fit">
              <EmailSvg className="size-12" />
            </div>
            <div>
              <div>E-MAIL</div>
              <p className="font-light">adsgbwuw72@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
