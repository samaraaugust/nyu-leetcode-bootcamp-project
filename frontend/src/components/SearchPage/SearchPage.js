import { useEffect, useState } from "react";
import Filter from "../Filter/Filter";
import { exampleJSON } from "../Constants/Constants";
import Restaurant from "../Restaurant/Restaurant";
import { Container, Spinner } from "reactstrap";
import ReactPaginate from 'react-paginate';
import "./SearchPage.css";
import { useFilter } from "../FilterContext/FilterContext";
import axios from 'axios';
function Items({ currentItems }) {
    return (
        <Container>
            {
                currentItems.length === 0 ?  <h5 style={{textAlign: 'center'}}>No matching items. Please try adjusting your filters or search criteria.</h5>:
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
    const [items, setItems] = useState([]);
    const { currentFilter } = useFilter();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const isNullOrEmpty = (value) => {
        return value === null || value === undefined || (Array.isArray(value) && value.length === 0) || value === '';
    };

    useEffect(() => {
        console.log("Changed currentFi: ", currentFilter);
        const getNewData = async (filter) => {
            setIsLoading(true);
            try {
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
                    if (response.status === 200) {
                        if (response?.data?.Restaurants !== null) {
                            setItems([...response?.data?.Restaurants]);
                        } else {
                            setItems([]);
                        }
                        
                    }
                    console.log("res: ", response);
                } else {
                    let newString = baseUrl.concat("?");
                    console.log("apiString: ", newString.concat(apiString));
                    response = await axios.get(newString.concat(apiString));
                    if (response.status === 200) {
                        if (response?.data?.Restaurants !== null) {
                            setItems([...response?.data?.Restaurants]);
                        } else {
                            setItems([]);
                        }
                    }
                    console.log("res: ", response);
                }
                
            } catch (err) {
                setItems([]);
                console.log("error: ", err);
            }
            setItemOffset(0);
            setIsLoading(false);
        };
    
        getNewData(currentFilter);
    }, [currentFilter]);

  
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
  
    return (
      <div className="SearchContainer">
        {isLoading ? 
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}><Spinner>Loading</Spinner></div>
        : <><Items currentItems={currentItems} />
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
        /></>}
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