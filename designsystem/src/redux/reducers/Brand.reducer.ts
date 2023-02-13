import {
  BrandAction,
  GET_ALL_BRAND_FAIL,
  GET_ALL_BRAND_START,
  GET_ALL_BRAND_SUCCESS,
} from "../actions/Brand.action";

interface DefaultStateI {
  loading: boolean;
  brands?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const BrandReducer = (
  state: DefaultStateI = defaultState,
  action: BrandAction
): DefaultStateI => {
  switch (action.type) {
    case GET_ALL_BRAND_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_BRAND_SUCCESS:
      return {
        ...state,
        loading: false,
        brands: action.payload,
      };
    case GET_ALL_BRAND_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { BrandReducer };
