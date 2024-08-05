"use client"
import { error } from "console";
import React, { Dispatch, useState } from "react";
type Props = {
  type: string;
  placeholder:string;
  error:any;
  register:any;
};


const CustomInput = (props: Props) => {
 

  
  return (
    <>
    <input
      type={props.type}
      placeholder={props.placeholder}
  {...props.register}
      className="border-solid border-[1px] pl-2 rounded-md "/>
      <p className="text-red-600">{props.error}</p>
      </>
  );
};

export default CustomInput;
