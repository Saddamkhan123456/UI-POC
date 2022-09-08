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
      <footer className="p-4 text-center bg-theme-primary flex flex-col justify-center items-center">
        <div className="flex items-center">
          <span>
            <Icon kind="logo" size={20} className="text-theme-white" />
          </span>
          <div className="text-center text-sm text-theme-white">
            <span>© 2022 Copyright</span>
            {/* <a className="text-sm text-theme-white font-semibold" href="">
              Brand
            </a> */}
          </div>
        </div>
      </footer>
    </>
  );
};
