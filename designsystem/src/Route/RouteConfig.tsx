import { Route, Routes } from 'react-router-dom';
import HomePage from '../page/homepage/HomePage';
import ProductDetails from '../page/productDetails/ProductDetails';
import ProductCategoryPage from '../page/productCategoryPage/ProductCategoryPage';
import ProductBrandPage from '../page/productBrandPage/ProductBrandPage';
import ShoppingCartPage from '../page/shoppingCartPage/ShoppingCartPage';
import ThankYouPage from '../page/thankYouPage/ThankYouPage';
import CheckoutPage from '../page/checkoutPage/CheckoutPage';
import MyProfile from '../page/myProfile/myProfile';
import Signup from '../page/Signup/Signup';
import { Pages } from './Pages';
import Signin from '../page/Signin/Signin';

export default function RouteConfig() {
  return (
    <Routes>
      <Route path={Pages.HOMEPAGE} element={<HomePage />} />
      <Route path={Pages.PRODUCT_DETAIL} element={<ProductDetails />} />
      <Route path={Pages.CATEGORY_DETAIL} element={<ProductCategoryPage />} />
      <Route path={Pages.BRAND_DETAIL} element={<ProductBrandPage />} />
      <Route path={Pages.SHOPPING_CART} element={<ShoppingCartPage />} />
      <Route path={Pages.CHECKOUT} element={<CheckoutPage />} />
      <Route path={Pages.THANKYOU} element={<ThankYouPage />} />
      <Route path={Pages.MYPROFILE} element={<MyProfile />} />
      <Route path={Pages.REGISTER} element={<Signup />} />
      <Route path={Pages.LOGIN} element={<Signin />} />
    </Routes>
  );
}
