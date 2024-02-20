import TodoCount from "./TodoCount"
import Filters from "./Filters"
import ClearButton from "./ClearButton"

export default function Footer({filterCount, onFilter, onClear}) {
    
    return (
        <footer className="footer">
            <TodoCount count={filterCount}/>
            <Filters onFilter={onFilter}/>
            <ClearButton onClear={onClear}/>
        </footer>
    )
}