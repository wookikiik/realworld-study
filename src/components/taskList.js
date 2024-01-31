import { useImmerReducer } from 'use-immer';
import { isEditReducer } from '../reducers';
import { useContext } from 'react';
import { TasksContext, TasksDispatchContext } from '../context';


export default function TaskList() {    
    const taskList = useContext(TasksContext);
    const taskDispatch = useContext(TasksDispatchContext);    
    const initIsEditList = taskList.length ? new Array(taskList.length).fill(false) : [];

    const [isEditList, dispatch] = useImmerReducer(isEditReducer, initIsEditList);

    function handleEdit(index) {       
        dispatch({
            type: 'edit',
            index: index,
        })
    }
    
    function handleDelete(index) {                
        taskDispatch({
            type: 'delete',
            index: index,
        })
        dispatch({
            type: 'delete',
            index: index,
        })
    }

    return (
        <ul id="task-list" className="task-list">            
            {taskList.map((task, index) => (
                <li key={index}>
                    <input type="checkbox" />
                    {isEditList[index] ? 
                        <input
                            type="text"
                            className="edit-input"
                            value={task}
                            onChange={(e) => {                                    
                                dispatch({
                                    type: 'edit',
                                    task: e.target.value,
                                    index: index,
                                })
                            }}
                        /> : <span>{task}</span>    
                    }                    
                    <div className="action-box">                        
                        {isEditList[index] ? 
                            <button className="btn save-btn" onClick={() => handleEdit(index)}>save</button>
                            :
                            <button className="btn edit-btn" onClick={() => handleEdit(index)}>edit</button>
                        }   
                        <button className="btn delete-btn" onClick={() => handleDelete(index)}>delete</button>                                             
                    </div>
                </li>
            ))       
            }            
        </ul>
    );
}
