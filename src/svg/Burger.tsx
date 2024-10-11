import * as React from "react"
const Burger = (props:any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="currentColor"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M4 5a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2H4Zm3 7a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm6 6a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </svg>
)
export default Burger
