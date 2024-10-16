"use client"
import PrimaryButton from '@/components/PrimaryButton'
import { useCart } from '@mrvautin/react-shoppingcart';
import React from 'react'


type Props={
ProductData:any

}

const Addcart = ({ProductData}:Props) => {
  const { addItem } = useCart();
  return (
    <>
    <PrimaryButton
            type="submit"
            onClick={() =>
              addItem({
                id: ProductData._id,
                price: ProductData.price,
                name: ProductData.title,
                ...ProductData,
              })
            }
            classname="bg-[#2d2d2d] px-11 py-2 sen-light text-white"
            text="ADD TO CART"
          />
    </>
  )
}

export default Addcart