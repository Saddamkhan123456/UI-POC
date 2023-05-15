import {
  ProfileAction,
  GET_PROFILE_START,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
} from '../actions/Profile.action';

interface IntialState {
  loading: boolean;
  userData?: any;
  error?: any;
}
const defaultState: IntialState = {
  loading: false,
};

const ProfileReducer = (state: IntialState = defaultState, action: ProfileAction): IntialState => {
  switch (action.type) {
    case GET_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        userData: action.payload.profile,
        loading: false,
      };
    case GET_PROFILE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: true,
      };
    case UPDATE_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        loading: false,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        error: action.error,
        loading: true,
      };
    default:
      return state;
  }
};

export { ProfileReducer };
