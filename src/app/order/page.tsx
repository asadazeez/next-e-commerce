"use client"
import CustomInput from "@/components/CostumInput";
import PrimaryButton from "@/components/PrimaryButton";
import { useCart } from "@mrvautin/react-shoppingcart";
import Link from "next/link";import {
  Fieldset,
 
  Field,
  Label,
  Select,
  
} from "@headlessui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";



const Schema:any = z
  .object({
    name: z
      .string({
        required_error: "Name is required",
        invalid_type_error: "Name must be a string",
      })
      .refine((data) => data.trim() !== "", {
        message: "Name cannot be an empty string",
      }),
    emailAddress: z.string().email({ message: "Invalid email address" }),
    phoneNumber:z.string({
      required_error: "Phone Number is required",
    }),
    address:z.string({
      required_error: "Address is required",
    }),
    zipCode:z.string({
       required_error: "Zip Code is required"
    }),
    country:z.string({
      required_error: "Country is required"
    })


  })
  type TSchema = z.infer<typeof Schema>;

const OrderPage = () => {
  const [client, setClient] = useState(false);
  const { totalItemsAmount } = useCart();
  const {
    register,
    handleSubmit,
    
    formState: { errors,isSubmitting },
  } = useForm<TSchema>({ resolver: zodResolver(Schema) });
  useEffect(() => {
    if (!client) {
      setClient(true);
    }
  }, [client]);

  if (!client) {
    return;
  }
  




  const submitData = () => {};

  return (
    <div className="m-16">
      <div className="grid gap-9 md:grid-cols-2">
        <div className=" flex flex-col">
          <h2 className="font-sans font-extrabold text-2xl">
            BILLING DETAILS
          </h2>
          <form onSubmit={handleSubmit(submitData)} >
          <div className="flex gap-3 mt-6">
            <div className="w-full">
              <p>First Name</p>
              <CustomInput
                type="text"
                placeholder="First Name"
                register={register("name")}
            error={errors.name?.message}
                className="border-solid border-[1px] py-1 w-full mt-2 rounded-md "
              />
            </div>
            <div className="w-full">
              <p>Last Name</p>
              <CustomInput
                type="text"
                placeholder="Last Name"
                register={register("name")}
            error={errors.name?.message}
                className="border-solid border-[1px] py-1 w-full mt-2 rounded-md "
              />
            </div>
          </div>
          <p className="mt-5">Phone</p>
          <CustomInput
            type="text"
            placeholder="Phone"
            error={errors.phoneNumber?.message}
            register={register('phoneNumber')}
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
            register={register('address')}
            className="border-solid border-[1px] py-1 w-full mt-2 rounded-md "
          />
          <p className="mt-5">Zip Code</p>
          <CustomInput
            type="text"
            placeholder="Zip Code"
            error={errors.zipcode?.message}
            register={register('zipCode')}
            className="border-solid border-[1px] w-full py-1 mt-2 rounded-md "
          />
          <Fieldset>
            <Field>
              
              <Label className="block mt-5">Country</Label>
              <Select
              {...register('country')}
                className="mt-2 text-base border-solid border-[1px] w-full py-[0.3rem]  rounded-md block"
                name="country"
              >
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">
                  British Indian Ocean Territory
                </option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">
                  Cocos (Keeling) Islands
                </option>
                <option value="Colombia">Colombia</option>
            
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">
                  Falkland Islands (Malvinas)
                </option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">
                  French Southern Territories
                </option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">
                  Heard Island and Mcdonald Islands
                </option>
                <option value="Holy See (Vatican City State)">
                  Holy See (Vatican City State)
                </option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">
                  Iran, Islamic Republic of
                </option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
               
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">
                  Micronesia, Federated States of
                </option>
                <option value="Moldova, Republic of">
                  Moldova, Republic of
                </option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
               
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">
                  Saint Pierre and Miquelon
                </option>
                <option value="Saint Vincent and The Grenadines">
                  Saint Vincent and The Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">
                  South Georgia and The South Sandwich Islands
                </option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">
                  Svalbard and Jan Mayen
                </option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">
                  Syrian Arab Republic
                </option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">
                  Tanzania, United Republic of
                </option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">
                  Turks and Caicos Islands
                </option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">
                  United States Minor Outlying Islands
                </option>
                <option value="Uruguay">Uruguay</option>
               
              </Select>
            </Field>
          </Fieldset>

          <PrimaryButton  type="submit" disabled={isSubmitting} text={"SUBMIT"} classname={"bg-indigo-400 w-full hidden md:bloc  mt-14 rounded-lg text-white font-semibold py-2"}/>
          </form>
        </div>


        <div className="border-solid border-[0.5px] h-fit p-6 rounded-2xl">
          <table className="w-full  ">
            <thead>
              <tr>
                <th className="text-start">PRODUCTS</th>
                <th className="text-end">SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              <>
              <tr className="">
                <td>product name</td>
                <td className="text-end">hhh</td>
              </tr>
              <tr className="">
                <td>Sub Total</td>
                <td className="text-end">{totalItemsAmount.toFixed(2)}</td>
              </tr>
             
              <tr className="h-12">
                <td className="font-extrabold text-xl">Total</td>
                <td className="text-end text-violet-900 font-extrabold text-xl">{totalItemsAmount.toFixed(2)}</td>
              </tr>
              </>
            </tbody>
            
          </table>

        </div>
        
      <PrimaryButton  type="submit" disabled={isSubmitting} text={"SUBMIT"} classname={"bg-indigo-400 w-full md:block mt-14 rounded-lg text-white font-semibold py-2"}/>
      </div>
    </div>
  );
};

export default OrderPage;
