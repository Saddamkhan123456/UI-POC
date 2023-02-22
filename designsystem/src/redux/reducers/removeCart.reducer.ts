import {
  RemoveCartAction,
  REMOVE_CART_PRODUCT_FAIL,
  REMOVE_CART_PRODUCT_START,
  REMOVE_CART_PRODUCT_SUCCESS,
} from "../actions/RemoveCart.action";

interface DefaultStateI {
  loading: boolean;
  products?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const RemoveCartReducer = (
  state: DefaultStateI = defaultState,
  action: RemoveCartAction
): DefaultStateI => {
  switch (action.type) {
    case REMOVE_CART_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case REMOVE_CART_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case REMOVE_CART_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { RemoveCartReducer };
