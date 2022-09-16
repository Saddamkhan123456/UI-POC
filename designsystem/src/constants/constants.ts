import { CardPropsSets } from "../molecules/categoryCard";

// base json server
export const baseURL = 'http://localhost:8000';


export const categoryData: CardPropsSets[] = [
  {
    id: 1,
    image:
      "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/c804f931-0c54-4be7-b286-f0e0f9fca67b/nike-just-do-it.png",
    type: "women",
    link: '/product/category',
  },
  {
    id: 2,
    image:
      "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/2af56a34-7459-48de-82cf-60a848ff063d/nike-just-do-it.png",
    type: "men",
    link: '/product/category',
  },
  {
    id: 3,
    image:
      "https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_441,c_limit/35bd3be8-6283-4ff8-b057-12b9d54d87fe/nike-just-do-it.png",
    type: "kids",
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
  
];


export const navigation = [
  { name: "Men", href: "/product/category/men"},
  { name: "Women", href: "/product/category/women"},
  { name: "Kids", href: "/product/category/kids"},
];