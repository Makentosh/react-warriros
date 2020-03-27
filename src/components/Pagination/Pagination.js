import React from "react";
import './Pagination.scss';

const Pagination = ({page, total_pages, prevPage, nextPage,...props}) => {
  return (
    <ul className="pagination">
      <li className="page-item">
        <button className="page-link"
                aria-label="Previous"
                onClick={prevPage}
                disabled={page === 1}
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      <li className={`page-item ${page ? 'active' : ''}`}>
        <button className="page-link">{page}</button>
      </li>
      <li className="page-item">
        <button className="page-link">...</button>
      </li>
      <li className="page-item">
        <button className="page-link">{total_pages}</button>
      </li>
      <li className="page-item">
        <button className="page-link"
                aria-label="Next"
                onClick={nextPage}
                disabled={page === total_pages}
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  )
};

export default Pagination;
