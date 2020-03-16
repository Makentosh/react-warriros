import React from "react";
import './Pagination.scss';

const Pagination = ({currentPage, totalPage, prevPage, nextPage,...props}) => {
  return (
    <ul className="pagination">
      <li className="page-item" onClick={prevPage}>
        <button className="page-link" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      <li className={`page-item ${currentPage ? 'active' : ''}`}>
        <button className="page-link">{currentPage}</button>
      </li>
      <li className="page-item">
        <button className="page-link">...</button>
      </li>
      <li className="page-item">
        <button className="page-link">{totalPage}</button>
      </li>
      <li className="page-item" onClick={nextPage}>
        <button className="page-link" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  )
};

export default Pagination;
