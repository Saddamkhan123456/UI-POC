export const flushCartItemQuantity = (cartItems, cartItemToFlush) => {
  const filterValue = cartItems.filter(
    (cartItem) => cartItem.id !== cartItemToFlush.id
  );
  localStorage.setItem("cartItems", JSON.stringify(filterValue));
  return JSON.parse(localStorage.getItem("cartItems"));
};

export const addCartItemQuantity = (cartItems, productsToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productsToAdd.id;
  });

  if (existingCartItem) {
    localStorage.setItem(
      "cartItems",
      JSON.stringify(
        cartItems.map((cartItem) =>
          cartItem.id === productsToAdd.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    );
  } else {
    localStorage.setItem(
      "cartItems",
      JSON.stringify([...cartItems, { ...productsToAdd, quantity: 1 }])
    );
  }
  return JSON.parse(localStorage.getItem("cartItems"));
};

export const removeCartItemQuantity = (cartItems, productToRemove) => {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToRemove.id;
  });
  if (existingCartItem.quantity === 1) {
    const filterValue = cartItems.filter(
      (cartItem) => cartItem.id !== productToRemove.id
    );
    localStorage.setItem("cartItems", JSON.stringify(filterValue));
  } else {
    const mapValue = cartItems.map((cartItem) =>
      cartItem.id === productToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
    localStorage.setItem("cartItems", JSON.stringify(mapValue));
  }

  return JSON.parse(localStorage.getItem("cartItems"));
};