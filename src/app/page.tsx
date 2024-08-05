import React from "react";
import Carousel from "./_components/Carousel";
import Categories from "./_components/Categories";
import Featured from "./_components/Featured";

const page = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <Featured/>
    </div>
  );
};

export default page;
