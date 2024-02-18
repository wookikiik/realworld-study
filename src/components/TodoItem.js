export default function TodoItem({ todo }) {
    return (
        <>
            <div className="view">
                <input className="toggle" type="checkbox"
                    checked={todo.completed ?? "checked"} />
                <label>{todo.title}</label>
                <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
        </>
    )
}