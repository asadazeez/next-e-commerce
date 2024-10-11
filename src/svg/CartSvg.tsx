import * as React from "react"
import { SVGProps } from "react"
const CartSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    fill="currentColor"
    viewBox="0 0 12 12"
    {...props}
  >
    <path d="M9 3v-.5C9 1.122 7.878 0 6.5 0h-1A2.503 2.503 0 0 0 3 2.5V3H1v9h10V3H9zm-5-.5C4 1.673 4.673 1 5.5 1h1C7.327 1 8 1.673 8 2.5V3H4v-.5z" />
  </svg>
)
export default CartSvg
