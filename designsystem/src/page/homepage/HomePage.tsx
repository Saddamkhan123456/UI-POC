
import { CategoryCard } from "../../molecules/categoryCard";
import { categoryData, brandCategoryData } from "../../constants/constants";
import CarouselComponent from "../../atoms/carousal/carousal";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <CarouselComponent />
        <div className="container">
          <div className="mb-4 ">
            <CategoryCard
              category="category"
              CardPropsSets={categoryData}
              className="bg-theme-neutral"
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
