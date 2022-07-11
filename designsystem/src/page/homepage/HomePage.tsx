import CardComponent from "../../atoms/card/card";
import { useEffect, useState } from "react";
import { allProducts } from "../../api/api";
import { CategoryCard, CardPropsSets } from "./categoryCard";

const categoryData: CardPropsSets[] = [
  {
    Image:
      "https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    Type: "Women",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    Type: "Men",
  },
  {
    Image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80",
    Type: "kids",
  },
];
const brandCategoryData: CardPropsSets[] = [
  {
    Image: "https://image3.mouthshut.com/images/imagesp/925906241s.png",
    Type: "Nike",
  },
  {
    Image: "https://1000logos.net/wp-content/uploads/2021/04/Puma-logo.png",
    Type: "Puma",
  },
  {
    Image: "https://1000logos.net/wp-content/uploads/2021/06/Wrangler-logo.png",
    Type: "wrangler",
  },
];
const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    allProducts().then((response) => {
      // console.log(response["data"][0].id);
      setData(response["data"]);
    });
  }, []);
  return (
    <>
      <div>
        <div className="mb-4">
          <CategoryCard
            category="category"
            CardPropsSets={categoryData}
            className="bg-theme-neutral"
          />
        </div>
        <div className="mb-4">
          <CategoryCard
            category="brand deals"
            CardPropsSets={brandCategoryData}
            className="bg-theme-neutral55"
          />
        </div>
        {/* <div className="grid grid-rows-3 grid-flow-col gap-4">
          <CardComponent />
        </div> */}
      </div>
    </>
  );
};

export default HomePage;
