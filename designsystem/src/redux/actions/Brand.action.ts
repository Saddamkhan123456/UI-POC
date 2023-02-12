export const GET_ALL_BRAND_START = "GET_ALL_BRAND_START";
export const GET_ALL_BRAND_FAIL = "GET_ALL_BRAND_FAIL";
export const GET_ALL_BRAND_SUCCESS = "GET_ALL_BRAND_SUCCESS";

export interface GetAllBrandsStart {
  type: typeof GET_ALL_BRAND_START;
}

export interface GetAllBrandsSuccess {
  type: typeof GET_ALL_BRAND_SUCCESS;
  payload: any;
}

export interface GetAllBrandsFail {
  type: typeof GET_ALL_BRAND_FAIL;
  error: any;
}

export type BrandDispatchType =
  | GetAllBrandsStart
  | GetAllBrandsSuccess
  | GetAllBrandsFail;

export type BrandAction = BrandDispatchType;
