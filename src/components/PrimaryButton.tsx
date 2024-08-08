import React from 'react'

type BtnProps={
    text:string;
    classname:string;
    type?:"submit" | "reset" | "button";
}
const PrimaryButton = (props:BtnProps) => {
  return (
    <div><button  type={props.type} className={props.classname}> {props.text}</button></div>
  )
}

export default PrimaryButton