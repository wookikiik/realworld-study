import TaskForm from './TaskForm'
import TaskList from './TaskList'
import { TasksProvider } from '../context'

export default function TaskApp() {        
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