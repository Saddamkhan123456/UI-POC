export const ADD_CART_PRODUCT_START = "ADD_CART_PRODUCT_START";
export const ADD_CART_PRODUCT_FAIL = "ADD_CART_PRODUCT_FAIL";
export const ADD_CART_PRODUCT_SUCCESS = "ADD_CART_PRODUCT_SUCCESS";

export interface AddCartProductsStart {
  type: typeof ADD_CART_PRODUCT_START;
}

export interface AddCartProductsSuccess {
  type: typeof ADD_CART_PRODUCT_SUCCESS;
  payload: any;
}

export interface AddCartProductsFail {
  type: typeof ADD_CART_PRODUCT_FAIL;
  error: any;
}

export type AddCartDispatchType =
  | AddCartProductsStart
  | AddCartProductsSuccess
  | AddCartProductsFail;

export type AddCartAction = AddCartDispatchType;
