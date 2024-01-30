function taskReducer(tasks, action) {
    switch (action.type) {
        case 'add': {
            return [
                ...tasks,
                action.task
            ];
        }
        case 'edit': {
            const newTaskList = [...tasks];
            newTaskList[action.index] = action.task;
            return newTaskList;
        }        
        case 'delete': {
            return tasks.filter((_, i) => {
                return action.index !== i;
            });
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function isEditReducer(isEditList, action) {
    switch (action.type) {        
        case 'edit': {
            const newEditList = [...isEditList];
            newEditList[action.index] = !newEditList[action.index];
            return newEditList;
        }        
        case 'delete': {
            return isEditList.filter((_, i) => {
                return action.index !== i;
            });
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export {taskReducer, isEditReducer};