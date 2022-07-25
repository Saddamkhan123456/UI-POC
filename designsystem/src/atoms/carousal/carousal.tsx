import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link, useNavigate } from "react-router-dom";

const CarouselComponent = () => {
  // const navigate = useNavigate();
  // const onClickItem = () => {
  //   navigate("/product");
  // };
  return (
    <div className="mb-3">
      <Carousel
        axis="horizontal"
        autoPlay={true}
        centerMode={true}
        showThumbs={false}
        dynamicHeight={false}
        infiniteLoop={true}
        // onClickItem={onClickItem}
      >
        <div className="cursor-pointer">
          <img
            alt="banner img"
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/20/2070ae9e-b853-468a-b8a7-ba796e6477881658298282918-B1G1--2-.jpg"
            className="object-cover"
          />
          {/* <p className="legend">Men</p> */}
        </div>
        <Link to="/product" className="cursor-pointer">
          <img
            alt="banner img"
            src="https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/20/79567fb5-0282-4b75-b523-7a7edaeba1551658298282911-B1G2--2-.jpg"
            className="object-cover"
          />
          {/* <p className="legend">Women</p> */}
        </Link>
        <Link to="/product" className="cursor-pointer">
          <img
            alt="banner img"
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/20/e94df837-2e61-48bf-9a4c-ba455e2908e01658298282904-B1G3--2-.jpg"
            className="object-cover"
          />
          {/* <p className="legend">Kids</p> */}
        </Link>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
