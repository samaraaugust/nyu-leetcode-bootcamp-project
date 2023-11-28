import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import { exampleJSON } from "../Constants/Constants";
import Restaurant from "../Restaurant/Restaurant";
import { Container } from "reactstrap";
import ReactPaginate from 'react-paginate';
import "./SearchPage.css";
import { useFilter } from "../FilterContext/FilterContext";
import axios from 'axios';
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

    const { currentFilter } = useFilter();

    const isNullOrEmpty = (value) => {
        return value === null || value === undefined || (Array.isArray(value) && value.length === 0) || value === '';
    };

    /*
    camis := r.URL.Query().Get("camis")
	dba := r.URL.Query().Get("dba")
	boro := r.URL.Query().Get("boro")
	building := r.URL.Query().Get("building")
	street := r.URL.Query().Get("street")
	zipcode := r.URL.Query().Get("zipcode")
	cuisine := r.URL.Query().Get("cuisine")
	criticalFlag := r.URL.Query().Get("criticalFlag")
	score := r.URL.Query().Get("score")
	grade := r.URL.Query().Get("grade")
    */
    useEffect(() => {
        console.log("Changed currentFi: ", currentFilter);
        const getNewData = async (filter) => {
            let apiString = "";
            let apiParams = [];
            let response;
            for (const key in filter) {
                if (isNullOrEmpty(filter[key])) {
                    continue;
                } else {
                    if (Array.isArray(filter[key])) {
                        const arrValues = filter[key].map(item => item.type);
                        const commaStr = arrValues.join(',');
                        apiParams.push(`${key}=`.concat(commaStr));
                    } else {
                        apiParams.push(`${key}=`.concat(filter[key]));
                    }
                }
            }
            apiString = apiParams.join('&');
            const baseUrl = 'http://localhost:8000/restaurants';
            if (!apiParams.length) {
                response = await axios.get(baseUrl);
                console.log("res: ", response);
            }
        };
        getNewData(currentFilter);
    }, [currentFilter]);

  
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