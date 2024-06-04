import React, { useState } from "react";
import { Link } from "react-router-dom";

// for now hardcoded description will get used later on need to add desc on each product on ProductDescription file
const desc =
  "Energistic an deliver aataica metrics after avsionary Apriporia transition enterpris an sources applications emering pad template";

const ProductDisplay = ({ item }) => {
  // console.log(item)

  // destructing the item object
  const { name, id, price, seller, ratingsCount, quantity } = item;

  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  // for handling size selection and applying selection
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  // for handling color selection and applying selection
  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  // handle descrease quantity
  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  // handle increase quantity
  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <span>{ratingsCount} reviews</span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart component */}
      <div>
        <form>
          {/* for size */}
          <div className="select-product size">
            <select value={size} onChange={handleSizeChange}>
              <option>Select Size</option>
              <option>SM</option>
              <option>MD</option>
              <option>LG</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* for color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>Blue</option>
              <option>White</option>
              <option>Black</option>
            </select>
            <i className="icofont-rounded-down"></i>
          </div>

          {/* cart plus minus */}
          <div className="cart-plus-minus">
            <div className="dec qtybutton" onClick={handleDecrease}>
              -
            </div>
            <input
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))} //10 is the maximum number will be allowed to select
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={prequantity}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* coupon feild */}
          <div className="discount-code mb-2">
            <input
              type="text"
              placeholder="Enter Discount code"
              onChange={(event) => setCoupon(event.target.value)}
            />
          </div>

          {/* btn sections */}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>

          <Link to="/cart-page" className="lab-btn bg-primary">
            <span>Check Out</span>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
