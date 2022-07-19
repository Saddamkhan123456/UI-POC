import React, { useEffect } from "react";
import { allProducts } from "../../api/api";
import { CardComponent } from "../../atoms/card";

const CategoryPage = () => {
  // const [data, setData] = React.useState([]);
  const [menData, setmenData] = React.useState([]);
  const [womenData, setWomanData] = React.useState([]);
  useEffect(() => {
    allProducts().then((response) => {
      setmenData(response["data"].filter(dataItem => dataItem.category === "men's clothing"));
      setWomanData(response["data"].filter(dataItem => dataItem.category === "women's clothing"));
    });
  }, [allProducts]);

  return <div className="h-full bg-theme-primary flex">
    {menData && menData.length > 0 && menData.map((menDataItem) => {
      return (
        <>
          <CardComponent id={menDataItem.id} thumbnail={menDataItem.thumbnail} title={menDataItem.title} description={menDataItem.description} category={menDataItem.category} price={menDataItem.price} withBrand={true} brand={menDataItem.brand}/>
        </>
      )
    })}
    {womenData && womenData.length > 0 && womenData.map((womenDataItem) => {
      return (
        <>
          <CardComponent id={womenDataItem.id} thumbnail={womenDataItem.thumbnail} title={womenDataItem.title} description={womenDataItem.description} category={womenDataItem.category} price={womenDataItem.price}  withBrand={true} brand={womenDataItem.brand}/>
        </>
      )
    })}
  </div>;
};

export default CategoryPage;
