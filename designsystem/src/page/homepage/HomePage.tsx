import React, { useEffect, useState } from "react";
import { allProducts } from "../../api/api";
import CardComponent from "../../atoms/card/card";

const HomePage = () => {
  const [a, setA] = useState("a");
  useEffect(() => {
    allProducts().then((result) => {
      result["data"].map((item) => {
        setA(item.title);
        // console.log(result["data"][0].title);
      });
    });
  }, []);
  return (
    <>
      {/* <div>{a}</div> */}
      <div className="flex flex-col p-3">
        <div className="grid grid-rows-3 grid-flow-col gap-4">
          <CardComponent />
          {/* <CardComponent /> */}
        </div>
      </div>
    </>
  );
};

export default HomePage;
