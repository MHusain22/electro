import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/filterReducer.js";


const FilterContext = createContext();

const initialState = {
    filter_products: [],
    products: [],
    sorting_value: "lowest",
    filters: {
        text: "",
    }
};

export const FilterContextProvider = ({children}) => {

    const [state,dispatch] = useReducer(reducer,initialState);

    //sorting function
    const sorting = (event) => {
        //passing selected option to reducer
        let userValue = event.target.value;
        dispatch({ type: "GET_SORT_VALUE", payload: userValue });
    };
    //to sort the product
    useEffect(() => {
        dispatch({ type: "SORTING_PRODUCTS" });
    },[state.sorting_value]);


    //search
    const updateFilterValue = (event) => {
        let ename = event.target.name;
        let evalue = event.target.value;

        dispatch({ type: "UPDATE_FILTER_VALUE",payload:{ename,evalue} })
    }

    return( <FilterContext.Provider value={{ ...state,sorting,updateFilterValue }}>
        {children}
    </FilterContext.Provider>
    );
}

export const useFilterContext = () => {
    return useContext(FilterContext);
};
