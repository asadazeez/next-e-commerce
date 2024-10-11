"use client"
import React, { Dispatch, useState } from "react";
type Props = {
  type: string;
  placeholder:string;
  error:any;
  register:any;
  className?:string
};


const CustomInput = (props: Props) => {

 

  
  return (
    <>
    <input 
      type={props.type}
      
       placeholder={props.placeholder}
       
  {...props.register}
      className={props.className}/>
      <p className="text-red-600 text-[10px]">{props.error}</p>
      </>
  );
};

export default CustomInput;
