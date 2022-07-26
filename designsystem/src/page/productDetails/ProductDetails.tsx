import { useEffect, useState } from "react";
import { Button } from "design-system";
import { QuantityBox } from "../../molecules/quantityBox";
import { Sizes } from "../../atoms/sizes";
import { useParams } from "react-router-dom";
import { productDetail } from "../../api/api";


const ProductDetails = () => {
  let { productId } = useParams();
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    thumbnail: "",

  });
  useEffect(() => {
    productDetail(productId).then((response) => {
      setProductData(response["data"]);

    });
  }, []);
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 py-16">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div>
              <div className="mb-4">
                <div className="mb-4 flex items-center justify-center">
                  <img
                    src={productData.thumbnail}
                    alt="productImage" width="400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h1 className="mb-2 text-theme-neutral capitalize text-2xl md:text-3xl">
              {productData.title}
            </h1>
            <p className="mb-4 text-theme-neutral55 capitalize">
              {productData.category}
            </p>

            <h5 className="mb-2 text-theme-neutral text-md">Size</h5>
            <div className="mb-4">
              <Sizes />
            </div>

            <h5 className="mb-2 text-theme-neutral text-md">Quantity</h5>
            <div className="mb-4">
              <QuantityBox />
            </div>

            <h5 className="mb-2 text-theme-neutral text-md">Description</h5>
            <div className="product-descriptiom">
              <p className="mb-4 text-theme-neutral55">
                {productData.description}
              </p>
            </div>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg flex">
                  <span className="text-theme-neutral mr-1 mt-1 text-3xl font-bold">
                    ${productData.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center  pb-4 ">
              <div className="w-1/2 md:w-1/3 pr-2">
                <Button
                  variant="primary"
                  className="block w-full px-3 py-2  uppercase"
                >
                  wishlist
                </Button>
              </div>
              <div className="w-1/2 md:w-1/3 pr-2">
                <Button
                  variant="secondary"
                  className="block w-full px-3 py-2 uppercase "
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  )
}

export default ProductDetails;