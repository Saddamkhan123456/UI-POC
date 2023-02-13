import { configureStore } from "@reduxjs/toolkit";
import { ProductAction } from "../redux/actions/Product.action";
import { AddWishlistReducer } from "../redux/reducers/addWishlist.reducer";
import { AuthReducer } from "../redux/reducers/Auth.reducer";
import { BrandReducer } from "../redux/reducers/Brand.reducer";
import { CategoryReducer } from "../redux/reducers/Category.reducer";
import { GetWishlistReducer } from "../redux/reducers/getWishlist.reducer";
import { ProductReducer } from "../redux/reducers/Product.reducer";
import { RemoveWishlistReducer } from "../redux/reducers/removeWishlist.reducer";

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    category: CategoryReducer,
    brand: BrandReducer,
    getwishlist: GetWishlistReducer,
    addwishlist: AddWishlistReducer,
    removewishlist: RemoveWishlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | ProductAction;

export default store;
