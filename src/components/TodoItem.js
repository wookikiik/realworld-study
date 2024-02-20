import { useState, useRef } from "react"

export default function TodoItem({ todo, onEditCompleted, onDelete }) {
    const [editTodo, setEditTodo] = useState(todo);
    const [isEditing, setIsEditing] = useState(false);
    const editInputRef = useRef(null);


    function onChangeMode() {
        setIsEditing(!isEditing);
        console.log(editInputRef.current);
        console.log(editInputRef.current.style);
        console.log(editInputRef.current.style.display === 'none');
        // editInputRef.current.style.display = editInputRef.current.style.display === 'none' ? 'block' : 'none';
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