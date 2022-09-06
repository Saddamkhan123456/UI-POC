
import {ICartItem} from "../types/cart.d.ts"

export type WishlistContextType = {
    wishlistItems : ICartItem[];
    saveWishlistItem: (wishlistItem : ICartItem) => void;
    flushWishlistItem : (wishlistItem : ICartItem) => void;
}