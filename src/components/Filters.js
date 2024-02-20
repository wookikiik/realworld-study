import FilterItem from "./FilterItem";
import { useEffect, useRef, useState } from 'react';

export default function Filters({ onFilter }) {
    const FILTER_ALL = "All"
    const FILTER_ACTIVE = "Active"
    const FILTER_COMPLETED = "Completed"
    
    const [allSelected, setAllSelected] = useState(true);
    const [activeSelected, setActiveSelected] = useState(false);
    const [completedSelected, setCompletedSelected] = useState(false);
    const [filter, setFilter] = useState('All');

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
        onFilter(filter);
        setFilter(filter);
    }


    return (
        <ul className="filters">
            <FilterItem onFilter={handlefilter} filter={FILTER_ALL} selected={allSelected} />
            <FilterItem onFilter={handlefilter} filter={FILTER_ACTIVE} selected={activeSelected} />
            <FilterItem onFilter={handlefilter} filter={FILTER_COMPLETED} selected={completedSelected} />
        </ul>
    )
}