import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import ReactPaginate from "react-paginate";


const CustomPagination = ({ total, start, setStart }) => {
    const [currentItems, setCurrentItems] = useState(null);
    const [showPerPage, setShowPerPage] = useState(10)
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = parseInt(itemOffset) + parseInt(showPerPage);
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        // setCurrentItems(total.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(total / showPerPage));
        setStart({
            start: itemOffset,
            end: endOffset
        })
    }, [itemOffset, showPerPage]);
    const [counter, setCounter] = useState(1);
    const [onChangeButton, setOnChangeButton] = useState(
        Math.ceil(total / showPerPage)
    );
    useEffect(() => {
        let value = showPerPage * counter;
        // onPageChange(value - showPerPage, value);
    }, [counter]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * showPerPage) % total;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };
    return (
        <div className="w-100  pt-3 customPagination" >
            {/*<div className="w-25">
                <TooltipComp
                    component={<Form.Select className="rowPerPage" value={showPerPage} onChange={(e) => {
                        setShowPerPage(e.target.value)
                    }}>
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </Form.Select>}
                    placement="top"
                    tooltip="Row's per page"
                />
                </div>*/}
            <div>
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
        </div>)
};

export default CustomPagination