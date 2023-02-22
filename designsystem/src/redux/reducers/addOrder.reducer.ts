import {
  AddOrderAction,
  ADD_ORDER_PRODUCT_FAIL,
  ADD_ORDER_PRODUCT_START,
  ADD_ORDER_PRODUCT_SUCCESS,
} from "../actions/AddOrder.action";

interface DefaultStateI {
  loading: boolean;
  products?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const AddOrderReducer = (
  state: DefaultStateI = defaultState,
  action: AddOrderAction
): DefaultStateI => {
  switch (action.type) {
    case ADD_ORDER_PRODUCT_START:
      return {
        ...state,
        loading: true,
      };
    case ADD_ORDER_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: action.payload,
      };
    case ADD_ORDER_PRODUCT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { AddOrderReducer };
