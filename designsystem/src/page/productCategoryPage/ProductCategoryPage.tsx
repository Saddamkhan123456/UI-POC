import { useEffect, useState } from "react";
import { Banner } from "../../atoms/banner";
import { useParams } from "react-router-dom";
import { allProducts } from "../../api/api";
import { CardComponent } from "../../atoms/card";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/ActionsCreators";
import { RootState } from "../../store/configureStore";


const ProductCategoryPage = () => {
  const [categoryData, setCategoryData] = useState([]);
  const product = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch<any>(getProducts());
  }, []);

  let { categoryId } = useParams();

  useEffect(() => {
    setCategoryData(product?.products);
  }, [product?.products]);

  return (
    <div className="flex flex-col items-center">
      <Banner pageHeading={categoryId} />
      <div className="flex flex-col container my-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {product?.products?.product.map((cardData: any) => {
            return (
              <>
                <CardComponent CardData={cardData} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductCategoryPage;
