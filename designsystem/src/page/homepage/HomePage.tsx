import CardComponent from "../../atoms/card/card";
import { useEffect, useState } from "react";
import { allProducts } from "../../api/api";
import { CategoryCard, CardPropsSets } from "./categoryCard";

const categoryData: CardPropsSets[] = [
  {
    Image:
      "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/productimage/2021/2/3/bc8dc9ca-33a6-434f-8d3a-c069e629a6d11612357352097-1.jpg",
    Type: "Women",
  },
  {
    Image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/productimage/2019/12/12/1aab2a18-6774-4f83-b292-fe301755a3351576102551329-1.jpg",
    Type: "Men",
  },
  {
    Image:
      "https://assets.myntassets.com/h_720,q_90,w_540/v1/assets/images/17722704/2022/4/1/0d88f80a-ba4a-408c-9e19-7035f3dfdb3216488052871413-packcottonT-shirts1.jpg",
    Type: "kids",
  },
];
const brandCategoryData: CardPropsSets[] = [
  {
    Image:
      "https://assets.myntassets.com/w_140,c_limit,fl_progressive,dpr_2.0/assets/images/2022/3/14/971db165-cf95-476c-89d7-e4c9e41be7f51647247892158-Top-Brands-----3.jpg",
    Type: "Nike",
  },
  {
    Image:
      "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/26/1aaf5e6a-2978-4ed8-9634-1559f530d73b1645860227457-SS22-BestOfBrands-H_M.jpg",
    Type: "Puma",
  },
  {
    Image:
      "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/25/fd730d26-ff9d-41e5-af2e-b20f71757b5f1645779089335-BestOfBrands-Nike.jpg",
    Type: "vero moda",
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
          <CategoryCard category="category" CardPropsSets={categoryData} />
        </div>
        <div className="mb-4">
          <CategoryCard
            category="brand category"
            CardPropsSets={brandCategoryData}
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
