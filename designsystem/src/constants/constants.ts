import { CardPropsSets } from "../molecules/categoryCard";

// base json server
export const baseURL = 'http://localhost:8000';


export const categoryData: CardPropsSets[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1589212987511-4a924cb9d8ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    type: "women",
    link: '/product/category',
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1559582798-678dfc71ccd8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    type: "men",
    link: '/product/category',
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80",
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
