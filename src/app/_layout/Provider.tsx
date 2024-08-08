"use client";
import { CartProvider } from "@mrvautin/react-shoppingcart";
import React, { ReactNode } from "react";
type Props = {
  children: ReactNode;
};

const Provider = ({ children }: Props) => {
  return <CartProvider>{children}</CartProvider>;
};

export default Provider;
