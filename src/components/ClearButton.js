import { useContext } from "react";
import { TodosDispatchContext } from "../contexts/TodosContext";
export default function ClearButton() {
    const dispatch = useContext(TodosDispatchContext);
    function handleClear() {
        dispatch({
            type: 'clearCompleted',
        })
    }

    return (
        <button className="clear-completed" onClick={handleClear}>Clear completed</button>
    )
}