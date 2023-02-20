import { Dispatch } from 'redux';
import {
  AuthAction,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './Auth.action';
import axios from 'axios';
import {
  GET_ALL_PRODUCT_FAIL,
  GET_ALL_PRODUCT_START,
  GET_ALL_PRODUCT_SUCCESS,
  GET_PRODUCT_BY_ID_FAIL,
  GET_PRODUCT_BY_ID_START,
  GET_PRODUCT_BY_ID_SUCCESS,
  ProductAction,
} from './Product.action';
import {
  CategoryAction,
  GET_ALL_CATEGORY_FAIL,
  GET_ALL_CATEGORY_START,
  GET_ALL_CATEGORY_SUCCESS,
} from './Category.action';
import { BrandAction, GET_ALL_BRAND_FAIL, GET_ALL_BRAND_START, GET_ALL_BRAND_SUCCESS } from './Brand.action';

import {
  GetWishlistAction,
  GET_WISHLIST_PRODUCT_FAIL,
  GET_WISHLIST_PRODUCT_START,
  GET_WISHLIST_PRODUCT_SUCCESS,
} from './GetWishlist.action';

import {
  AddWishlistAction,
  ADD_WISHLIST_PRODUCT_FAIL,
  ADD_WISHLIST_PRODUCT_START,
  ADD_WISHLIST_PRODUCT_SUCCESS,
} from './AddWishlist.action';
import { token } from '../../constants/constants';

export const baseUrl: string = 'http://localhost:9000/api/';

export const registerUser = (data: object) => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch({
      type: SIGNUP_START,
    });
    axios
      .post(baseUrl + 'auth/register', data)
      .then((response) => {
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        localStorage.removeItem('token');
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

export const loginUser = (data: object) => async (dispatch: Dispatch<AuthAction>) => {
  try {
    dispatch({
      type: LOGIN_START,
    });
    axios
      .post(baseUrl + 'auth/login', data)
      .then((response) => {
        console.log(response.data.token);
        localStorage.setItem('token', response.data.token);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        localStorage.removeItem('token');
        dispatch({
          type: LOGIN_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: LOGIN_FAIL,
        error: e.message,
      });
    }
  }
};

export const getProducts = (category?: string, brand?: string) => (dispatch: Dispatch<ProductAction>) => {
  try {
    dispatch({
      type: GET_ALL_PRODUCT_START,
    });
    axios
      .get(baseUrl + `product/${category ? `?category=${category}` : ''}${brand ? `?brand=${brand}` : ''}`)
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

export const getProduct = (id?: string) => (dispatch: Dispatch<ProductAction>) => {
  try {
    dispatch({
      type: GET_PRODUCT_BY_ID_START,
    });
    axios
      .get(baseUrl + `product/${id}`)
      .then((response) => {
        dispatch({
          type: GET_PRODUCT_BY_ID_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_PRODUCT_BY_ID_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: GET_PRODUCT_BY_ID_FAIL,
        error: e.message,
      });
    }
  }
};

export const getCategories = () => (dispatch: Dispatch<CategoryAction>) => {
  try {
    dispatch({
      type: GET_ALL_CATEGORY_START,
    });
    axios
      .get(baseUrl + 'category')
      .then((response) => {
        dispatch({
          type: GET_ALL_CATEGORY_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_CATEGORY_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: GET_ALL_CATEGORY_FAIL,
        error: e.message,
      });
    }
  }
};

export const getBrands = () => (dispatch: Dispatch<BrandAction>) => {
  try {
    dispatch({
      type: GET_ALL_BRAND_START,
    });
    axios
      .get(baseUrl + 'brand')
      .then((response) => {
        dispatch({
          type: GET_ALL_BRAND_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_ALL_BRAND_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: GET_ALL_BRAND_FAIL,
        error: e.message,
      });
    }
  }
};

export const getWishlistProducts = () => (dispatch: Dispatch<GetWishlistAction>) => {
  let config = {
    method: 'get',
    url: `${baseUrl}user/wishlist`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    dispatch({
      type: GET_WISHLIST_PRODUCT_START,
    });
    axios(config)
      .then((response) => {
        dispatch({
          type: GET_WISHLIST_PRODUCT_SUCCESS,
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_WISHLIST_PRODUCT_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: GET_WISHLIST_PRODUCT_FAIL,
        error: e.message,
      });
    }
  }
};

export const addWishlistProducts = (data) => (dispatch: Dispatch<AddWishlistAction>) => {
  var body = JSON.stringify({
    productId: data,
  });
  let config = {
    method: 'put',
    url: `${baseUrl}user/wishlist`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: body,
  };
  try {
    dispatch({
      type: ADD_WISHLIST_PRODUCT_START,
    });
    axios(config)
      .then((response) => {
        dispatch({
          type: ADD_WISHLIST_PRODUCT_SUCCESS,
          payload: response.data,
        });
        dispatch<any>(getWishlistProducts());
      })
      .catch((error) => {
        dispatch({
          type: ADD_WISHLIST_PRODUCT_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: ADD_WISHLIST_PRODUCT_FAIL,
        error: e.message,
      });
    }
  }
};

export const removeWishlistProducts = (data) => (dispatch: Dispatch<AddWishlistAction>) => {
  var body = JSON.stringify({
    productId: data,
  });
  let config = {
    method: 'put',
    url: `${baseUrl}user/wishlist/remove`,
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    data: body,
  };
  try {
    dispatch({
      type: ADD_WISHLIST_PRODUCT_START,
    });
    axios(config)
      .then((response) => {
        dispatch({
          type: ADD_WISHLIST_PRODUCT_SUCCESS,
          payload: response.data,
        });
        dispatch<any>(getWishlistProducts());
      })
      .catch((error) => {
        dispatch({
          type: ADD_WISHLIST_PRODUCT_FAIL,
          error: error.message,
        });
      });
  } catch (e) {
    if (e instanceof Error) {
      dispatch({
        type: ADD_WISHLIST_PRODUCT_FAIL,
        error: e.message,
      });
    }
  }
};
