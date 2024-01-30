import { useReducer } from 'react';
import TaskForm from './taskForm'
import TaskList from './taskList'
import { taskReducer } from '../reducers';

export default function Body() {
    const [taskList, dispatch] = useReducer(taskReducer, ['1', '2']);

    function handleAddTask (task) {        
        dispatch({
            type: 'add',
            task: task,
        })
    }

    function handleEditTask(value, index) {                
        dispatch({
            type: 'edit',
            task: value,
            index: index,
        })
    }

    function handleDeleteTask(index) {                
        dispatch({
            type: 'delete',
            index: index,
        })
    }

    return (        
        <div className="container">
            <h1>프라하에서 해야 할 일</h1>
            <TaskForm onTaskChange={handleAddTask} />
            <TaskList taskList={taskList} editTask={handleEditTask} deleteTask={handleDeleteTask}/>
        </div>        
    )
}