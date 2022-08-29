
import {ICartItem} from "../types/cart.d.ts"

export type WishlistContextType = {
    wishlistItems : ICartItem[];
    saveWishlistItem: (wishlistItem : ICartItem) => void;
    // cartCount: number;
    deleteWishlistItem : (wishlistItem : ICartItem) => void;
}