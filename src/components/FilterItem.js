import { forwardRef } from "react"
const FilterItem = forwardRef((props, ref) => {    
    const {onFilter, filter, selected} = props;    

    return (
        <li ref={ref} onClick={() => onFilter(filter)}>
            <a className={selected ? "selected" : "" } href="#/" >{filter}</a>
        </li>   
    );
});

export default FilterItem;