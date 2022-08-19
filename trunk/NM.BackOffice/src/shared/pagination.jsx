import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const CustomPagination = ({ total, setStart }) => {
  const [showPerPage, setShowPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = parseInt(itemOffset) + parseInt(showPerPage);
    setPageCount(Math.ceil(total / showPerPage));
    setStart({
      start: itemOffset,
      end: endOffset,
    });
  }, [itemOffset, showPerPage]);

  //   const [counter, setCounter] = useState(1);
  //   const [onChangeButton, setOnChangeButton] = useState(
  //     Math.ceil(total / showPerPage)
  //   );
  //   useEffect(() => {
  //     let value = showPerPage * counter;
  //     // onPageChange(value - showPerPage, value);
  //   }, [counter]);
/**
 * @method handlePageClick
 * @description 
 * @param {*} event 
 */
  const handlePageClick = (event) => {
    const newOffset = (event.selected * showPerPage) % total;
    setItemOffset(newOffset);
  };

  return (
    <div className="w-100 customPagination">
      <ReactPaginate
        className="pagination "
        breakLabel="..."
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={0}
        pageCount={Math.ceil(total / showPerPage)}
        previousLabel="<<"
        renderOnZeroPageCount={null}
        activeClassName="active"
        previousClassName="previousList"
        nextClassName="nextList"
      />
    </div>
  );
};

export default CustomPagination;
