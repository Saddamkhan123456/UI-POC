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
  ProductAction,
} from "./Product.action";

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

export const getProducts = () => (dispatch: Dispatch<ProductAction>) => {
  try {
    dispatch({
      type: GET_ALL_PRODUCT_START,
    });
    axios
      .get(baseUrl + "product/")
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
