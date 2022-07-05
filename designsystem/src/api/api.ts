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
