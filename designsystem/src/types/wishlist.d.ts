
import {ICartItem} from "../types/cart.d.ts"

export type WishlistContextType = {
    wishlistItems : ICartItem[];
    wishlistCount: number;
    saveWishlistItem: (wishlistItem : ICartItem) => void;
    flushWishlistItem : (wishlistItem : ICartItem) => void;
    saveWishlistItem: (wishlistItem : ICartItem) => void;

}