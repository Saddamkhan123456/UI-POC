import { CategoryCard } from "../../molecules/categoryCard";
import { categoryData, brandCategoryData } from "../../constants/constants";
import CarouselComponent from "../../atoms/carousal/carousal";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <CarouselComponent />
        <div className="container">
          <div className="my-8">
            <CategoryCard
              category="category"
              CardPropsSets={categoryData}
              className="relative"
              isCategoryShow={true}
            />
          </div>
          <div className="my-8">
            <CategoryCard
              category="brand"
              CardPropsSets={brandCategoryData}
              className="relative border rounded-lg p-4"
              isCategoryShow={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
