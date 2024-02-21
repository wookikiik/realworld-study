import TodoItem from "./TodoItem";
import { useContext } from "react"
import { TodosContext } from "../contexts/TodosContext";
import { FilterContext } from "../contexts/FilterContext";
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from '../filterConstants';

export default function TodoList() {          
    const todos = useContext(TodosContext);  
    const filter = useContext(FilterContext);
    let filteredTodos = todos;
    
    if (filter === FILTER_ALL) {
        filteredTodos = todos;
    } else if (filter === FILTER_ACTIVE) {
        filteredTodos = todos.filter(todo => !todo.completed)
    } else if (filter === FILTER_COMPLETED) {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    return (
        <ul className="todo-list">
            {filteredTodos.map((item) => (             
                <TodoItem todo={item} key={item.id}/>            
            ))}            
        </ul>
    )
}