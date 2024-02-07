import React, { useState } from "react";
import PageHeader from "../components/PageHeader";
import Data from "../products.json";
import ProductCart from "./ProductCards";
import  Pagination from "./Pagination";

const showResults = "showing 01 - 12 of 129 Results";

const Shop = () => {
  const [gridList, setgridList] = useState(true);
  const [products, setproducts] = useState(Data);

  //pagination

  const[currentPage, setCurrentPage] = useState(1)
  const productPerPage = 12

  const indexOfLastProduct = currentPage * productPerPage
  const indexOfFirstProduct = indexOfLastProduct - productPerPage
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
 
 //function to change the current page
 const paginate = (pageNumber) =>{
  setCurrentPage(pageNumber)
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
            <div className="col-lg-4 col-12">right side</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
