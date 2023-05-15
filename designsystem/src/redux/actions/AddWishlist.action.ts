export const ADD_WISHLIST_PRODUCT_START = "ADD_WISHLIST_PRODUCT_START";
export const ADD_WISHLIST_PRODUCT_FAIL = "ADD_WISHLIST_PRODUCT_FAIL";
export const ADD_WISHLIST_PRODUCT_SUCCESS = "ADD_WISHLIST_PRODUCT_SUCCESS";

export interface AddWishlistProductsStart {
  type: typeof ADD_WISHLIST_PRODUCT_START;
}

export interface AddWishlistProductsSuccess {
  type: typeof ADD_WISHLIST_PRODUCT_SUCCESS;
  payload: any;
}

export interface AddWishlistProductsFail {
  type: typeof ADD_WISHLIST_PRODUCT_FAIL;
  error: any;
}

export type AddWishlistDispatchType =
  | AddWishlistProductsStart
  | AddWishlistProductsSuccess
  | AddWishlistProductsFail;

export type AddWishlistAction = AddWishlistDispatchType;
