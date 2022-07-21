import classNames from "classnames";
import React from "react";
import { HTMLAttributes } from "react";

export interface FooterProps extends HTMLAttributes<HTMLElement> {}
export const Footer = ({ ...props }: FooterProps) => {
  const product = [
    { name: "Men", href: "/product/category/Men" },
    { name: "Women", href: "/product/category/Women" },
    { name: "Kids", href: "/product/category/kids" },
  ];

 
  return (
    <>
      <footer className="pt-8 pb-4 px-1 text-center bg-theme-neutral flex flex-col justify-center items-center">
        <div>
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
            width={100}
          />
        </div>
        <div className="my-4">
          <ul className="flex flex-row">
            {product.map((item, index) => (
              <li  key={index}>
                <a href={item.href} className="px-3 py-2 text-sm font-medium text-theme-neutral65">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center text-sm text-theme-neutral65">
          <span>© 2022 Copyright:</span> 
          <a className= "text-sm text-theme-neutral65 font-semibold" href="#">
            Amazon
          </a>
        </div>
        {/* <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Products
              </h6>
              <ul>
                {product.map((item, index) => (
                  <li className="mb-4" key={index}>
                    <a href={item.href} className="text-gray-600">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Useful links
              </h6>
              <ul>
                {usefullink.map((item, index) => (
                  <li className="mb-4" key={index}>
                    <a href={item.href} className="text-gray-600">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div> */}
       
      </footer>
    </>
  );
};
