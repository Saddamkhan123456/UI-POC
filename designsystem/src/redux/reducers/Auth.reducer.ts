import {
  AuthAction,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/Auth.action';

interface DefaultStateI {
  loading: boolean;
  data?: any;
  error?: any;
  token?: string | undefined;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const AuthReducer = (state: DefaultStateI = defaultState, action: AuthAction): DefaultStateI => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
        token: null,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.payload,
        token: action.payload.token,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        token: null,
      };
    case LOGIN_START:
      return {
        ...state,
        loading: true,
        token: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.payload,
        token: action.payload.token,
      };
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
        token: null,
      };
    default:
      return state;
  }
};

export { AuthReducer };
