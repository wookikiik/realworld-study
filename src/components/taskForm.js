import { useState } from "react";

export default function TaskForm() {
    const [task, setTask] = useState('');
    return (
        <form id="task-form" className="task-form">
            <input
                type="text"
                id="new-task"
                className="new-task"
                placeholder="Add task"
                value={task}
                onChange={e => setTask(e.target.value)}
            />
            <button type="submit" classNameName="btn add-btn">Add</button>
        </form>
    );
}

