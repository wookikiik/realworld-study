
import { useContext } from 'react';
import { TasksContext } from '../context';

import Task from './Task';


export default function TaskList() {    
    const taskList = useContext(TasksContext);      
    
    return (
        <ul id="task-list" className="task-list">            
            {
                taskList.map((task, index) => (
                    <li key={index}>
                        <Task task={task}/>                    
                    </li>
                ))       
            }            
        </ul>
    );
}
