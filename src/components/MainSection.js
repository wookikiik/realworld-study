import TodoList from "./TodoList";
import ToggleButton from "./ToggleButton";

export default function MainSection({todos}) {
    return (
        <section className="main">
            <ToggleButton />
            <TodoList todos={todos}/>
        </section>
    )
}