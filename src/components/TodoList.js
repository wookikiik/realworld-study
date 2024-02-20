import TodoItem from "./TodoItem";

export default function TodoList({todos, handleCompleted, onDelete}) {          

    return (
        <ul className="todo-list">
            {todos.map((item, index) => (
             <li className={item.completed ? "completed" : ''} key={index}>
                <TodoItem todo={item} onEditCompleted={handleCompleted} onDelete={onDelete}/>
            </li>
            ))}            
        </ul>
    )
}