import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

type FeaturedProps = {
image :StaticImageData
heading: string
subhead:string
product:string
}




const FeaturedCard = ({image ,heading,subhead,product}:FeaturedProps) => {
  return (
    <Link href={`/shop/${product}/${heading}`}>
    <div className='text-center '>
      <Image src={image} alt='image'/>
      <div className='font-semibold pt-2 text-sm'>{heading}</div>
      <div className='font-extrabold text-xs'>{subhead}</div>

    </div>
    </Link>

  )
}

export default FeaturedCard