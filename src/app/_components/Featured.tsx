import React from "react";
import Fragrance from "@public/image/featured/closeup-shot-beautifully-shaped-glass-bottles-filled-with-perfume.jpg";
import FeaturedCard from "./FeaturedCard";
import { frontendApi } from "../api/apis";

// const featuredData = [
//   {
//     image: Fragrance,
//     heading: "ARAMIS",
//     subhead: "$13",
//   },

//   {
//     image: Fragrance,
//     heading: "CALVIN KLEIN",
//     subhead: "$65",
//   },
//   {
//     image: Fragrance,
//     heading: "GUERLAIN",
//     subhead: "$68",
//   },
//   {
//     image: Fragrance,
//     heading: "LE LABO",
//     subhead: "$27",
//   },
//   {
//     image: Fragrance,
//     heading: "AZZARO",
//     subhead: "$6",
//   },
//   {
//     image: Fragrance,
//     heading: "FRIENDS",
//     subhead: "$6",
//   },
// ];

const Featured = async () => {
  const response = await frontendApi.getHomepage()
  const featuredData = response.data.data.featured
  return (
    <div className="flex-col  flex pt-20 items-center">
      <div className="font-extrabold text-global-font-h5">FEATURED PRODUCT</div>
      <div className="pt-3">Lorem ipsum dolor sit amet. </div>
      <div className="grid w-full gap-12 p-24 md:grid-cols-4 ">

        {featuredData.map((featured:any, index:number) => (
          <FeaturedCard
          key={index}
            image={featured.image}
            heading={featured.name}
            subhead={featured.price}
            product=""
            id=""
          />
        ))}
      </div>
    </div>
  );
};

export default Featured;
