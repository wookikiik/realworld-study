import { useState } from "react";
import TaskForm from './taskForm'
import TaskList from './taskList'

export default function Body() {
    const [taskList, setTaskList] = useState(['1', '2']);
    
    function handleChangeTask (task) {
        setTaskList([...taskList, task]);
    }

    function handleEditTask(value, index) {        
        const newTaskList = [...taskList];
        newTaskList[index] = value;
        setTaskList(newTaskList);
    }

    function handleDeleteTask(index) {        
        setTaskList(taskList.filter((_, i) => {        
            return index !== i;
        }));
    }

    return (        
        <div className="container">
            <h1>프라하에서 해야 할 일</h1>
            <TaskForm onTaskChange={handleChangeTask} />
            <TaskList taskList={taskList} editTask={handleEditTask} deleteTask={handleDeleteTask}/>
        </div>        
    )
}