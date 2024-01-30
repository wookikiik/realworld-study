import { useImmerReducer } from 'use-immer';
import { newTaskReducer } from '../reducers';

export default function TaskForm({onTaskChange}) {    
    
const [newTask, dispatch] = useImmerReducer(newTaskReducer, '');
    
    return (
        <form id="task-form" className="task-form" 
            onSubmit={(e) => {
                e.preventDefault();                
                onTaskChange(newTask);
                dispatch({
                    type: 'reset',
                });
          }}>
            <input
                type="text"
                id="new-task"
                className="new-task"
                placeholder="Add task"  
                value={newTask}                              
                onChange={e => {
                    dispatch({
                        type: 'change',
                        value: e.target.value,
                    });
                }}
            />
            <button type="submit" className="btn add-btn">Add</button>
        </form>
    );
}


