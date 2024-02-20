export default function TodoCount({ count }) {
    return (
        <span className="todo-count">
            <strong>{count}</strong> item left
        </span>
    )
}