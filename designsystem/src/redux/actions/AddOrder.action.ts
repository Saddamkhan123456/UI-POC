export const ADD_ORDER_PRODUCT_START = "ADD_CART_PRODUCT_START";
export const ADD_ORDER_PRODUCT_FAIL = "ADD_CART_PRODUCT_FAIL";
export const ADD_ORDER_PRODUCT_SUCCESS = "ADD_CART_PRODUCT_SUCCESS";

export interface AddOrderProductsStart {
  type: typeof ADD_ORDER_PRODUCT_START;
}

export interface AddOrderProductsSuccess {
  type: typeof ADD_ORDER_PRODUCT_SUCCESS;
  payload: any;
}

export interface AddOrderProductsFail {
  type: typeof ADD_ORDER_PRODUCT_FAIL;
  error: any;
}

export type AddOrderDispatchType =
  | AddOrderProductsStart
  | AddOrderProductsSuccess
  | AddOrderProductsFail;

export type AddOrderAction = AddOrderDispatchType;
