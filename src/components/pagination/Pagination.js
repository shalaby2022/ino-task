import React from "react";
import "./pagination.scss";

const PaginationElement = ({ totalData, dataPerPage, setCurrentPage }) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="paginationcontainer">
      {pages.map((page, ind) => (
        <button key={ind} onClick={() => setCurrentPage(page)}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default PaginationElement;
