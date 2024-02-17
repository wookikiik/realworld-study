import TodoItem from "./TodoItem";

export default function TodoList() {
    return (
        <ul className="todo-list">
            <li className="completed">
                <TodoItem />
            </li>
        </ul>
    )
}