import { CategoryCard } from "../../molecules/categoryCard";
import CarouselComponent from "../../atoms/carousal/carousal";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCategories,
  getBrands,
  getWishlistProducts,
  getCartProducts,
} from "../../redux/actions/ActionsCreators";
import { RootState } from "../../store/configureStore";

const HomePage = () => {
  const brands = useSelector((state: RootState) => state.brand);
  const categories = useSelector((state: RootState) => state.category);
  const auth = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getCategories());
    dispatch<any>(getBrands());
  }, []);
  useEffect(() => {
    console.log("auth", auth);
    if (auth.token) {
      dispatch<any>(getCartProducts());
      dispatch<any>(getWishlistProducts());
    }
  }, []);
  return (
    <>
      <div className="flex flex-col resposive-height overflow-auto items-center">
        <CarouselComponent />
        <div className="container">
          <div className="my-8">
            <CategoryCard
              category="category"
              CardPropsSets={categories?.categories}
              className="relative"
              isCategoryShow={true}
              loading={categories.loading}
            />
          </div>
          <div className="my-8">
            <CategoryCard
              category="brand"
              CardPropsSets={brands?.brands}
              className="relative border rounded-lg p-4"
              isCategoryShow={false}
              loading={brands.loading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
