export const GET_ALL_PRODUCT_START = "GET_ALL_PRODUCT_START";
export const GET_ALL_PRODUCT_FAIL = "GET_ALL_PRODUCT_FAIL";
export const GET_ALL_PRODUCT_SUCCESS = "GET_ALL_PRODUCT_SUCCESS";

export interface GetAllProductsStart {
  type: typeof GET_ALL_PRODUCT_START;
}

export interface GetAllProductsSuccess {
  type: typeof GET_ALL_PRODUCT_SUCCESS;
  payload: any;
}

export interface GetAllProductsFail {
  type: typeof GET_ALL_PRODUCT_FAIL;
  error: any;
}

export type ProductDispatchType =
  | GetAllProductsStart
  | GetAllProductsSuccess
  | GetAllProductsFail;

export type ProductAction = ProductDispatchType;
