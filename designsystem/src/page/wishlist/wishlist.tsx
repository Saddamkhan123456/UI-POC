import React from "react";
import ItemCard from "../../atoms/shoppingCart/itemCard";

const Wishlist = () => {
  return (
    <>
      <div className="p-3 h-full">
        <h1 className="text-3xl font-black mb-3">Wishlist</h1>
        <div className="flex py-3 h-full">
          <div className="flex flex-col md:flex-row w-full">
            <div className="lg:w-2/3 sm:w-full">
              <ItemCard
                title="Black High Neck Cropped Top"
                brand="Nike"
                price="1294"
                thumbnail="https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/13843398/2021/4/19/1847ce50-4f55-4bad-aaf0-de8a2b31fbbf1618820819735-Inddus-Teal-Blue-Solid-Ruffle-Accordion-Pleat-Saree-71616188-1.jpg"
                qtyUpdate={true}
                showQty={false}
                cartCard={true}
                imgSize={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
