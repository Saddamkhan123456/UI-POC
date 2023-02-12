import {
  RemoveWishlistAction,
  REMOVE_WISHLIST_PRODUCT_FAIL,
  REMOVE_WISHLIST_PRODUCT_START,
  REMOVE_WISHLIST_PRODUCT_SUCCESS,
} from "../actions/RemoveWishlist.action";

interface DefaultStateI {
  loading: boolean;
  products?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const RemoveWishlistReducer = (
  state: DefaultStateI = defaultState,
  action: RemoveWishlistAction
): DefaultStateI => {
  switch (action.type) {
    case REMOVE_WISHLIST_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_WISHLIST_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case REMOVE_WISHLIST_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { RemoveWishlistReducer };
