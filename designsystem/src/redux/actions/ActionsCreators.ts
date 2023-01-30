import { Dispatch } from "redux";
import {
  AuthAction,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from "./Auth.action";
import axios from "axios";

let API: string = "http://localhost:9000/api/";

export const saveSurvey = (data: any) => async (
  dispatch: Dispatch<AuthAction>
) => {
  try {
    dispatch({
      type: SIGNUP_START,
    });
    axios
      .post(API + "auth/register", data)
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
