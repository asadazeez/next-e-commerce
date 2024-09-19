import { storageUrl } from '@/utilis/baseUrl'
import cn from '@/utilis/tailwind'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
type CategoryProps= {
    image:string
    text:string
    className?:string
    id:string
}

const CategoryCard = (props:CategoryProps) => {
  return (
    <div className="relative">
      <Link href={`/shop/${props.id}`}>
      <Image
            src={ storageUrl+props.image}
            width={1000}
            height={0}           
            alt="image"
            className={cn("h-[36rem] object-cover",props.className )}
          />
          <div className="absolute bottom-5 left-2 px-2 bg-white  rounded-sm font-semibold">
            {props.text}
          </div>
          </Link>
        </div>
  )
}

export default CategoryCard




























// import React from "react";
// import Image, { StaticImageData } from "next/image";
// import cn from "@/utilis/tailwind";
// type Props = {
//   image: StaticImageData;
//   text: string;
//   className?: string;
// };

// const CategoryCard = (props: Props) => {
//   return (
//     <div className="relative">
//       <Image
//         src={props.image}
//         alt="image"
//         className={cn("h-[36rem] object-cover", props.className)}
//       />
//       <div className="absolute bottom-5 left-2 px-2 bg-white rounded-sm font-semibold">
//         {props.text}
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;
