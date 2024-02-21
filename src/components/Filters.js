import { FilterContext, FilterDispatchContext } from "../contexts/FilterContext";
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from "../filterConstants";
import FilterItem from "./FilterItem";
import { useContext  } from 'react';

export default function Filters() {        
    const filter = useContext(FilterContext);
    const dispatch = useContext(FilterDispatchContext);
    
    function handlefilter(filter) {        
        dispatch(filter);
    }


    return (
        <ul className="filters">
            <FilterItem onFilter={handlefilter} filter={FILTER_ALL} selected={filter === FILTER_ALL} />
            <FilterItem onFilter={handlefilter} filter={FILTER_ACTIVE} selected={filter === FILTER_ACTIVE} />
            <FilterItem onFilter={handlefilter} filter={FILTER_COMPLETED} selected={filter === FILTER_COMPLETED} />
        </ul>
    )
}