import { CardPropsSets } from "../molecules/categoryCard";

// base json server
export const baseURL = 'http://localhost:8000';


export const categoryData: CardPropsSets[] = [
  {
    id: 1,
    image:
      "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/d3c5cd23-392f-40be-8080-99ffb79c27261645602467128-Tops.jpg",
    type: "women",
    link: '/product/category',
  },
  {
    id: 2,
    image:
      "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/0b7869d4-f825-4625-b1db-58ad10a45f301645602467093-Shirts.jpg",
    type: "men",
    link: '/product/category',
  },
  {
    id: 3,
    image:
      "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/b156f76a-26e7-4bce-9941-8a67d3c16f331645602467120-Teens-Wear.jpg",
    type: "kids",
    link: '/product/category',
  },
  {
    id: 4,
    image:
      "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/aae4be67-e611-47f4-b94e-92a16a36df731645602467007-Hangbags.jpg",
    type: "bags",
    link: '/product/category',
  },
  {
    id: 5,
    image:
      "https://assets.myntassets.com/w_122,c_limit,fl_progressive,dpr_2.0/assets/images/2022/2/23/7a774194-94e6-49b5-b8bb-64bf9901bc671645602466989-Casual-Shoes.jpg",
    type: "shoes",
    link: '/product/category',
  },
];

export const brandCategoryData: CardPropsSets[] = [
  {
    id: 1,
    image: "https://image3.mouthshut.com/images/imagesp/925906241s.png",
    type: "Nike",
  },
  {
    id: 2,
    image: "https://1000logos.net/wp-content/uploads/2021/04/Puma-logo.png",
    type: "Puma",
  },
  {
    id: 3,
    image: "https://1000logos.net/wp-content/uploads/2021/06/Wrangler-logo.png",
    type: "Wrangler",
  },
  {
    id: 4,
    image: "https://w7.pngwing.com/pngs/417/858/png-transparent-adidas-adidas-text-photography-logo-thumbnail.png",
    type: "adidas",
  },
  {
    id: 5,
    image: "https://www.kindpng.com/picc/m/83-838493_fashion-brands-logo-png-transparent-png.png",
    type: "lee",
  },
];
