import classNames from "classnames";
import React from "react";
import { HTMLAttributes } from "react";

export interface FooterProps extends HTMLAttributes<HTMLElement> {}
export const Footer = ({ ...props }: FooterProps) => {
  const product = [
    { name: "Men", href: "#" },
    { name: "Women", href: "#" },
    { name: "Kids", href: "#" },
   ];

  const usefullink = [
    {name: "Contact Us", href: "#"}, 
    {name: "FAQ", href: "#"},
  ]
  return (
    <>
      <footer className="text-center lg:text-left bg-gray-100 text-gray-600">
        <div className="mx-6 py-10 text-center md:text-left">
          <div className="grid grid-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="">
              <h1
                className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
              >
                LOGO
              </h1>
              <p>
                About Text
              </p>
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Products
              </h6>
              {product.map((item, index) => (
                    <p className="mb-4" key={index}>
                      <a
                        href={item.href}
                        className="text-gray-600"
                      >
                        {item.name}
                      </a>
                    </p>
                  ))}
              
            </div>
            <div className="">
              <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
                Useful links
              </h6>
              {usefullink.map((item, index) => (
                    <p className="mb-4" key={index}>
                      <a
                        href={item.href}
                        className="text-gray-600"
                      >
                        {item.name}
                      </a>
                    </p>
                  ))}
            </div>
            
          </div>
        </div>
        <div className="text-center p-1 bg-gray-200">
          <span>© 2022 Copyright:</span>
          <a
            className="text-gray-600 font-semibold"
            href="#"
          >
          ecommerce store
          </a>
        </div>
      </footer>
    </>
  );
};
