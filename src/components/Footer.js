import TodoCount from "./TodoCount"
import Filters from "./Filters"
import ClearButton from "./ClearButton"

export default function Footer() {
    return (
        <footer className="footer">
            <TodoCount />
            <Filters />
            <ClearButton />
        </footer>
    )
}