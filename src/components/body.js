import TaskForm from './taskForm'
import TaskList from './taskList'

export default function Body() {
    return (
        <body>
            <div class="container">
            <h1>프라하에서 해야 할 일</h1>
            <TaskForm />
            <TaskList />
            </div>
        </body>
    )
}