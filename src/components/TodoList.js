import TodoItem from "./TodoItem";

export default function TodoList({todos}) {
    return (
        <ul className="todo-list">
            {todos.map((item, index) => (
             <li className={item.completed ?? "completed"} key={index}>
                <TodoItem todo={item}/>
            </li>
            ))}            
        </ul>
    )
}