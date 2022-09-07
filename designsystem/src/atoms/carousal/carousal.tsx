import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

const CarouselComponent = () => {
  // const navigate = useNavigate();
  // const onClickItem = () => {
  //   navigate("/product");
  // };
  return (
    <div className="my-4">
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
        // onClickItem={onClickItem}
      >
        <div className="cursor-pointer">
          <img
            alt="banner img"
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/28/0174e4d7-448c-4746-8572-69461ad5be101659020268081-Tops---Tees_Desk.jpg"
            className="object-cover"
          />
          {/* <p className="legend">Men</p> */}
        </div>
        <Link to="/product" className="cursor-pointer">
          <img
            alt="banner img"
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/31/4031994d-9092-4aa7-aea1-f52f2ae5194f1654006594976-Activewear_DK.jpg"
            className="object-cover"
          />
          {/* <p className="legend">Women</p> */}
        </Link>
        <Link to="/product" className="cursor-pointer">
          <img
            alt="banner img"
            src="https://assets.myntassets.com/w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/7/25/179e278f-77ee-44c2-bf39-9f00b0cd08e01658752429301-Handbags_Desk.jpg"
            className="object-cover"
          />
          {/* <p className="legend">Kids</p> */}
        </Link>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
