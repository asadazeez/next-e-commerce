import cn from '@/utilis/tailwind'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
type CategoryProps= {
    image:StaticImageData
    text:string
    className?:string
}

const CategoryCard = (props:CategoryProps) => {
  return (
    <div className="relative">
      <Image
            src={props.image}
            alt="image"
            className={cn("h-[36rem] object-cover",props.className )}
          />
          <div className="absolute bottom-5 left-2 px-2 bg-white rounded-sm font-semibold">
            {props.text}
          </div>
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
