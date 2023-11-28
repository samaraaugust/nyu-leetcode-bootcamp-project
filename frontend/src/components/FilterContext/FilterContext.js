import React, { useState, useContext } from "react";

const DataContext = React.createContext()

export const initialState = {
    grade: [],//
    criticalFlag: [],//
    score: '',//
    building: '',//
    street: '',//
    zipcode: '',//
    boro: [],//
    dba: '',//
    cuisine: []//
};

export const DataProvider = ({ children }) => {

    const [ currentFilter, setCurrentFilter ] = useState(initialState);
    return (
        <DataContext.Provider 
        value={{
            currentFilter,
         updateFilter: setCurrentFilter,}}>
            {children}
        </DataContext.Provider>
    );
};

export const useFilter = () => {
    const { currentFilter, updateFilter } = useContext(DataContext);
    console.log("currentFilet: ", currentFilter);
    return { currentFilter, updateFilter };
}