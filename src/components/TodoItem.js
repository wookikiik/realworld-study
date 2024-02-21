import { useState, useRef, useContext } from "react"
import { TodosDispatchContext } from "../contexts/TodosContext";
import { flushSync } from "react-dom";

export default function TodoItem({ todo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editTitle, setEditTItle] = useState(todo.title);
    const editInputRef = useRef(null);
    const dispatch = useContext(TodosDispatchContext);


    function handleChangeMode() {
    
        flushSync(() => setIsEditing(!isEditing));
        editInputRef.current.focus()
    }

    function handleToggleCompleted(todo) {
        dispatch({
            type: 'toggleCompleted',
            todo: todo,
        })
    }

    function handleDelete(todo) {
        dispatch({
            type: 'delete',
            id: todo.id,
        })
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') {
            dispatch({
                type: 'editTitle',
                todo: {
                    ...todo,
                    title: editTitle
                }
            })
            handleChangeMode();
        }
    }

    function handleEditTitle(e) {
        setEditTItle(e.target.value);
    }


    return (
        <li className={todo.completed ? "completed" :
            isEditing ? 'editing' : ''} key={todo.id}>
            <div className="view">
                <input className="toggle" type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleCompleted(todo)}
                />
                <label onDoubleClick={handleChangeMode}>{todo.title}</label>
                <button className="destroy"
                    onClick={() => handleDelete(todo)}></button>
            </div>
            <input className="edit"
                defaultValue={todo.title}
                ref={editInputRef}
                onKeyDown={handleKeyDown}
                onChange={handleEditTitle} />
        </li>
    )
}