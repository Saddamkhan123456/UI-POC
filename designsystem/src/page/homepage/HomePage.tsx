import { CategoryCard } from "../../molecules/categoryCard";
import { categoryData, brandCategoryData } from '../../constants/constants'


const HomePage = () => {
  return (
    <>
      <div>
        <div className="mb-4">
          <CategoryCard
            category="category"
            CardPropsSets={categoryData}
            className="bg-theme-neutral"
          />
        </div>
        <div className="mb-4">
          <CategoryCard
            category="brand deals"
            CardPropsSets={brandCategoryData}
            className="bg-theme-neutral55"
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
