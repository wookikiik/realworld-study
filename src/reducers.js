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

export {isEditReducer};