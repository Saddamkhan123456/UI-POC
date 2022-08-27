import React from "react";
import { HTMLAttributes } from "react";
import Icon from "../icons/icon";

export interface FooterProps extends HTMLAttributes<HTMLElement> {}
export const Footer = ({ ...props }: FooterProps) => {
  const product = [
    { name: "Men", href: "/product/category/men" },
    { name: "Women", href: "/product/category/women" },
    { name: "Kids", href: "/product/category/kids" },
  ];

  return (
    <>
      <footer className="pt-8 pb-4 px-1 text-center bg-theme-neutral flex flex-col justify-center items-center">
        <div>
          <Icon kind="logo" size={40} className="text-theme-white" />
        </div>
        <div className="my-4">
          <ul className="flex flex-row">
            {product.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-theme-neutral65"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-center text-sm text-theme-neutral65">
          <span>© 2022 Copyright:</span>
          <a className="text-sm text-theme-neutral65 font-semibold" href="#">
            Brand
          </a>
        </div>
        
      </footer>
    </>
  );
};
