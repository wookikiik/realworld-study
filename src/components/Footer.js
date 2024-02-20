import TodoCount from "./TodoCount"
import Filters from "./Filters"
import ClearButton from "./ClearButton"
import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContext";

export default function Footer() {
    const todos = useContext(TodosContext);    
    const filterCount = todos.filter(item => !item.completed).length;
    
    return (
        <footer className="footer">
            <TodoCount count={filterCount}/>
            <Filters />
            <ClearButton />
        </footer>
    )
}