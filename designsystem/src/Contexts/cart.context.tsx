import * as React from 'react'
import { ICartItem, CartContextType } from '../types/cart'

const addCartItemQuantity = (cartItems, productsToAdd) => {
  //update the quantity if the item alraedy exists
  const existingCartItem = cartItems.find((cartItem) => {
    return (cartItem.id === productsToAdd.id)
  })

  if (existingCartItem) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems.map((cartItem) => cartItem.id === productsToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)))
  } else {
    localStorage.setItem('cartItems', JSON.stringify([...cartItems, { ...productsToAdd, quantity: 1 }]))
  }
  return JSON.parse(localStorage.getItem('cartItems'))
}

const removeCartItemQuantity = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return (cartItem.id === productToRemove.id)
  })

  if (existingCartItem.quantity === 1) {
    const filterValue = cartItems.filter((cartItem) => cartItem.id !== productToRemove.id)
    localStorage.setItem('cartItems' , JSON.stringify(filterValue))
    
  }else{
    const mapValue = cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
    localStorage.setItem('cartItems', JSON.stringify(mapValue))
  }

  return JSON.parse(localStorage.getItem('cartItems'))
}

const flushCartItemQuantity = (cartItems, cartItemToFlush) => {
  console.log('HHIe')
  return (
    cartItems.filter((cartItem) => cartItem.id !== cartItemToFlush.id)
  )
}

export const CartContext = React.createContext<CartContextType | null>(null);

export const CartProvider: React.FC<React.ReactNode> = ({ children }) => {
  const [cartItems, setCartItems] = React.useState<ICartItem[]>(JSON.parse(localStorage.getItem('cartItems')) || [])
  const [cartCount, setCartCount] = React.useState<number>(0)
  const [cartTotal, setCartTotal] = React.useState<number>(0)
  const [orderTotal, setOrderTotal] = React.useState<number>(0)
  const [taxAmount, setTaxAmount] = React.useState<number>(0)

  React.useEffect(() => {
    const newCartCount: number = cartItems?.length > 0 ? cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0) : 0
    setCartCount(newCartCount)
  }, [cartItems])
  React.useEffect(() => {
    const newCartTotal: number = cartItems?.length > 0 ? cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0) : 0
    setCartTotal(newCartTotal)
  }, [cartItems])
  React.useEffect(() => {
    if (cartItems === null) {
      setOrderTotal(0)
    }
    else {
      const newOrderTotal: number = cartTotal + taxAmount;
      setOrderTotal(newOrderTotal)
    }
  }, [cartTotal])
  React.useEffect(() => {
    const newTaxAmount: number = cartTotal * .18;
    setTaxAmount(Math.round(newTaxAmount))
  }, [cartTotal])


  const saveCartItem = (cartItemToAdd: ICartItem) => {
    setCartItems(addCartItemQuantity(cartItems, cartItemToAdd))
  }
  const deleteCartItem = (cartItemToRemove: ICartItem) => {
    setCartItems(removeCartItemQuantity(cartItems, cartItemToRemove))
  }
  const flushCartItem = (cartItemToFlush: ICartItem) => {
    setCartItems(flushCartItemQuantity(cartItems, cartItemToFlush))
  }
  return (
    <CartContext.Provider value={{ cartItems, saveCartItem, cartCount, deleteCartItem, flushCartItem, cartTotal, orderTotal, taxAmount }}>
      {children}
    </CartContext.Provider>
  )
}