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
    // const newCartItem: ICartItem = {
    //   id: Math.random(), // not really unique - but fine for this example
    //   title: cartItemToAdd.title,
    //   description: cartItemToAdd.description,
    //   thumbnail: cartItemToAdd.thumbnail,
    //   price: cartItemToAdd.price
    // }
    // setCartItems([...cartItems, newCartItem])
  }

  const updateCartItem = (id: number, ) => {
    cartItems.filter((cartItem: ICartItem) => {
      if (cartItem.id === id) {
        cartItem.price = 999
        setCartItems([...cartItems])
      }
    })
  }
  
  return(
    <CartContext.Provider value={{ cartItems, saveCartItem, updateCartItem }}>
      {children}
    </CartContext.Provider>
  )
}