import { useState, useContext } from 'react';
import { TasksDispatchContext } from '../context';
import { ADD } from '../constants';

export default function TaskForm() {       
    let nextId = 3;  
    const [newTask, setNewTask] = useState('');
    const dispatch = useContext(TasksDispatchContext);
    
    return (
        <form id="task-form" className="task-form" 
            onSubmit={(e) => {
                e.preventDefault();                                
                dispatch({
                    type: ADD,
                    id: nextId++,
                    title: newTask,
                })
                setNewTask('');
          }}>
            <input
                type="text"
                className="new-task"
                placeholder="Add task"  
                value={newTask}                              
                onChange={e => setNewTask(e.target.value)}                
            />
            <button type="submit" className="btn add-btn">Add</button>
        </form>
    );
}