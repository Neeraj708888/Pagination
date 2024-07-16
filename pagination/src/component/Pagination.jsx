import React from "react";
import "./Post.css";

const Pagination = ({
  postsPerPage,
  length,
  handlePagination,
  currentPage,
}) => {
  const totalPages = Math.ceil(length / postsPerPage);
  // console.log(postsPerPage);  // 10
  // console.log(length);  // 100
  console.log(currentPage);  // 1,2,3,4,5,6,7,8,9,10

  //   let paginationNumber = [];
  // length = 100, postsPerPage = 10, result = 100/10 => 10
  //   for (let i = 1; i <= Math.ceil(length / postsPerPage); i++) {
  // push element 1 to 10 in empty array
  //       paginationNumber.push(i);
  //   }
  return (
    <div className="pagination">
      {/* use map to create numbers of buttons */}
      {/* {paginationNumber.map((pageNumber) => (
        <button
          key={pageNumber}
          onClick={() => handlePagination(pageNumber)}
          className={currentPage === pageNumber ? "active" : ""}
        >
          {pageNumber}
        </button>
      ))} */}

      {
        // 11 <= 10
        currentPage < totalPages ? (
          <button onClick={() => handlePagination(++currentPage)}>
            load more..
          </button>
        ): (<button onClick={() => handlePagination(--currentPage)}>back..</button>)
      }
    </div>
  );
};
export default Pagination;
