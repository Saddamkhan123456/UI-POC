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

export const createUser = (userData) => {
  return (
    //Post

    axios
      .post(`${baseURL}/Customers`, {
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
        country: userData.country,
        state: userData.state,
        flatNo: userData.flatNo,
        areaStreet: userData.areaStreet,
        pincode: userData.pincode,
        townCity: userData.townCity,
      })
      .then((result) => {
        console.log(result.data);
      })
      .catch((error) => {
        alert("error");
        console.log(error);
      })
  );
};
