import React from "react";
import Carousel from "./_components/Carousel";
import Categories from "./_components/Categories";
import Featured from "./_components/Featured";
import { frontendApi } from "./api/apis";

const page = async () => {
  const response2 = await frontendApi.getHomepage()

  const featuredData = response2.data.data.featured



  const response = await frontendApi.getBanner()
  const gallery = response.data.data.carousel
  return (
    <div  >
      <Carousel gallery={gallery} />
      <Featured featuredData={featuredData}/>
      <Categories />
    </div>
  );
};

export default page;
