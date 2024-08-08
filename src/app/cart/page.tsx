import React from "react";
import CartSvg from "../../svg/CartSvg";
import PrimaryButton from "@/components/PrimaryButton";
const page = () => {
  return (
    <div className="grid grid-cols-3 border-dashed border-[0.5px]">
      <table className="table-auto col-span-2">
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
          <tr>
            <td className="flex gap-7 justify-center items-center"><div className="size-11 "><CartSvg/></div> Product1</td>
            <td className="text-center">100</td>
            <td >
              <div className="text-center flex gap-2 justify-center">
                
             <button> - </button><div className="border-solid border size-6">3</div><button>+</button>
              </div>
              </td>
            <td className="text-center">1827</td>
            <td className="text-center"> <PrimaryButton text="REMOVE" classname="bg-indigo-800/35 text-sm text-white rounded-lg px-5 py-1 font-semibold hover:shadow-xl "/></td>
          </tr>
        </tbody>
      </table >

      <table>
        <thead>Cart Total</thead>
      </table>
    </div>
  );
};

export default page;
