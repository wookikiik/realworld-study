import { useState, useRef, useContext } from "react"
import { TodosDispatchContext } from "../contexts/TodosContext";

export default function TodoItem({ todo }) {    
    const [isEditing, setIsEditing] = useState(false);
    const editInputRef = useRef(null);    
    const dispatch = useContext(TodosDispatchContext);


    function handleChangeMode() {
        // TODO
        setIsEditing(!isEditing);                
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


    return (
        <>
            <div className="view">
                <input className="toggle" type="checkbox"
                    checked={todo.completed}
                    onChange={() => handleToggleCompleted(todo)}
                />
                <label onDoubleClick={handleChangeMode}>{todo.title}</label>
                <button className="destroy"
                    onClick={() => handleDelete(todo)}></button>
            </div>
            <input className="edit" defaultValue={todo.title} ref={editInputRef} />
        </>
    )
}