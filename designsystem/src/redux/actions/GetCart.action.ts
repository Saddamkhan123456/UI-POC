export const GET_CART_PRODUCT_START = "GET_CART_PRODUCT_START";
export const GET_CART_PRODUCT_FAIL = "GET_CART_PRODUCT_FAIL";
export const GET_CART_PRODUCT_SUCCESS = "GET_CART_PRODUCT_SUCCESS";

export interface GetCartProductsStart {
  type: typeof GET_CART_PRODUCT_START;
}

export interface GetCartProductsSuccess {
  type: typeof GET_CART_PRODUCT_SUCCESS;
  payload: any;
}

export interface GetCartProductsFail {
  type: typeof GET_CART_PRODUCT_FAIL;
  error: any;
}

export type GetCartDispatchType =
  | GetCartProductsStart
  | GetCartProductsSuccess
  | GetCartProductsFail;

export type GetCartAction = GetCartDispatchType;
