export interface ICartItem{
  quantity: number;
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  brand: string;
  description: string;
  categoryId: string;
}

export type CartContextType = {
  cartItems : ICartItem[];
  saveCartItem: (cartItem : ICartItem) => void;
  cartCount: number;
  cartTotal: number;
  orderTotal:number;
  taxAmount: number;
  deleteCartItem : (cartItem : ICartItem) => void;
  flushCartItem : (cartItem : ICartItem) => void;
}