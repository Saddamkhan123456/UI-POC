import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselComponent = () => {
  return (
    <div className="my-8">
      <Carousel
        axis="horizontal"
        autoPlay={true}
        centerMode={true}
        showThumbs={false}
        dynamicHeight={false}
        infiniteLoop={true}
        showArrows={false}
        swipeable={true}
        showStatus={false}
      >
        <div className="cursor-pointer">
          <img
            alt="banner img"
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg"
            className="object-cover"
          />
        </div>
        <div className="cursor-pointer">
          <img
            alt="banner img"
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
            className="object-cover"
          />
        </div>
        <div className="cursor-pointer">
          <img
            alt="banner img"
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/9be788ff-39a4-4214-99d0-fc97505aae5a1658752545685-USPA_Desk_Banner.jpg"
            className="object-cover"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
