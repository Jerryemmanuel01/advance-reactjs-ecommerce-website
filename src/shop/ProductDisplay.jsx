import React, { useState } from "react";
import { Link } from "react-router-dom";

const desc =
  "Energies an deliver  stactica matrcs after avsionary Apropria transition enterprice an source appication energing psd template.";

const ProductDisplay = ({ item }) => {
  const { name, id, price, seller, ratingsCount, quantity, img } = item;
  const [preQuantity, setPreQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleDecrease = () =>{
    if(preQuantity > 1){
        setPreQuantity(preQuantity - 1)
    }
  }

  const handleIncrease = () =>{
    setPreQuantity(preQuantity + 1);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = {
      id: id,
      img: img,
      name: name,
      price: price,
      quantity:preQuantity,
      size:size,
      color: color,
      coupon: coupon
    }

    console.log(product);
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
          <span> {ratingsCount} review </span>
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>

      {/* cart components */}
      <div className="">
        <form onSubmit={handleSubmit}>
          {/* size */}
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
          {/* color */}
          <div className="select-product color">
            <select value={color} onChange={handleColorChange}>
              <option>Select Color</option>
              <option>Pink</option>
              <option>Ash</option>
              <option>Red</option>
              <option>White</option>
              <option>Blue</option>
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
              className="cart-plus-minus-box"
              type="text"
              name="qtybutton"
              id="qtybutton"
              value={preQuantity}
              onChange={(e) => setPreQuantity(parseInt(e.target.value, 10))}
            />
            <div className="inc qtybutton" onClick={handleIncrease}>
              +
            </div>
          </div>

          {/* coupon cart */}
          <div className="discount-code mb-2">
            <input type="text" placeholder="Enter Discount Code" onChange={(e) => setCoupon(e.target.value)} />
          </div>

          {/* btn section */}
          <button type="submit" className="lab-btn">
            <span>Add to Cart</span>
          </button>
          <Link to='/cart-page' className="lab-btn bg-primary">
            <span>Checkout</span>
          </Link>

        </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
