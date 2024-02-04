
import { EDIT, DELETE } from '../constants';
import { TasksDispatchContext } from '../context';
import { useContext, useState } from 'react';

export default function Task({ task }) {
    const taskDispatch = useContext(TasksDispatchContext);        
    const [isEdit, setIsEdit] = useState(false);
    
    function handleDelete(id) {                
        taskDispatch({
            type: DELETE,
            id,
        })        
    }

    return (
        <>
            <input type="checkbox" />
                {isEdit ? 
                    <input
                        type="text"
                        className="edit-input"
                        value={task.title}
                        onChange={(e) => {                                    
                            taskDispatch({
                                type: EDIT,
                                id: task.id,
                                title: e.target.value,                                
                            })
                        }}
                    /> : <span>{task.title}</span>    
                }                    
                <div className="action-box">                        
                    {isEdit ? 
                        <button className="btn save-btn" onClick={() => setIsEdit(false)}>save</button>
                        :
                        <button className="btn edit-btn" onClick={() => setIsEdit(true)}>edit</button>
                    }   
                    <button className="btn delete-btn" onClick={() => handleDelete(task.id)}>delete</button>                                             
                </div>
        </>
    )    
}