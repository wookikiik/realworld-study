import { useState } from "react";

export default function TaskList({taskList, editTask, deleteTask}) {    
    const [isEditList, setIsEditList] = useState(new Array(taskList.length).fill(false));        

    function handleEdit(index) {   
        const newEdit = [...isEditList];
        newEdit[index] = !newEdit[index];
        setIsEditList(newEdit);
        editTask(index);
    }
    
    function handleDelete(index) {
        setIsEditList(isEditList.filter((_, i) => {
            return index !== i;
        }));
        deleteTask(index);
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
