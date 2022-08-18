import * as React from 'react'
import {ICartItem , CartContextType} from '../types/cart'

const addCartItem = (cartItems, productsToAdd) => {
  //update the quantity if the item alraedy exists
  const existingCartItem = cartItems.find((cartItem) => {
    return (cartItem.id === productsToAdd.id)
  })

  if(existingCartItem) {
    return cartItems.map((cartItem) =>  cartItem.id === productsToAdd.id ? {...cartItem , quantity : cartItem.quantity + 1} : cartItem)}

  //normal return 
  return(
    [...cartItems , {...productsToAdd , quantity : 1}]
  )
}

export const CartContext = React.createContext<CartContextType | null>(null);

export const CartProvider : React.FC<React.ReactNode> = ({children}) => {

  const [cartItems, setCartItems] = React.useState<ICartItem[]>([])
  
  const saveCartItem = (cartItemToAdd: ICartItem) => {
    setCartItems(addCartItem(cartItems , cartItemToAdd))
  }
  return(
    <CartContext.Provider value={{ cartItems, saveCartItem }}>
      {children}
    </CartContext.Provider>
  )
}