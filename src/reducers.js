import produce from 'immer';
import { ADD, EDIT, DELETE } from './constants';

function taskReducer(state, action) {
    switch (action.type) {
        case ADD: 
          return produce(state, draftState => {
            draftState.push({id: action.id, title: action.title})
        });
        case EDIT: 
          return produce(state, draftState => {
                const itemIndex = draftState.findIndex(item => item.id === action.id);
                if (itemIndex !== -1) {
                    draftState[itemIndex].title = action.title;
                }
            });
        case DELETE: 
          return produce(state, draftState => {
            const itemIndex = draftState.findIndex(item => item.id === action.id);
            draftState.splice(itemIndex, 1);
          });                   
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}


export { taskReducer };