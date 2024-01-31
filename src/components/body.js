import TaskForm from './taskForm'
import TaskList from './taskList'
import { TasksProvider } from '../context'


export default function Body() {        
    return (        
        <div className="container">
            <h1>프라하에서 해야 할 일</h1>
            <TasksProvider>                    
                <TaskForm />
                <TaskList />            
            </TasksProvider>
        </div>        
    )
}