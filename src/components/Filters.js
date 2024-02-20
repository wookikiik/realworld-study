import { FilterContext, FilterDispatchContext } from "../contexts/FilterContext";
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from "../filterConstants";
import FilterItem from "./FilterItem";
import { useContext, useEffect, useState } from 'react';

export default function Filters() {    
    
    const [allSelected, setAllSelected] = useState(true);
    const [activeSelected, setActiveSelected] = useState(false);
    const [completedSelected, setCompletedSelected] = useState(false);
    const filter = useContext(FilterContext);
    const dispatch = useContext(FilterDispatchContext);

    useEffect(() => {
        if (filter === FILTER_ALL) {
            setAllSelected(true);
            setActiveSelected(false);
            setCompletedSelected(false);
        } else if (filter === FILTER_ACTIVE) {
            setAllSelected(false)
            setActiveSelected(true);
            setCompletedSelected(false);
        } else {
            setAllSelected(false);
            setActiveSelected(false);
            setCompletedSelected(true);
        }
    }, [filter])    

    function handlefilter(filter) {        
        dispatch(filter);
    }


    return (
        <ul className="filters">
            <FilterItem onFilter={handlefilter} filter={FILTER_ALL} selected={allSelected} />
            <FilterItem onFilter={handlefilter} filter={FILTER_ACTIVE} selected={activeSelected} />
            <FilterItem onFilter={handlefilter} filter={FILTER_COMPLETED} selected={completedSelected} />
        </ul>
    )
}