"use client";
import CustomInput from "@/components/CostumInput";
import PrimaryButton from "@/components/PrimaryButton";
import { useCart } from "@mrvautin/react-shoppingcart";
import { Fieldset, Field, Label, Select } from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { frontendApi } from "../api/apis";
import toast from "react-hot-toast";
import SelectCountry from "@/components/SelectCountry";

const Schema: any = z.object({
  // name: z
  //   .string({
  //     required_error: "Name is required",
  //     invalid_type_error: "Name must be a string",
  //   })
  //   .refine((data) => data.trim() !== "", {
  //     message: "Name cannot be an empty string",
  //   }),
  firstName: z.string().trim().nonempty("First Name is Required"),
  lastName: z.string().trim().nonempty("Last Name is Required"),

  emailAddress: z.string().email({ message: "Invalid email address" }),
  phoneNumber: z.string().trim().nonempty("Phone Number is required"),
  address: z.string().trim().nonempty('"Address is required"'),
  pinCode: z.string().trim().nonempty("Zip Code is required"),
  country: z.string().trim().nonempty("Country is required"),
});
type TSchema = z.infer<typeof Schema>;

const OrderPage = () => {
  const [client, setClient] = useState(false);
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

    const billingDetails = value;
    // Parse the data into a JavaScript object
    const parsedData = JSON.parse(productData!);



    // Access the 'items' array from the parsed object
    const items = parsedData.items;

    const datas = { cartItems: items, billingDetails: billingDetails };

    const billingData = await frontendApi.createOrder('66d94382bfc59fec95b5ec2d', datas);


    if (!billingData.data.success) {
      toast.error(billingData.data.message);
    } else {
      toast.success(billingData.data.message);
    }
  };

  return (
    <div className="m-16">
      <div className="grid gap-9 md:grid-cols-2">
        <div className=" flex flex-col">
          <h2 className="font-sans font-extrabold text-2xl">BILLING DETAILS</h2>
          <form onSubmit={handleSubmit(submitData)}>
            <div className="flex gap-3 mt-6">
              <div className="w-full">
                <p>First Name</p>
                <CustomInput
                  type="text"
                  placeholder="First Name"
                  register={register("firstName")}
                  error={errors.firstName?.message}
                  className="border-solid border-[1px] py-1 w-full mt-2 rounded-md "
                />
              </div>
              <div className="w-full">
                <p>Last Name</p>
                <CustomInput
                  type="text"
                  placeholder="Last Name"
                  register={register("lastName")}
                  error={errors.lastName?.message}
                  className="border-solid border-[1px] py-1 w-full mt-2 rounded-md "
                />
              </div>
            </div>
            <p className="mt-5">Phone</p>
            <CustomInput
              type="text"
              placeholder="Phone"
              error={errors.phoneNumber?.message}
              register={register("phoneNumber")}
              className="border-solid border-[1px] py-1 w-full mt-2 rounded-md "
            />
            <p className="mt-5">Email Address</p>
            <CustomInput
              type="text"
              placeholder="Email Address"
              register={register("emailAddress")}
              error={errors.emailAddress?.message}
              className="border-solid border-[1px] py-1 w-full mt-2 rounded-md "
            />
            <p className="mt-5">Address</p>
            <CustomInput
              type="text"
              placeholder="Address"
              error={errors.address?.message}
              register={register("address")}
              className="border-solid border-[1px] py-1 w-full mt-2 rounded-md "
            />
            <p className="mt-5">Pin Code</p>
            <CustomInput
              type="text"
              placeholder="Pin Code"
              error={errors.pinCode?.message}
              register={register("pinCode")}
              className="border-solid border-[1px] w-full py-1 mt-2 rounded-md "
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
                "bg-indigo-400 w-full  mt-14 rounded-lg text-white font-semibold py-2"
              }
            />
          </form>
        </div>

        <div className="border-solid border-[0.1px] h-fit p-6 bg-slate-50 shadow-sm">
          <table className="w-full  ">
            <thead>
              <tr>
                <th
                  className="font-bold text-lg pl-2 pb-2 text-left"
                  colSpan={2}
                >
                  Order Details
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
          </table>
        </div>

        {/* <PrimaryButton
          type="submit"
          disabled={isSubmitting}
          text={"SUBMIT"}
          classname={
            "bg-indigo-400 w-full md:block mt-14 rounded-lg text-white font-semibold py-2"
          }
        /> */}
      </div>
    </div>
  );
};

export default OrderPage;
