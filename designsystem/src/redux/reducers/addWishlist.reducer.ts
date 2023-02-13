import {
  AddWishlistAction,
  ADD_WISHLIST_PRODUCT_FAIL,
  ADD_WISHLIST_PRODUCT_START,
  ADD_WISHLIST_PRODUCT_SUCCESS,
} from "../actions/AddWishlist.action";

interface DefaultStateI {
  loading: boolean;
  products?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const AddWishlistReducer = (
  state: DefaultStateI = defaultState,
  action: AddWishlistAction
): DefaultStateI => {
  switch (action.type) {
    case ADD_WISHLIST_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_WISHLIST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ADD_WISHLIST_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { AddWishlistReducer };
