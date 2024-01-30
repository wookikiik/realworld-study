import { useImmerReducer } from 'use-immer';
import { isEditReducer } from '../reducers';

export default function TaskList({taskList, editTask, deleteTask}) {    
    const [isEditList, dispatch] = useImmerReducer(isEditReducer, new Array(taskList.length).fill(false));


    function handleEdit(index) {       
        dispatch({
            type: 'edit',
            index: index,
        })
    }
    
    function handleDelete(index) {        
        deleteTask(index);
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
                            onChange={(e) => editTask(e.target.value, index)}
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
