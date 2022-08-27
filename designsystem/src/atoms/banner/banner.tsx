import { HTMLAttributes } from "react";

export interface BannerProps extends HTMLAttributes<HTMLElement> {
  pageHeading: string;
}
export const Banner = ({ pageHeading }: BannerProps) => {
  return (
    <div className="w-full mb-3 flex justify-center p-6 md:p-10 2xl:p-8 relative bg-no-repeat bg-center bg-cover page-banner-bg">
      <div className="absolute top-0 start-0 bg-theme-neutral15 w-full h-full opacity-50 transition-opacity duration-500"></div>
      <div className="w-full flex items-center justify-center relative z-10 py-8 md:py-10 lg:py-10 xl:py-10 2xl:py-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center capitalize">
          <span className="font-satisfy block font-normal mb-3">Shop</span>
          {pageHeading}
        </h2>
      </div>
    </div>
  );
};
