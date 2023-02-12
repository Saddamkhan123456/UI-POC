import { Dispatch } from "redux";
import {
  AuthAction,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./Auth.action";
import axios from "axios";
import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_START,
  GET_ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  GET_PRODUCT_BY_ID_START,
  GET_PRODUCT_BY_ID_SUCCESS,
  ProductAction,
} from "./Product.action";
import {
  CategoryAction,
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_START,
  GET_ALL_CATEGORY_SUCCESS,
} from "./Category.action";
import {
  BrandAction,
  GET_ALL_BRAND_FAIL,
  GET_ALL_BRAND_START,
  GET_ALL_BRAND_SUCCESS,
} from "./Brand.action";

export const baseUrl: string = "http://localhost:9000/api/";

export const register = (data: any) => async (
  dispatch: Dispatch<AuthAction>
) => {
  try {
    dispatch({
      type: SIGNUP_START,
    });
    axios
      .post(baseUrl + "auth/register", data)
      .then((response) => {
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SIGNUP_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: SIGNUP_FAIL,
        error: e.message,
      });
    }
  }
};

export const getProducts = (category?: string, brand?: string) => (
  dispatch: Dispatch<ProductAction>
) => {
  try {
    dispatch({
      type: GET_ALL_PRODUCT_START,
    });
    axios
      .get(
        baseUrl +
          `product/${category ? `?category=${category}` : ""}${
            brand ? `?brand=${brand}` : ""
          }`
      )
      .then((response) => {
        dispatch({
          type: GET_ALL_PRODUCT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_PRODUCT_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: GET_ALL_PRODUCT_FAIL,
        error: e.message,
      });
    }
  }
};

export const getProduct = (id?: string) => (
  dispatch: Dispatch<ProductAction>
) => {
  try {
    dispatch({
      type: GET_PRODUCT_BY_ID_START,
    });
    axios
      .get(baseUrl + `product/${id}`)
      .then((response) => {
        dispatch({
          type: GET_PRODUCT_BY_ID_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PRODUCT_BY_ID_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: GET_PRODUCT_BY_ID_FAIL,
        error: e.message,
      });
    }
  }
};

export const getCategories = () => (dispatch: Dispatch<CategoryAction>) => {
  try {
    dispatch({
      type: GET_ALL_CATEGORY_START,
    });
    axios
      .get(baseUrl + "category/")
      .then((response) => {
        dispatch({
          type: GET_ALL_CATEGORY_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_CATEGORY_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: GET_ALL_CATEGORY_FAIL,
        error: e.message,
      });
    }
  }
};

export const getBrands = () => (dispatch: Dispatch<BrandAction>) => {
  try {
    dispatch({
      type: GET_ALL_BRAND_START,
    });
    axios
      .get(baseUrl + "brand/")
      .then((response) => {
        dispatch({
          type: GET_ALL_BRAND_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_BRAND_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: GET_ALL_BRAND_FAIL,
        error: e.message,
      });
    }
  }
};
