import axios from "axios";
import { baseURL } from "../constants/constants";

export const allProducts = () => {
  return axios
    .get(`${baseURL}/products`) //GET
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const productDetail = (productId) => {
  return axios
    .get(`${baseURL}/products/${productId}`) //GET
    .then((response) => {
      return response;
    })
    .catch((err) => {
      return console.log(err);
    });
};

export const createUser = (checkoutDetails) => {
  return axios
    .post(
      `${baseURL}/Customers`, //post
      checkoutDetails
    )
    .then(function(response) {
      console.log(response);
    })
    .catch((err) => {
      return console.log(err);
    });
};
