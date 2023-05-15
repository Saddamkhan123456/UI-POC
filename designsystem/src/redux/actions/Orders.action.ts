export const GET_ORDERS_START = 'GET_ORDERS_START';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAIL = 'GET_ORDERS_FAIL';

export interface GetOrdersStart {
  type: typeof GET_ORDERS_START;
}

export interface GetOrdersSuccess {
  type: typeof GET_ORDERS_SUCCESS;
  payload: any;
}

export interface GetOrdersFail {
  type: typeof GET_ORDERS_FAIL;
  error: any;
}

export type OrdersDispatchType = GetOrdersStart | GetOrdersSuccess | GetOrdersFail;

export type OrdersAction = OrdersDispatchType;
