import { useEffect, useState, useContext } from "react";
import { Button } from "design-system";
import { useParams } from "react-router-dom";
import { CartContext } from "../../Contexts/cart.context";
import { WishlistContext } from "../../Contexts/wishlist.context";
import { useDispatch, useSelector } from "react-redux";
import {
  addCartProducts,
  getProduct,
} from "../../redux/actions/ActionsCreators";
import { RootState } from "../../store/configureStore";
import { imageBaseUrl } from "../../constants/constants";
import Spinner from "../../atoms/spinner/spinner";
import ImageGallery from "react-image-gallery";
import { addWishlistProducts } from "../../redux/actions/ActionsCreators";

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
  const [images, setImages] = useState<any>([]);
  const dispatch = useDispatch();
  const addProductToCart = () => {
    dispatch<any>(addCartProducts({ id: productId, quantity: 1 }));
  };
  const addProductToWishlist = () => {
    dispatch<any>(addWishlistProducts(productId));
  };
  const product = useSelector((state: RootState) => state.product);
  useEffect(() => {
    dispatch<any>(getProduct(productId));
  }, [productId]);

  useEffect(() => {
    let images: any = [];
    images = product?.product?.images.map((img: any) => ({
      original: imageBaseUrl + img.img,
      thumbnail: imageBaseUrl + img.img,
    }));
    setImages(images);
  }, [product?.product]);

  return (
    <>
      {product.loading ? (
        <Spinner />
      ) : (
        <>
          <div className="flex flex-col container mx-auto py-8">
            <div className="flex flex-col md:flex-row ">
              <div className="md:flex-1">
                <div className="flex items-center justify-center px-6">
                  <div className="w-full aspect-square">
                    <ImageGallery
                      thumbnailPosition="left"
                      lazyLoad={true}
                      items={images?.length ? images : []}
                      showPlayButton={false}
                    />
                  </div>
                </div>
              </div>
              <div className="md:flex-1  mt-4 px-6">
                <div className="max-w-lg">
                  <h1 className="mb-2 text-theme-neutral capitalize text-2xl ">
                    {product?.product?.title}
                  </h1>
                  <p className="mb-4 text-theme-neutral25 capitalize">
                    {product?.product?.brand?.title}
                  </p>
                  <div className="product-descriptiom">
                    <p className="mb-4 text-theme-neutral25 font-light text-lg">
                      {product?.product?.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-4 my-4">
                    <div>
                      <div className="rounded-lg flex">
                        <span className="text-theme-neutral mr-1 mt-1 text-2xl font-bold">
                          &#8377;{product?.product?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center  pb-4 ">
                    <div className="w-1/2 md:w-1/3 mr-2">
                      <Button
                        variant="primary"
                        className="block w-full px-3 py-2 uppercase h-38 cursor-pointer hover:opacity-90"
                        onClick={addProductToWishlist}
                      >
                        Wishlist
                      </Button>
                    </div>
                    <div className="w-1/2 md:w-1/3 ml-2">
                      <Button
                        variant="secondary"
                        className="block w-full px-3 py-2 uppercase h-38 cursor-pointer hover:opacity-90"
                        onClick={addProductToCart}
                      >
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
