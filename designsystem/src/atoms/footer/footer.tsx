import { HTMLAttributes } from "react";
import Icon from "../icons/icon";

export interface FooterProps extends HTMLAttributes<HTMLElement> {}
export const Footer = ({ ...props }: FooterProps) => {

  return (
    <>
      <footer className="p-4 text-center bg-theme-primary flex flex-col justify-center items-center mt-auto" {...props}>
        <div className="flex items-center">
          <span>
            <Icon kind="logo" size={20} className="text-theme-white" />
          </span>
          <div className="text-center text-sm text-theme-white">
            <span>© 2022 Copyright</span>
          </div>
        </div>
      </footer>
    </>
  );
};
