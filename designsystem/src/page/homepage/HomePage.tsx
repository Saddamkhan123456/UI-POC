import { CategoryCard } from "../../molecules/categoryCard";
import { categoryData, brandCategoryData } from "../../constants/constants";
import CarouselComponent from "../../atoms/carousal/carousal";
import MyProfile from "../myProfile/myProfile";

const HomePage = () => {
  return (
    <>
      <div className="p-6 lg:p-6 sm:p-3">
        <CarouselComponent />
        <div>
          <div className="mb-4">
            <CategoryCard
              category="category"
              CardPropsSets={categoryData}
              className=""
            />
          </div>
          <div className="mb-4">
            <CategoryCard
              category="brand"
              CardPropsSets={brandCategoryData}
              className="bg-theme-neutral55"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
