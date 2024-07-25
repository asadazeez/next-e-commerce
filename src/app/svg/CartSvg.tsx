import * as React from "react"
const CartSvg = (props:any) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" {...props}>
    <circle
      cx={90}
      cy={102}
      r={8}
      fill="none"
      stroke="#00aeef"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    />
    <circle
      cx={50}
      cy={102}
      r={8}
      fill="none"
      stroke="#00aeef"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
    />
    <path
      fill="none"
      stroke="#00aeef"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={4}
      d="M30 34h83.1c2.8 0 4.7 2.8 3.7 5.4l-15.9 41.4C99.7 84 96.7 86 93.4 86H46.6c-3.8 0-7.1-2.7-7.9-6.5L30 34zm-.1 0-1.5-7.6c-.7-3.7-4-6.4-7.8-6.4h-7.2m77.5 26h3M33 46h48.9"
    />
  </svg>
)
export default CartSvg
