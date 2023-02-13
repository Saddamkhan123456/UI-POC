import {
  GetWishlistAction,
  GET_WISHLIST_PRODUCT_FAIL,
  GET_WISHLIST_PRODUCT_START,
  GET_WISHLIST_PRODUCT_SUCCESS,
} from "../actions/GetWishlist.action";

interface DefaultStateI {
  loading: boolean;
  products?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const GetWishlistReducer = (
  state: DefaultStateI = defaultState,
  action: GetWishlistAction
): DefaultStateI => {
  switch (action.type) {
    case GET_WISHLIST_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case GET_WISHLIST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_WISHLIST_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { GetWishlistReducer };
