import { useState, useContext } from 'react';
import { TasksDispatchContext } from '../context';

export default function TaskForm() {         
    const [newTask, setNewTask] = useState('');
    const dispatch = useContext(TasksDispatchContext);
    
    return (
        <form id="task-form" className="task-form" 
            onSubmit={(e) => {
                e.preventDefault();                                
                dispatch({
                    type: 'add',
                    task: newTask,
                })
                setNewTask('');
          }}>
            <input
                type="text"
                id="new-task"
                className="new-task"
                placeholder="Add task"  
                value={newTask}                              
                onChange={e => setNewTask(e.target.value)}                
            />
            <button type="submit" className="btn add-btn">Add</button>
        </form>
    );
}