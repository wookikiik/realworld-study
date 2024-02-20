import { useState, useRef } from "react"

export default function TodoItem({ todo, onEditCompleted, onDelete }) {    
    const [isEditing, setIsEditing] = useState(false);
    const editInputRef = useRef(null);


    function onChangeMode() {
        // TODO
        setIsEditing(!isEditing);                
    }


    return (
        <>
            <div className="view">
                <input className="toggle" type="checkbox"
                    checked={todo.completed}
                    onChange={() => onEditCompleted(todo)}
                />
                <label onDoubleClick={onChangeMode}>{todo.title}</label>
                <button className="destroy"
                    onClick={() => onDelete(todo)}></button>
            </div>
            <input className="edit" defaultValue={todo.title} ref={editInputRef} />
        </>
    )
}