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

            {/* cart bottom */}

            <div className="cart-bottom">
              {/* checkout box start */}
              <div className="cart-checkout-box">
                <form className="coupon">
                  <input
                    type="text"
                    className="cart-page-input-text"
                    name="coupon"
                    id="coupon"
                    placeholder="Coupon code..."
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>

                <form className="cart-checkout">
                  <input type="submit" value="Update Cart" />
                  <div>CheckOutPage</div>
                </form>
              </div>

              {/* checkout box end  */}

              {/* shoping box */}

              {/* left section / left side */}

              <div className="shiping-box">
                <div className="row">
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shiping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="uk">United Kingdom (Uk)</option>
                          <option value="usa">
                            United States of America (USA)
                          </option>
                          <option value="ind">India (IND)</option>
                          <option value="ban">BanglaDesh (Ban)</option>
                          <option value="rus">Russia (RUS)</option>
                          <option value="fr">France (FR)</option>
                          <option value="nep">Nepal (NEP)</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>

                      <div className="outline-select shiping-select">
                        <select>
                          <option value="uk">London (Uk)</option>
                          <option value="usa">New York (USA)</option>
                          <option value="ind">New Delhi (IND)</option>
                          <option value="ban">Dhaka (Ban)</option>
                          <option value="rus">Moscow (RUS)</option>
                          <option value="fr">Paris (FR)</option>
                          <option value="nep">Kathmandu (NEP)</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="postalCode"
                        id="postalCode"
                        placeholder="postCode/ZIP *"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Update Adress</button>
                    </div>
                  </div>

                  {/* Right section / Right side */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ {cartSubTotal} </p>
                        </li>

                        <li>
                          <span className="pull-left">
                            Shiping and Handling
                          </span>
                          <p className="pull-right">Free Shiping </p>
                        </li>

                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            $ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
