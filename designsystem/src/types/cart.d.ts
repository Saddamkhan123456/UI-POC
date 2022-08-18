export interface ICartItem{
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string

}

export type CartContextType = {
  cartItems : ICartItem[];
  saveCartItem: (cartItem : ICartItem) => void;
  // deleteCartItem: (id : number) => void;
  updateCartItem: (id : number) => void;

}