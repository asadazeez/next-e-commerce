import FeaturedCard from '@/app/_components/FeaturedCard'
import Image from 'next/image'
import React from 'react'
import Fragrance from "@public/image/featured/closeup-shot-beautifully-shaped-glass-bottles-filled-with-perfume.jpg";



const page = ({params }: { params: { products: string } }) => {

    
  return (
    <div className='relative gap-9 grid grid-cols-2'>
<div>
<Image
src={Fragrance}
alt='product image'
/>
</div>
<div className='flex flex-col justify-center gap-3'>
<div className='font-bold text-xl'> Product</div>
<div className='font-black text-4xl'>100</div>
<div className='font-medium'>brand name</div>
<div><button type='submit' className='bg-indigo-700 text-white px-5 rounded-md'>buy now </button></div>

    </div>
    </div>
  )
}

export default page