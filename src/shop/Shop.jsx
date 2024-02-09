import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCart from "./ProductCards";
import Pagination from "./Pagination";
import Search from "./Search";
import ShopCategory from "./ShopCategory";
import PopularPost from "./PopularPost";
import Tags from "./Tags";

const showResults = "showing 01 - 12 of 129 Results";

const Shop = () => {
  const [gridList, setgridList] = useState(true);
  const [products, setproducts] = useState(Data);

  //pagination

  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 12;

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //function to change the current page
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  //filter product based on category
  const [selectCategory, setselectCategory] = useState("All")
  const menuItem = [...new Set(Data.map((val) => val.category))]

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    })

    setselectCategory(curcat)
    setproducts(newItem);
  }


  return (
    <div>
      <PageHeader title="Our Shop Page" curPage="Shop" />
      {/* shop page */}
      <div className="shop-page padding-tb">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-12">
              <article>
                {/* layout and title here */}
                <div className="shop-title d-flex flex-wrap justify-content-between">
                  <p>{showResults}</p>
                  <div
                    className={`product-view-mode ${
                      gridList ? "gridActive" : "listActive"
                    }`}
                  >
                    <a className="grid" onClick={() => setgridList(!gridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    <a className="list" onClick={() => setgridList(!gridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>

                {/* products  */}
                <div className="">
                  <ProductCart gridList={gridList} products={currentProducts} />
                </div>

                <Pagination
                  productPerPage={productPerPage}
                  totalProducts={products.length}
                  paginate={paginate}
                  activePage={currentPage}
                />
              </article>
            </div>
            <div className="col-lg-4 col-12">
              <aside>
                <Search products={products} gridList={gridList}/>
                <ShopCategory 
                filterItem={filterItem}
                setItem={setproducts}
                menuItem={menuItem}
                setproducts={setproducts}
                selectCategory={selectCategory}
                />
                <PopularPost />
                <Tags />
              </aside>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
