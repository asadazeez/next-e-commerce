import React from 'react'

type BtnProps={
    text:string;
    classname:string;
    disabled?:boolean;
    type?:"submit" | "reset" | "button";
    onClick?:React.MouseEventHandler<HTMLButtonElement>
}
const PrimaryButton = (props:BtnProps) => {
  return (
    <div><button disabled={props.disabled} onClick={props.onClick} type={!!props.type ? props.type: 'button'} className={props.classname}> {props.disabled ? <span className="spinner-border spinner-border-sm mr-1"></span>: props.text}</button></div>
  )
}

export default PrimaryButton