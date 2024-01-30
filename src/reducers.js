function taskReducer(draft, action) {
    switch (action.type) {
        case 'add': {            
            draft.push(action.task)
            break;
        }
        case 'edit': {            
            draft[action.index] = action.task;            
            break;
        }        
        case 'delete': {
            return draft.filter((_, i) => {
                return action.index !== i;
            });
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function isEditReducer(draft, action) {
    switch (action.type) {        
        case 'edit': {            
            draft[action.index] = !draft[action.index];
            break;
        }        
        case 'delete': {
            return draft.filter((_, i) => {
                return action.index !== i;
            });
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

function newTaskReducer(draft, action) {
    switch (action.type) {
        case 'reset': {
            return '';
        }
        case 'change': {
            return action.value;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

export {taskReducer, isEditReducer, newTaskReducer};