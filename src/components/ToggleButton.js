import { useContext } from "react";
import { TodosDispatchContext } from "../contexts/TodosContext";

export default function ToggleButton() {    
    const dispatch = useContext(TodosDispatchContext);

    function hadleToggleAll() {
        dispatch({
            type: 'allCompleted',
        })
    }

    return (
        <>
            <input id="toggle-all" className="toggle-all" type="checkbox"
                onChange={hadleToggleAll}
            />
            <label htmlFor="toggle-all">Mark all as complete</label>
        </>
    )
}