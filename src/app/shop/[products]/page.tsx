import React from "react";
import Fragrance from "@public/image/featured/closeup-shot-beautifully-shaped-glass-bottles-filled-with-perfume.jpg";
import FeaturedCard from "@/app/_components/FeaturedCard";

const shopData = [
  {
    image: Fragrance,
    heading: "ARAMIS",
    subhead: "$13",
  },

  {
    image: Fragrance,
    heading: "CALVIN KLEIN",
    subhead: "$65",
  },
  {
    image: Fragrance,
    heading: "GUERLAIN",
    subhead: "$68",
  },
  {
    image: Fragrance,
    heading: "LE LABO",
    subhead: "$27",
  },
  {
    image: Fragrance,
    heading: "AZZARO",
    subhead: "$6",
  },
  {
    image: Fragrance,
    heading: "FRIENDS",
    subhead: "$6",
  },
];

const page = ({params }: { params: { products: string } }) => {

  
  return (
    <div>
      <div className="flex-col  flex pt-20 items-center">
        <div className="font-bold text-global-font-h5">
          {params.products} PRODUCTS
        </div>
        <div className="pt-3">Lorem ipsum dolor sit amet. </div>
        <div className="grid grid-cols-4 w-full gap-5 p-24">
          {shopData.map((item, i) => (
            <FeaturedCard
            key={i}
              image={item.image}
              heading={item.heading!}
              subhead={item.subhead!}
              product= {params.products}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
