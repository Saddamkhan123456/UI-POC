export const GET_ALL_PRODUCT_START = "GET_ALL_PRODUCT_START";
export const GET_ALL_PRODUCT_FAIL = "GET_ALL_PRODUCT_FAIL";
export const GET_ALL_PRODUCT_SUCCESS = "GET_ALL_PRODUCT_SUCCESS";

export const GET_PRODUCT_BY_ID_START = "GET_PRODUCT_BY_ID_START";
export const GET_PRODUCT_BY_ID_FAIL = "GET_PRODUCT_BY_ID_FAIL";
export const GET_PRODUCT_BY_ID_SUCCESS = "GET_PRODUCT_BY_ID_SUCCESS";

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

export interface GetProductByIdStart {
  type: typeof GET_PRODUCT_BY_ID_START;
}

export interface GetProductByIdSuccess {
  type: typeof GET_PRODUCT_BY_ID_SUCCESS;
  payload: any;
}

export interface GetProductByIdFail {
  type: typeof GET_PRODUCT_BY_ID_FAIL;
  error: any;
}

export type ProductDispatchType =
  | GetAllProductsStart
  | GetAllProductsSuccess
  | GetAllProductsFail
  | GetProductByIdStart
  | GetProductByIdSuccess
  | GetProductByIdFail;

export type ProductAction = ProductDispatchType;
