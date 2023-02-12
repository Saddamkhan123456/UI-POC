import { configureStore } from "@reduxjs/toolkit";
import { ProductAction } from "../redux/actions/Product.action";
import { AuthReducer } from "../redux/reducers/Auth.reducer";
import { BrandReducer } from "../redux/reducers/Brand.reducer";
import { CategoryReducer } from "../redux/reducers/Category.reducer";
import { ProductReducer } from "../redux/reducers/Product.reducer";
// ...

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    product: ProductReducer,
    category: CategoryReducer,
    brand: BrandReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch | ProductAction;

export default store;
