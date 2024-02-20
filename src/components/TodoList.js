import TodoItem from "./TodoItem";
import { useContext, useState, useEffect } from "react"
import { TodosContext } from "../contexts/TodosContext";
import { FilterContext } from "../contexts/FilterContext";
import { FILTER_ALL, FILTER_ACTIVE, FILTER_COMPLETED } from '../filterConstants';

export default function TodoList() {          
    const todos = useContext(TodosContext);  
    const filter = useContext(FilterContext);
    const [filteredTodos, setFilteredTodos] = useState(todos);

    
    useEffect(() => {
        if (filter === FILTER_ALL) {
            setFilteredTodos(todos);
        } else if (filter === FILTER_ACTIVE) {
            setFilteredTodos(todos.filter(todo => todo.completed === false))
        } else if (filter === FILTER_COMPLETED) {
            setFilteredTodos(todos.filter(todo => todo.completed === true))
        }
    }, [filter, todos]);

    return (
        <ul className="todo-list">
            {filteredTodos.map((item, index) => (
             <li className={item.completed ? "completed" : ''} key={index}>
                <TodoItem todo={item}/>
            </li>
            ))}            
        </ul>
    )
}