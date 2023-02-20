export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';

export interface LoginStart {
  type: typeof LOGIN_START;
}

export interface LoginSuccess {
  type: typeof LOGIN_SUCCESS;
  payload: any;
}

export interface LoginFail {
  type: typeof LOGIN_FAIL;
  error: any;
}

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

export type AuthDispatchType = SignupStart | SignupSuccess | SignupFail | LoginStart | LoginSuccess | LoginFail;

export type AuthAction = AuthDispatchType;
