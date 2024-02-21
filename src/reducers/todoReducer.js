export default function todoReducer(todos, action) {
    switch (action.type) {
        case 'add': {
            return [...todos, {
                id: action.id,
                title: action.title,
                completed: false,
            }];
        }
        case 'toggleCompleted': {
            return todos.map(todo => {
                if (action.todo.id === todo.id) {
                    return { ...todo, completed: !action.todo.completed }
                }
                return todo;
            })
        }
        case 'delete' : {
            return todos.filter(todo => action.id !== todo.id)
        }
        case 'editTitle' : {
            return todos.map(todo => {
                if(action.todo.id === todo.id) {
                    return { ...todo, title: action.todo.title}
                }
                return todo;
            })
        }
        case 'allCompleted': {
            return todos.map(todo => {
                return {...todo, completed: true}
            })
        }
        case 'clearCompleted': {
            return todos.filter(todo => !todo.completed)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
          }      
    }
}


