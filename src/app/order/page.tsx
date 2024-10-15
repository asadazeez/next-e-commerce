"use client";
import CustomInput from "@/components/CostumInput";
import PrimaryButton from "@/components/PrimaryButton";
import { useCart } from "@mrvautin/react-shoppingcart";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { frontendApi } from "../api/apis";
import toast from "react-hot-toast";
import SelectCountry from "@/components/SelectCountry";
import Image from "next/image";
import { storageUrl } from "@/utilis/baseUrl";
import { Divider } from "@mui/material";
import {
  Description,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import TickAnimation from "@/components/TickAnimation";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";

const Schema: any = z.object({
  // name: z
  //   .string({
  //     required_error: "Name is required",
  //     invalid_type_error: "Name must be a string",
  //   })
  //   .refine((data) => data.trim() !== "", {
  //     message: "Name cannot be an empty string",
  //   }),
  firstName: z.string().trim().nonempty("*First Name is Required"),
  lastName: z.string().trim().nonempty("*Last Name is Required"),

  emailAddress: z.string().email({ message: "*Invalid email address" }),
  phoneNumber: z.string().trim().nonempty("*Phone Number is required"),
  address: z.string().trim().nonempty("*Address is required"),
  pinCode: z.string().trim().nonempty("*Pin Code is required"),
  country: z.string().trim().nonempty("*Country is required"),
});
type TSchema = z.infer<typeof Schema>;

const OrderPage = () => {
  const [client, setClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { items, cartTotal } = useCart();
  const {
    register,
    handleSubmit,

    formState: { errors, isSubmitting },
  } = useForm<TSchema>({ resolver: zodResolver(Schema) });

  useEffect(() => {
    if (!client) {
      setClient(true);
    }
  }, [client]);

  if (!client) {
    return;
  }

  const submitData = async (value: any) => {
    const productData = window.localStorage.getItem("react-shoppingcart");
    // const userData: any = window.localStorage.getItem("accessToken");
    // const userId:{userId:String} = jwtDecode(userData);



    const billingDetails = value;
    // Parse the data into a JavaScript object
    const parsedData = JSON.parse(productData!);

    // Access the 'items' array from the parsed object
    const items = parsedData.items;

    const datas = { cartItems: items, billingDetails: billingDetails };

    const billingData = await frontendApi.createOrder(datas);

    if (!billingData.data.success) {
      toast.error(billingData.data.message);
      
    } else {
      toast.success(billingData.data.message);
      setIsOpen(true)
    }
  };

  return (
    <div className="py-32 md:px-24 bg-[#eeeeee]">
      <div className="grid gap-9 lg:grid-cols-2">
        <div className="  bg-white shadow-[10px_10px_10px_rgba(0,0,0,0.2)] rounded-2xl py-12 px-12 flex flex-col">
          <h2 className="sen-bold text-lg">Delivery Information</h2>
          <form onSubmit={handleSubmit(submitData)}>
            <div className="flex sen-unique gap-3 mt-6">
              <div className="w-full">
                <p>First Name</p>
                <CustomInput
                  type="text"
                  placeholder="First Name"
                  register={register("firstName")}
                  error={errors.firstName?.message}
                  className="placeholder:pl-2 border-[0.5px] py-1 w-full mt-2 "
                />
              </div>
              <div className="w-full">
                <p>Last Name</p>
                <CustomInput
                  type="text"
                  placeholder="Last Name"
                  register={register("lastName")}
                  error={errors.lastName?.message}
                  className=" border-[0.5px] placeholder:pl-2 py-1 w-full mt-2 "
                />
              </div>
            </div>
            <p className="mt-5 sen-unique ">Mobile Number</p>
            <CustomInput
              type="text"
              placeholder="Mobile Number"
              error={errors.phoneNumber?.message}
              register={register("phoneNumber")}
              className=" border-[.5px] sen-unique placeholder:pl-2 py-1 w-full mt-2 "
            />
            <p className="mt-5 sen-unique">Email </p>
            <CustomInput
              type="text"
              placeholder="Email Address"
              register={register("emailAddress")}
              error={errors.emailAddress?.message}
              className=" border-[.5px] sen-unique   placeholder:pl-2 py-1 w-full mt-2 "
            />
            <p className="mt-5 sen-unique">Address</p>
            <CustomInput
              type="text"
              placeholder="Address"
              error={errors.address?.message}
              register={register("address")}
              className="border-[.5px] sen-unique   placeholder:pl-2 py-1 w-full mt-2 "
            />
            <p className="mt-5 sen-unique">Pin Code</p>
            <CustomInput
              type="text"
              placeholder="Pin Code"
              error={errors.pinCode?.message}
              register={register("pinCode")}
              className=" border-[.5px] sen-unique   placeholder:pl-2 py-1 w-full mt-2 "
            />
            <SelectCountry
              error={errors.country?.message}
              register={register("country")}
            />

            <PrimaryButton
              type="submit"
              disabled={isSubmitting}
              text={"SUBMIT"}
              classname={
                "bg-[#2d2d2d] w-full  mt-14 sen-unique font-light text-white  py-2"
              }
            />
            <Dialog
              open={isOpen}
              onClose={() => setIsOpen(true)}
              className="relative z-50"
            >
              <div className="fixed inset-0 flex w-screen bg-black bg-opacity-30 backdrop-blur-sm items-center justify-center p-4">
                <DialogPanel className="max-w-lg space-y-2 rounded-lg shadow-xl bg-white p-12">
                  <div className=" flex justify-center">
                    <TickAnimation />
                  </div>
                  <DialogTitle className="sen-unique text-lg text-center">
                    Hey User 👋🏻,
                  </DialogTitle>
                  <Description className="sen-bold text-2xl text-center">
                    Your Order is Confirmed!
                  </Description>
                  <p className="text-center sen-unique text-sm">
                    We&apos;ll send you a shipping confirmation email as your
                    order ships.
                  </p>
                  <div className="text-center py-5">
                    <Link href={"/shop"}>
                      {" "}
                      <button className="bg-[#ff7644] px-9 py-1 rounded-md hover:scale-105 hover:shadow-md transition duration-75 ease-in-out text-white sen-unique">
                        EXPLORE MORE
                      </button>
                    </Link>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          </form>
        </div>

        <div className=" rounded-2xl  py-12 px-12 h-full  bg-white shadow-[10px_10px_10px_rgba(0,0,0,0.2)]">
          <div className=" sen-bold text-lg pb-8 flex  "> Order Summary </div>
          {items.map((item, index) => (
            <div key={index} className="grid    gap-2 ">
              <div className="flex   gap-3 items-center">
                <div className="relative size-24">
                  <Image
                    src={storageUrl + item.image}
                    fill
                    className="object-cover  rounded-md"
                    alt="Product Image"
                  />
                </div>
                <div className="sen-unique flex w-full  flex-col">
                  <div>{item.name}</div>
                  <div className="text-zinc-500"> {item.brand}</div>
                  <div>₹ {item.price}</div>
                </div>

                <div className=" text-end sen-unique pr-8">{item.quantity}</div>
              </div>

              <div></div>
            </div>
          ))}
          <Divider />
          <div className="grid py-5 text-zinc-500 sen-unique grid-cols-2">
            <div>Sub Total</div>
            <div className="text-end text-black">₹ {cartTotal.toFixed(2)}</div>
            <div>Shipping</div>
            <div className="text-end text-black">₹20</div>
          </div>
          <Divider />
          <div className=" grid grid-cols-2 text-lg py-3 sen-bold">
            <div>Total</div>
            <div className="text-end text-black">
              ₹ {(cartTotal + 20).toFixed(2)}
            </div>
          </div>

          {/* <table className="w-full  ">
            <thead>
              <tr>
                <th
                  className="sen-bold text-lg pl-2 pb-2 text-left"
                  colSpan={2}
                >
                  Order Summary
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <>
                  {" "}
                  <tr key={index}>
                    <td className="px-2 py-1 w-full font-medium">
                      {item.name}
                    </td>
                    <td className="px-2 py-1 w-full font-medium">
                      {item.price}
                    </td>
                  </tr>
                </>
              ))}
              <tr className="  border-t-[1px]">
                <td className="p-2 pt-7  ">Sub Total</td>
                <td className="p-2 pt-7 "> {cartTotal.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="px-2  ">Shipping Cost</td>
                <td className="px-2  "> 0</td>
              </tr>
              <tr>
                <td className="px-2  ">Discount</td>
                <td className="px-2  "> 0</td>
              </tr>

              <tr className="  border-t-[1px]">
                <td className="p-2 pt-7 text-xl font-bold ">Total</td>
                <td className="p-2 pt-7 "> {cartTotal.toFixed(2)}</td>
              </tr>
            </tbody>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
