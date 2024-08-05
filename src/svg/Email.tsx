import * as React from "react"
import { SVGProps } from "react"
const EmailSvg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM7.005 9c0-.55.445-1 .995-1h8c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1l.005-6ZM12 12.5 8 10v5h8v-5l-4 2.5Zm0-1L8 9h8l-4 2.5Z"
      clipRule="evenodd"
    />
  </svg>
)
export default EmailSvg
