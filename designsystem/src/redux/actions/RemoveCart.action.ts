export const REMOVE_CART_PRODUCT_START = "ADD_WISHLIST_PRODUCT_START";
export const REMOVE_CART_PRODUCT_FAIL = "ADD_WISHLIST_PRODUCT_FAIL";
export const REMOVE_CART_PRODUCT_SUCCESS = "ADD_WISHLIST_PRODUCT_SUCCESS";

export interface RemoveCartProductsStart {
  type: typeof REMOVE_CART_PRODUCT_START;
}

export interface RemoveCartProductsSuccess {
  type: typeof REMOVE_CART_PRODUCT_SUCCESS;
  payload: any;
}

export interface RemoveCartProductsFail {
  type: typeof REMOVE_CART_PRODUCT_FAIL;
  error: any;
}

export type RemoveCartDispatchType =
  | RemoveCartProductsStart
  | RemoveCartProductsSuccess
  | RemoveCartProductsFail;

export type RemoveCartAction = RemoveCartDispatchType;
