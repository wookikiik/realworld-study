import { useState } from "react";

export default function TaskForm({onTaskChange}) {    
    
const [task, setTask] = useState('');
    
    return (
        <form id="task-form" className="task-form" 
            onSubmit={(e) => {
                e.preventDefault();                
                onTaskChange(task);
                setTask('');
          }}>
            <input
                type="text"
                id="new-task"
                className="new-task"
                placeholder="Add task"  
                value={task}                              
                onChange={e => setTask(e.target.value)}
            />
            <button type="submit" className="btn add-btn">Add</button>
        </form>
    );
}


