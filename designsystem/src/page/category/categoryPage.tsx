import React, { useEffect } from "react";
import { allProducts } from "../../api/api";

const CategoryPage = () => {
  const [data, setData] = React.useState([]);
  const [menData, setmenData] = React.useState([]);
  useEffect(() => {
    allProducts().then((response) => {
      //   console.log(response["data"]);
      setData(response["data"]);
    });
    setmenData(
      data.filter((dataItem) => dataItem.category === "men's clothing")
    );
  }, []);
  console.log(menData);

  return <div className="h-full bg-theme-primary flex">C</div>;
};

export default CategoryPage;
