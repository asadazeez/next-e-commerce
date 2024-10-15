"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import { useCart } from "@mrvautin/react-shoppingcart";
import Link from "next/link";
import { storageUrl } from "@/utilis/baseUrl";
import Divider from '@mui/material/Divider';
import DeleteSvg from "@/svg/Delete";
const CartPage = () => {
  const [client, setClient] = useState(false);
  const { items, removeItem, updateItemQuantity , cartTotal,} = useCart();
  useEffect(() => {
    if (!client) {
      setClient(true);
    }
  }, [client]);

  if (!client) {
    return;
  }

  return (
    <div className="bg-[#eeeeee] ">
    <div className="grid pt-32  overflow-x-auto  gap-5 pl-10  grid-cols-2 py-10  lg:grid-cols-3">
      <table className=" bg-white shrink-0 shadow-[10px_10px_10px_rgba(0,0,0,0.2)] overflow-hidden  rounded-3xl col-span-3 md:col-span-2">
        <thead >
          <tr>
            <th className="py-4 sen-semibold">Products</th>
            <th className="py-4 sen-semibold">Price</th>
            <th className="py-4 sen-semibold">Quantity</th>
            <th className="py-4 sen-semibold">Total Price</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <>            <tr key={i}>
              <td className="flex gap-7 py-8  items-center">
                <div className="size-24 relative ">
                  <Image
                    src={storageUrl+ item.image}
                    fill
                    alt="png"
                    className="rounded-xl object-cover"
                  />
                </div>
                <div className="sen-unique" >{item.name}</div>
              </td>
              <td className="text-center  sen-unique" >₹{item.price.toFixed(2)}</td>
              <td >
                <div className="text-center  sen-unique flex gap-2 justify-center">
                  <button
                    onClick={() => updateItemQuantity(item, "decrease", 1)}
              className="text-xl"
                  >
                    -
                  </button>
                  <div       className="border-solid rounded-md border size-6" >
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => updateItemQuantity(item, "increase", 1)}
                    className="text-xl"

                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-center text-[#e9b970] text-lg sen-unique">
              ₹
                {item.itemTotal?.toFixed(2)}
              </td>

              <td className="text-center px-4">
                {/* <PrimaryButton
                  onClick={() => removeItem(item)}
                  text="x"
                  classname=" text-sm text-[#2d2d2d] border-[1px] rounded-full px-3 py-1 font-semibold hover:shadow-xl "
                /> */}

  <button onClick={() => removeItem(item)} className="hover:scale-110 transition duration-300">
<div className="flex text-xs font-medium">
                <DeleteSvg className="size-4"/> Remove</div></button>
              </td>
            </tr>
            </>

          ))}
        </tbody>
      </table>

      <div className="w-full  col-span-2 lg:col-span-1">
        <div className="grid grid-cols-2 bg-[#ffd28d] sen-unique shadow-[10px_10px_10px_rgba(0,0,0,0.2)] py-6 px-5 mr-10  rounded-3xl  ">
<div className="col-span-2 text-center sen-bold text-xl">CART TOTAL</div>
<div >
  Shipping
</div>
<div className="text-end "> ₹ 20</div>

<div>Cart Subtotal</div>
<div className="text-end">{cartTotal.toFixed(2)}</div>

<div className=" text-lg sen-semibold py-5 ">Cart Total</div>
<div className="text-end sen-semibold py-5 text-lg">{(cartTotal + 20).toFixed(2)}</div>

<div className=" col-span-2 text-center "> <Link href={'/order'}><button className="bg-white py-1 px-14 hover:shadow-md hover:border-[.5px] hover:transition-all hover:duration-300 rounded-full">CHECK OUT</button></Link></div>




        </div>








      </div>

      {/* <table className=" bg-[#ffd28d] shadow-[10px_10px_10px_rgba(0,0,0,0.2)]  rounded-3xl mr-10 col-span-3 md:col-span-1">
        <thead>
        <tr >
            <td colSpan={2} className="text-xl font-extrabold w-full pt-5 text-center ">CART TOTAL</td>
            </tr>
          <tr>
            <td className=" text-base font-semibold pl-10  ">SHIPPING</td>
            <td className=" pl-20  ">20</td>
          </tr>
          <tr>
            <td className="text-lg  font-bold pl-10">Total</td>
            <td className="text-base    pl-20  font-bold ">{cartTotal.toFixed(2)}</td>
          </tr>
          <tr>
          <td colSpan={2} className=" w-full pb-5 text-center">
            <Link href={"/order"} >
              <PrimaryButton
                text="CHECK OUT"
                classname=" border-solid border-[1px] font-bold py-1  px-14 rounded-lg "
              />
            </Link>
          </td>
          </tr>
        </thead>
      </table> */}
    </div>
    </div>
  );
};

export default CartPage;
