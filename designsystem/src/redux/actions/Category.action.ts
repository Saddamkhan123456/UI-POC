export const GET_ALL_CATEGORY_START = "GET_ALL_CATEGORY_START";
export const GET_ALL_CATEGORY_FAIL = "GET_ALL_CATEGORY_FAIL";
export const GET_ALL_CATEGORY_SUCCESS = "GET_ALL_CATEGORY_SUCCESS";

export interface GetAllCategoriesStart {
  type: typeof GET_ALL_CATEGORY_START;
}

export interface GetAllCategoriesSuccess {
  type: typeof GET_ALL_CATEGORY_SUCCESS;
  payload: any;
}

export interface GetAllCategoriesFail {
  type: typeof GET_ALL_CATEGORY_FAIL;
  error: any;
}

export type CategoryDispatchType =
  | GetAllCategoriesStart
  | GetAllCategoriesSuccess
  | GetAllCategoriesFail;

export type CategoryAction = CategoryDispatchType;
