export const SIGNUP_START = "SIGNUP__START";
export const SIGNUP_FAIL = "SIGNUP_FAIL";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";

export interface SignupStart {
  type: typeof SIGNUP_START;
}

export interface SignupSuccess {
  type: typeof SIGNUP_SUCCESS;
  payload: any;
}

export interface SignupFail {
  type: typeof SIGNUP_FAIL;
  error: any;
}

export type AuthDispatchType = SignupStart | SignupSuccess | SignupFail;

export type AuthAction = AuthDispatchType;
