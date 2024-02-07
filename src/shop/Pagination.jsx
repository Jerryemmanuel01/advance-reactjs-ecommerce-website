import React from 'react'

const Pagination = ({
  productPerPage,
  totalProducts,
  paginate,
  activePage,
}) => {
    const pageNumbers= []
    for(let i =1; i<= Math.ceil(totalProducts/productPerPage); i++ ){
        pageNumbers.push(i)
    }
  return <div>
    <ul className='default-pagination lab-ul'>
        <li>
            <a href="#" onClick={() => {
                if(activePage < pageNumbers.length){
                    paginate(activePage - 1)
                }
            }}>
                <i className="icofont-rounded-left"></i>
            </a>
        </li>
        {
            pageNumbers.map((number) => (
                <li key={number} className={`page-item ${number === activePage ? 'bg-warning' : ''}`}>
                    <button className='bg-transparent' onClick={() => paginate(number)}>{number}</button>
                </li>
            ))
        }
        <li>
            <a href="#" onClick={() => {
                if(activePage < pageNumbers.length){
                    paginate(activePage + 1)
                }
            }}>
                <i className="icofont-rounded-right"></i>
            </a>
        </li>
    </ul>
  </div>;
};

export default Pagination