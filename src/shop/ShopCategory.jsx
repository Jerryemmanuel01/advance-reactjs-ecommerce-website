import React from "react";
import Data from '../products.json'

const ShopCategory = ({
  filterItem,
  setItem,
  menuItem,
  setproducts,
  selectCategory,
}) => {
  return (
    <>
      <div className="widget-header">
        <h5 className="ms-2">All Categories</h5>
      </div>
      <div className="">
        <button
          onClick={() => setItem(Data)}
          className={`m-2 ${selectCategory === "All" ? "bg-warning" : ""}`}
        >
          All
        </button>
        {menuItem.map((val, id) => {
          return (
            <button
              key={id}
              className={`m-2 ${selectCategory === val ? "bg-warning" : ""}`}
              onClick={() => filterItem(val)}
            >
              {val}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default ShopCategory;
