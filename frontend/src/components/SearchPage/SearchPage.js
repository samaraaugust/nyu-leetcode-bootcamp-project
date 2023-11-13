import Filter from "../Filter/Filter";

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
            Search Page
            <Filter />
        </div>
    );
};

export default SearchPage;