import axios from "axios";
import { baseURL } from "../constants/constants";

export const allProducts = () => {
  return(
    axios.get(`${baseURL}/products`) //GET
    .then((response) => {
      return response
    })
    .catch((err) => {
      return(
        console.log(err)
      )
    } )
  )
};

export const productDetail = (productId) => {
  return(
    axios.get(`${baseURL}/products/${productId}`) //GET
    .then((response) => {
      return response
    })
    .catch((err) => {
      return(
        console.log(err)
      )
    } )
  )
};

export const allUsers = ()=>{
  return(
    axios.get(`${baseURL}/Users`) //GET
    .then((response) => {
      // console.log(response)
      return response
    })
    .catch((err) => {
      return(
        console.log(err)
      )
    } )
  )
}
