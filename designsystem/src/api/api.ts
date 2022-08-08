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



// export const allUsers = (data) => {
//   return(
//     fetch("http://localhost:8000/Users", {
//       method: "post",
//       headers: {
//         Accept: "application/json",
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(data),
//     }).then((result) => {
//       console.log(result, result);
//       return(result)  
//     })
//   )
// };



