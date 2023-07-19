import {
  AddCartAction,
  ADD_CART_PRODUCT_FAIL,
  ADD_CART_PRODUCT_START,
  ADD_CART_PRODUCT_SUCCESS,
} from "../actions/AddCart.action";

interface DefaultStateI {
  loading: boolean;
  products?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const AddCartReducer = (
  state: DefaultStateI = defaultState,
  action: AddCartAction
): DefaultStateI => {
  switch (action.type) {
    case ADD_CART_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_CART_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ADD_CART_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { AddCartReducer };
