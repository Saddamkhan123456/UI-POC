import { configureStore } from '@reduxjs/toolkit';
import { ProductAction } from '../redux/actions/Product.action';
import { AddCartReducer } from '../redux/reducers/addCart.reducer';
import { AddOrderReducer } from '../redux/reducers/addOrder.reducer';
import { AddWishlistReducer } from '../redux/reducers/addWishlist.reducer';
import { AuthReducer } from '../redux/reducers/Auth.reducer';
import { BrandReducer } from '../redux/reducers/Brand.reducer';
import { CategoryReducer } from '../redux/reducers/Category.reducer';
import { GetCartReducer } from '../redux/reducers/getCart.reducer';
import { GetWishlistReducer } from '../redux/reducers/getWishlist.reducer';
import { ProductReducer } from '../redux/reducers/Product.reducer';
import { RemoveCartReducer } from '../redux/reducers/removeCart.reducer';
import { RemoveWishlistReducer } from '../redux/reducers/removeWishlist.reducer';
import { OrderReducer } from '../redux/reducers/Orders.reducer';
import { ProfileReducer } from '../redux/reducers/Profile.reducer';

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    category: CategoryReducer,
    brand: BrandReducer,
    getwishlist: GetWishlistReducer,
    addwishlist: AddWishlistReducer,
    removewishlist: RemoveWishlistReducer,
    getCart: GetCartReducer,
    addCart: AddCartReducer,
    removeCart: RemoveCartReducer,
    addOrder: AddOrderReducer,
    profile: ProfileReducer,
    order: OrderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | ProductAction;

export default store;
