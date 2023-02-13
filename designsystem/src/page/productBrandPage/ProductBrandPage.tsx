import { useEffect, useState } from "react";
import { Banner } from "../../atoms/banner";
import { useLocation, useParams } from "react-router-dom";
import { CardComponent } from "../../atoms/card";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/ActionsCreators";
import { RootState } from "../../store/configureStore";

const ProductBrandPage = () => {
  const location = useLocation() as any;
  const product = useSelector((state: RootState) => state.product);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getProducts(null, location.state.id));
  }, [location?.state?.id]);

  let { title } = useParams();

  return (
    <div className="flex flex-col items-center">
      <Banner pageHeading={title} />
      <div className="flex flex-col container my-4">
        {product?.products?.length ? (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {product?.products?.map((cardData: any) => {
              return <CardComponent CardData={cardData} key={cardData._id} />;
            })}
          </div>
        ) : (
          <h5 className="text-center">No data for brand : {title}</h5>
        )}
      </div>
    </div>
  );
};

export default ProductBrandPage;
