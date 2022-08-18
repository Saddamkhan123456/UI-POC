export interface ICartItem{
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

}