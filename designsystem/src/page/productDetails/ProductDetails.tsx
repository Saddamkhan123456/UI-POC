import React, { useEffect, useState } from "react";
import { Button } from "design-system";
import { QuantityBox } from "../../molecules/quantityBox";
import { Sizes } from "../../atoms/sizes";
import { useLocation } from "react-router-dom";


export default function ProductDetails(product) {
  console.log("Product Details");
  // const { search } = useLocation();
  // const params = new URLSearchParams(search);
  // const productid = params.get('productId'); // bar
  // console.log(productid);

  

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div>
              <div className="mb-4">
                <div className="mb-4 flex items-center justify-center">
                  <img
                    src="https://images.bewakoof.com/t1080/whatever-cat-boyfriend-t-shirt-388114-1655748484-1.jpg"
                    alt="productImage" width="400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h1 className="mb-2 text-theme-neutral uppercase text-2xl md:text-3xl">
              DILLINGER
            </h1>
            <p className="mb-4 text-theme-neutral55">
              Women Blue Printed Round Neck Oversized T-shirt
            </p>

            <h5 className="mb-2 text-theme-neutral text-md">Size</h5>
            <div className="mb-4">
              <Sizes />
            </div>

            <h5 className="mb-2 text-theme-neutral text-md">Quantity</h5>
            <div className="mb-4">
              <QuantityBox />
            </div>

            <h5 className="mb-2 text-theme-neutral text-md">Description</h5>
            <div className="product-descriptiom">
              <p className="mb-4 text-theme-neutral55">
                Flex your cattitude with this Whatever Cat Women's Boyfriend
                T-shirt. Team this black t-shirt with high-waist jeans, funky
                sneakers and sling bag for a chic look.
              </p>
            </div>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg flex">
                  <span className="text-theme-neutral mr-1 mt-1 text-3xl font-bold">
                    ₹1000
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="primary" size="medium" className="mr-2">
                Add to card
              </Button>
              <Button variant="primary" size="medium">
                Wishlist
              </Button>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
