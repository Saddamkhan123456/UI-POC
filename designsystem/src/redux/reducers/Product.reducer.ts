import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_START,
  GET_ALL_PRODUCT_SUCCESS,
  ProductAction,
} from "../actions/Product.action";

interface DefaultStateI {
  loading: boolean;
  products?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const ProductReducer = (
  state: DefaultStateI = defaultState,
  action: ProductAction
): DefaultStateI => {
  switch (action.type) {
    case GET_ALL_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case GET_ALL_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { ProductReducer };
