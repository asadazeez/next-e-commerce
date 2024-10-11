import React from "react";
import dynamic from "next/dynamic";

// Dynamically import react-slick with SSR disabled
const Slider = dynamic(() => import("react-slick"), { ssr: false });

interface SliderComponentProps {
  settings: any;
  children: React.ReactNode;
}

const SliderComponent: React.FC<SliderComponentProps> = ({ settings, children }) => {
  return <Slider {...settings}>{children}</Slider>;
};

export default SliderComponent;