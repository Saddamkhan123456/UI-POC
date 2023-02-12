export const REMOVE_WISHLIST_PRODUCT_START = "ADD_WISHLIST_PRODUCT_START";
export const REMOVE_WISHLIST_PRODUCT_FAIL = "ADD_WISHLIST_PRODUCT_FAIL";
export const REMOVE_WISHLIST_PRODUCT_SUCCESS = "ADD_WISHLIST_PRODUCT_SUCCESS";

export interface RemoveWishlistProductsStart {
  type: typeof REMOVE_WISHLIST_PRODUCT_START;
}

export interface RemoveWishlistProductsSuccess {
  type: typeof REMOVE_WISHLIST_PRODUCT_SUCCESS;
  payload: any;
}

export interface RemoveWishlistProductsFail {
  type: typeof REMOVE_WISHLIST_PRODUCT_FAIL;
  error: any;
}

export type RemoveWishlistDispatchType =
  | RemoveWishlistProductsStart
  | RemoveWishlistProductsSuccess
  | RemoveWishlistProductsFail;

export type RemoveWishlistAction = RemoveWishlistDispatchType;
