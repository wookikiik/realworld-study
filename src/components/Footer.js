import TodoCount from "./TodoCount"
import Filters from "./Filters"
import ClearButton from "./ClearButton"

export default function Footer({filterCount}) {
    
    return (
        <footer className="footer">
            <TodoCount count={filterCount}/>
            <Filters />
            <ClearButton />
        </footer>
    )
}