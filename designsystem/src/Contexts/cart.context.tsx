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

const removeCartItem = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return (cartItem.id === productToRemove.id)
  })

  if(existingCartItem === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
  }

  if(existingCartItem) {
    return cartItems.map((cartItem) =>  cartItem.id === productToRemove.id ? {...cartItem , quantity : cartItem.quantity - 1} : cartItem)}
}

export const CartContext = React.createContext<CartContextType | null>(null);

export const CartProvider : React.FC<React.ReactNode> = ({children}) => {

  const [cartItems, setCartItems] = React.useState<ICartItem[]>([])
  const [cartCount , setCartCount] = React.useState<number>(0)

  React.useEffect(() => {
    const newCartCount : number = cartItems.reduce((total , cartItem) => total + cartItem.quantity , 0)
    setCartCount(newCartCount)
  }, [cartItems])
  
  const saveCartItem = (cartItemToAdd: ICartItem) => {
    setCartItems(addCartItem(cartItems , cartItemToAdd))
  }
  const deleteCartItem = (cartItemToRemove: ICartItem) => {
    setCartItems(removeCartItem(cartItems , cartItemToRemove))
  }
  return(
    <CartContext.Provider value={{ cartItems, saveCartItem , cartCount , deleteCartItem}}>
      {children}
    </CartContext.Provider>
  )
}