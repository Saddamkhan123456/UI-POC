import React from "react";
import { HTMLAttributes } from "react";

export interface BannerProps extends HTMLAttributes<HTMLElement> {}
export const Banner = ({ ...props }: BannerProps) => {
  return (
    <>
      <div className="banner py-48 bg-black"></div>
    </>
  );
};
