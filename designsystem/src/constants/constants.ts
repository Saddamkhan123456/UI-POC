import { CardPropsSets } from "../molecules/categoryCard";

// base json server
export const baseURL = 'http://localhost:8000';


export const categoryData: CardPropsSets[] = [
  {
    Image:
      "https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    Type: "Women",
    Link: '/product/category',
  },
  {
    Image:
      "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    Type: "Men",
    Link: '/product/category',
  },
  {
    Image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80",
    Type: "kids",
    Link: '/product/category',
  },
];

export const brandCategoryData: CardPropsSets[] = [
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
    Type: "Wrangler",
  },
];