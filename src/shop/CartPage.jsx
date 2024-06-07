import React, { useEffect, useState } from "react";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // fetch cart item from local storage
    const storedCartItem = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItem);
  }, []);

  // calulate total price
  const calculatetotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // handle quantity increase
  const handleIncreaseQuantity = (item) => {
    item.quantity += 1;

    setCartItems([...cartItems]);

    // update local storage with new cart items

    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // handle quantity decrease
  const handleDecreaseQuantity = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // update local storage with new cart items

      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  // handle delete / remove Item function
  const handleRemoveItem = (item) => {
    const updatedCart = cartItems.filter(
      (cartItems) => cartItems.id !== item.id
    );

    // update new cart
    setCartItems(updatedCart);

    // update local storage
    updateLocalStorage(updatedCart);
  };

  //   function to update local storage
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // cart subtotal
  const cartSubTotal = cartItems.reduce((total, item) => {
    return total + calculatetotalPrice(item);
  }, 0);

  // order total
  const orderTotal = cartSubTotal;

  return <div>CartPage</div>;
};

export default CartPage;
