import { useState } from "react";
import Filter from "../Filter/Filter";
import { exampleJSON } from "../Constants/Constants";
import Restaurant from "../Restaurant/Restaurant";
import { Container } from "reactstrap";
import ReactPaginate from 'react-paginate';
import "./SearchPage.css";
import { ChevronLeft, ChevronRight } from 'feather-icons';

function Items({ currentItems }) {
    return (
        <Container>
            {
                currentItems.map(item => {
                    return (
                        <Restaurant option={item} />
                    )
                })
            }
        </Container>
    );
};

function PaginatedItems({ itemsPerPage }) {

    const [itemOffset, setItemOffset] = useState(0);
  
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = exampleJSON.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(exampleJSON.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % exampleJSON.length;
      console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
      );
      setItemOffset(newOffset);
    };
  
    return (
      <div className="SearchContainer">
        <Items currentItems={currentItems} />
        <ReactPaginate
          breakLabel="..."
          nextLabel={"Next"}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={'Previous'}
          renderOnZeroPageCount={null}
          activeClassName={"paginationActive"}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
        />
      </div>
    );
}

function SearchPage () {
    /*
        Filter by:
        Buisness Details:
            business name => dba
            boro
            cusine => have a dropdown
        Inspection Results:
            Critical Flag -> dropdown
            Grade -> Dropdown, include Unknown as option
            Violation Code
            Score -> Range
        Address:
            builing, street zip
    */
    return (
        <div>
            <Filter />
            <PaginatedItems itemsPerPage={4} />
        </div>
    );
};

export default SearchPage;