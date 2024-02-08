import React from "react";

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
        {
            menuItem.map((val,id) => {
                return (
                    <button key={id} className={`m-2 ${selectCategory === 'All' ? 'bg-warning' : '' }`} onclick={() => filterItem(val)}>{val}</button>
                )
            })
        }
      </div>
    </>
  );
};

export default ShopCategory;
