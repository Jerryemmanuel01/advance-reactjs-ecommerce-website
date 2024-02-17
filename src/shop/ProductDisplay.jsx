import React, { useState } from 'react'

const ProductDisplay = ({item}) => {
    const {name, id, price, seller, ratingsCount, quantity} = item
    const [preQuantity, setPreQuantity] = useState(quantity);
    const [coupon, setCoupon] = useState('')
    const [size, setSize] = useState('Select Size')
    const [color, setColor] = useState('Select Color')
  return (
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
    </div>
  );
}

export default ProductDisplay