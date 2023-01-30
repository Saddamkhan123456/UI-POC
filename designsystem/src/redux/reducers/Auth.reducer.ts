import {
  AuthAction,
  SIGNUP_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
} from "../actions/Auth.action";

interface DefaultStateI {
  loading: boolean;
  signupData?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const AuthReducer = (
  state: DefaultStateI = defaultState,
  action: AuthAction
): DefaultStateI => {
  switch (action.type) {
    case SIGNUP_START:
      return {
        ...state,
        loading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signupData: action.payload,
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { AuthReducer };
