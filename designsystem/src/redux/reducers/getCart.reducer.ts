import {
  GetCartAction,
  GET_CART_PRODUCT_FAIL,
  GET_CART_PRODUCT_START,
  GET_CART_PRODUCT_SUCCESS,
} from "../actions/GetCart.action";

interface DefaultStateI {
  loading: boolean;
  products?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const GetCartReducer = (
  state: DefaultStateI = defaultState,
  action: GetCartAction
): DefaultStateI => {
  switch (action.type) {
    case GET_CART_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case GET_CART_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_CART_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { GetCartReducer };
