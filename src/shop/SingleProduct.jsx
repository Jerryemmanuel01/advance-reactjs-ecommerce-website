import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const [product, setproduct] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch("/src/products.json")
      .then((res) => res.json())
      .then((data) => setproduct(data));
  }, []);

  const result = product.filter((p) => p.id === id);
  console.log(result);
  return <div>SingleProduct</div>;
};

export default SingleProduct;
