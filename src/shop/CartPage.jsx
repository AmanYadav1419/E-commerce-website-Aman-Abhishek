import React, { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";
import deImgUrl from "../assets/images/shop/del.png";

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

  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />

      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>

                {/* table body */}
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop">
                            <img src={item.img} alt="" />
                          </Link>
                        </div>

                        <div className="p-content">
                          <Link to="/shop">{item.name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">$ {item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecreaseQuantity(item)}
                          >
                            -
                          </div>
                          <input
                            type="text"
                            className="cart-plus-minus-box"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncreaseQuantity(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      
                      {/* total price */}
                      <td className="cat-toprice">
                        ${calculatetotalPrice(item)}
                      </td>

                      {/* edit or delete item */}
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={deImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/*-------------- cart top ends --------------*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
