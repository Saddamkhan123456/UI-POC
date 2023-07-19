import {
  CategoryAction,
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_START,
  GET_ALL_CATEGORY_SUCCESS,
} from "../actions/Category.action";

interface DefaultStateI {
  loading: boolean;
  categories?: any;
  error?: any;
}
const defaultState: DefaultStateI = {
  loading: false,
};
const CategoryReducer = (
  state: DefaultStateI = defaultState,
  action: CategoryAction
): DefaultStateI => {
  switch (action.type) {
    case GET_ALL_CATEGORY_START:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };
    case GET_ALL_CATEGORY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export { CategoryReducer };
