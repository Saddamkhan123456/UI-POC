export const GET_PROFILE_START = 'GET_PROFILE_START';
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAIL = 'GET_PROFILE_FAIL';
export const UPDATE_PROFILE_START = 'UPDATE_PROFILE_START';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAIL = 'UPDATE_PROFILE_FAIL';

export interface GetProfileStart {
  type: typeof GET_PROFILE_START;
}

export interface GetProfileSuccess {
  type: typeof GET_PROFILE_SUCCESS;
  payload: any;
}

export interface GetProfileFail {
  type: typeof GET_PROFILE_FAIL;
  error: any;
}

export interface UpdateProfileStart {
  type: typeof UPDATE_PROFILE_START;
}

export interface UpdateProfileSuccess {
  type: typeof UPDATE_PROFILE_SUCCESS;
  payload: any;
}

export interface UpdateProfileFail {
  type: typeof UPDATE_PROFILE_FAIL;
  error: any;
}

export type ProfileDispatchType =
  | GetProfileStart
  | GetProfileSuccess
  | GetProfileFail
  | UpdateProfileStart
  | UpdateProfileSuccess
  | UpdateProfileFail;

export type ProfileAction = ProfileDispatchType;
