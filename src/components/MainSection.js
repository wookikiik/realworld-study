import TodoList from "./TodoList";
import ToggleButton from "./ToggleButton";

export default function MainSection() {
    return (
        <section className="main">
            <ToggleButton />
            <TodoList />
        </section>
    )
}