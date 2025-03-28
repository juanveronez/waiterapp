import { useState } from "react";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";

export function useCart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function onIncrementCart(product: Product) {
    setCartItems((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      if (itemIndex === -1) {
        return [...prevCart, { quantity: 1, product }];
      }

      const newCart = [...prevCart];
      const prevItem = prevCart[itemIndex];
      newCart[itemIndex] = { ...prevItem, quantity: prevItem.quantity + 1 };

      return newCart;
    });
  }

  function onDecrementCart(product: Product) {
    setCartItems((prevCart) => {
      const itemIndex = prevCart.findIndex(
        (cartItem) => cartItem.product._id === product._id
      );

      if (itemIndex === -1) {
        return prevCart;
      }

      const newCart = [...prevCart];
      const prevItem = prevCart[itemIndex];

      if (prevItem.quantity === 1) {
        newCart.splice(itemIndex, 1);
      } else {
        newCart[itemIndex] = { ...prevItem, quantity: prevItem.quantity - 1 };
      }

      return newCart;
    });
  }

  function onClearCart() {
    setCartItems([]);
  }

  return {
    cartItems,
    onIncrementCart,
    onDecrementCart,
    onClearCart,
  };
}
