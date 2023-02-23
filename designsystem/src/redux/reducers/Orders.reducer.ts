import { OrdersAction, GET_ORDERS_START, GET_ORDERS_SUCCESS, GET_ORDERS_FAIL } from '../actions/Orders.action';

interface IntialState {
  loading: boolean;
  orderData?: any;
  error?: any;
}
const defaultState: IntialState = {
  loading: false,
};

const OrderReducer = (state: IntialState = defaultState, action: OrdersAction): IntialState => {
  switch (action.type) {
    case GET_ORDERS_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orderData: action.payload,
        loading: false,
      };
    case GET_ORDERS_FAIL:
      return {
        ...state,
        error: action.error,
        loading: true,
      };
    default:
      return state;
  }
};

export { OrderReducer };
