import React, { useEffect, useState } from "react";
import { allProducts } from "../../api/api";
import CardComponent from "../../atoms/card/card";

const HomePage = () => {
  const [a, setA] = useState("a");
  useEffect(() => {
    allProducts().then((result) => {
      result["data"].map((item) => {
        setA(item.title);
      });
    });
  }, []);
  return (
    <>
      <div>{a}</div>
      <div className="flex flex-col">
        <CardComponent />
      </div>
    </>
  );
};

export default HomePage;
