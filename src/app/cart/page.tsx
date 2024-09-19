"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PrimaryButton from "@/components/PrimaryButton";
import { useCart } from "@mrvautin/react-shoppingcart";
import Link from "next/link";
import { storageUrl } from "@/utilis/baseUrl";
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
    <div className="grid  gap-4  py-10  grid-cols-3">
      <table className=" col-span-3 md:col-span-2">
        <thead className="bg-slate-100 ">
          <tr>
            <th>Products</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={i}>
              <td className="flex gap-7     items-center">
                <div className="size-11 relative ">
                  <Image
                    src={storageUrl+ item.image}
                    fill
                    alt="png"
                  />
                </div>
                <div className="font-medium" >{item.name}</div>
              </td>
              <td className="text-center">{item.price.toFixed(2)}</td>
              <td>
                <div className="text-center flex gap-2 justify-center">
                  <button
                    onClick={() => updateItemQuantity(item, "decrease", 1)}
                  >
                    -
                  </button>
                  <div className="border-solid rounded-md border w-1/4 h-[1.5rem]">
                    {item.quantity}
                  </div>
                  <button
                    onClick={() => updateItemQuantity(item, "increase", 1)}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="text-center">
                {item.quantity
                  ? (item.quantity * item.price).toFixed(2)
                  : item.price.toFixed(2)}
              </td>

              <td className="text-center">
                <PrimaryButton
                  onClick={() => removeItem(item)}
                  text="REMOVE"
                  classname="bg-indigo-800/35 text-sm text-white rounded-lg px-5 py-1 font-semibold hover:shadow-xl "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table className=" bg-slate-100 mx-3  rounded-2xl col-span-3 md:col-span-1">
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
      </table>
    </div>
  );
};

export default CartPage;
