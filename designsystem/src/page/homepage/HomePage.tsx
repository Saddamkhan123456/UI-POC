import React, { useEffect, useState } from "react";
import {allProducts} from '../../api/api'



const HomePage = () => {
  const [a , setA] = useState('a')
  useEffect( () => {
    allProducts().then((result) => {
      result['data'].map(item => {
        setA(item.title)
      })
      
    })
  },[]) 
  return (
    <>
      <div>{a}</div>
    </>
  );
};

export default HomePage;
