import { useEffect, useState, useContext } from "react";
import { Button } from "design-system";
import { useParams } from "react-router-dom";
import { productDetail } from "../../api/api";
import { CartContext } from "../../Contexts/cart.context";
import { WishlistContext } from "../../Contexts/wishlist.context";

const ProductDetails = () => {
  let { productId } = useParams();
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    description: "",
    price: null,
    thumbnail: "",
    brand: "",
    categoryId: "",
    id: null,
    quantity: null,
  });
  const { saveCartItem } = useContext(CartContext);
  useEffect(() => {
    productDetail(productId).then((response) => {
      setProductData(response["data"]);
    });
  }, []);
  const addProductToCart = () => saveCartItem(productData);
  const { saveWishlistItem } = useContext(WishlistContext);
  const addProductToWishlist = () => saveWishlistItem(productData);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 py-16">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div>
              <div className="mb-4">
                <div className="mb-4 flex items-center justify-center">
                  <img
                    src={productData.thumbnail}
                    alt="productImage"
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h1 className="mb-2 text-theme-neutral capitalize text-2xl md:text-3xl">
              {productData.title}
            </h1>
            <p className="mb-4 text-theme-neutral25 capitalize">
              {productData.category}
            </p>

            <h5 className="mb-2 text-theme-neutral text-md">Quantity</h5>

            <h5 className="mb-2 text-theme-neutral text-md">Description</h5>
            <div className="product-descriptiom">
              <p className="mb-4 text-theme-neutral25">
                {productData.description}
              </p>
            </div>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg flex">
                  <span className="text-theme-neutral mr-1 mt-1 text-3xl font-bold">
                    &#8377;{productData.price}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center  pb-4 ">
              <div className="w-1/2 md:w-1/3 mr-2">
                <Button
                  variant="primary"
                  className="block w-full px-3 py-2 uppercase h-38"
                  onClick={addProductToWishlist}
                >
                  Wishlist
                </Button>
              </div>
              <div className="w-1/2 md:w-1/3 ml-2">
                <Button
                  variant="secondary"
                  className="block w-full px-3 py-2 uppercase h-38"
                  onClick={addProductToCart}
                >
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
