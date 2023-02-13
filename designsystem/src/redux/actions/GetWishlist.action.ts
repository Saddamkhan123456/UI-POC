export const GET_WISHLIST_PRODUCT_START = "GET_WISHLIST_PRODUCT_START";
export const GET_WISHLIST_PRODUCT_FAIL = "GET_WISHLIST_PRODUCT_FAIL";
export const GET_WISHLIST_PRODUCT_SUCCESS = "GET_WISHLIST_PRODUCT_SUCCESS";

export interface GetWishlistProductsStart {
  type: typeof GET_WISHLIST_PRODUCT_START;
}

export interface GetWishlistProductsSuccess {
  type: typeof GET_WISHLIST_PRODUCT_SUCCESS;
  payload: any;
}

export interface GetWishlistProductsFail {
  type: typeof GET_WISHLIST_PRODUCT_FAIL;
  error: any;
}

export type GetWishlistDispatchType =
  | GetWishlistProductsStart
  | GetWishlistProductsSuccess
  | GetWishlistProductsFail;

export type GetWishlistAction = GetWishlistDispatchType;
