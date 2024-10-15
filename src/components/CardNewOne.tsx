"use client";
import { useCart } from "@mrvautin/react-shoppingcart";
import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import CartSvg from "@/svg/CartSvg";
import Image from "next/image";
import { storageUrl } from "@/utilis/baseUrl";

type Props = {
  ProductData: any;
};

const  CardNewOne = ({ ProductData }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { addItem, totalUniqueItems } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: ProductData._id,
      price: ProductData.price,
      name: ProductData.title,
      ...ProductData,
    });
    
    setIsOpen(true);
  };

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000); 

      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <StyledWrapper>
      <button type="button" onClick={handleAddToCart} className="sen-light">
        ADD TO CART
      </button>

      
        <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
          <div className="pop-op-card  fixed top-2 flex  w-full right-11 items-center justify-end">
            <DialogPanel className="max-w-lg space-y-2 bg-white rounded-3xl  shadow-2xl py-5 px-4">
              <DialogTitle className="sen-unique flex justify-end text-[12px] align-middle text-end">
               <div className="mt-[3px]"> Shopping Bag({totalUniqueItems})</div> <CartSvg className="size-5" />
              </DialogTitle>
              <div className="sen-unique grid gap-3 grid-cols-3 w-fit text-start">
                <div className="h-28 w-20 relative">
                  <Image
                    src={storageUrl + ProductData.image}
                    className="object-cover rounded-xl"
                    fill
                    alt="Item Image"
                  />
                </div>
                <div className="w-full col-span-2 text-sm">
                  <div className="sen-semibold"> {ProductData.name}</div>
                  <div>₹ {ProductData.price}</div>
                  <div>Quantity: 1</div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    --color: #2d2d2d;
    font-family: inherit;
    display: inline-block;
    width: 10em;
    height: 2.6em;
    line-height: 2.5em;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    border: 2px solid var(--color);
    transition: color 0.5s;
    font-size: 17px;
    font-family: Sen;
    color: var(--color);
  }

  button:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 200px;
    border-radius: 50%;
  }

  button:hover {
    color: #fff;
  }

  button:before {
    top: 100%;
    left: 100%;
    transition: all 0.7s;
  }

  button:hover:before {
    top: -58px;
    left: -30px;
  }

  button:active:before {
    background: #3a0ca3;
    transition: background 0s;
  }
`;

export default CardNewOne;