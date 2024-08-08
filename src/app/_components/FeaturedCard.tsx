import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type FeaturedProps = {
image :StaticImageData
heading: string
subhead:string
product:string
id:string
}




const FeaturedCard = ({image ,heading,subhead,product,id}:FeaturedProps) => {
  return (
    <Link href={`/shop/${product}/${id}`}>
    <div className=' justify-center  relative flex border-dotted hover:shadow-2xl  border-[1px] h-60 w-full'>
      <Image src={image} alt='image' fill />
      <div className='font-bold pt-2 absolute bottom-0 mb-[-1.5rem] text-base'>{heading}</div>
      <div className='font-extrabold absolute bottom-0 mb-[-2.5rem] text-xs'> ₹{subhead}</div>

    </div>
    </Link>

  )
}

export default FeaturedCard