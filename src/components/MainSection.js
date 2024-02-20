import TodoList from "./TodoList";
import ToggleButton from "./ToggleButton";

export default function MainSection({todos, handleCompleted, onDelete, onToggleAll}) {    
    return (
        <section className="main">
            <ToggleButton onToggleAll={onToggleAll}/>
            <TodoList todos={todos} handleCompleted={handleCompleted} onDelete={onDelete}/>
        </section>
    )
}