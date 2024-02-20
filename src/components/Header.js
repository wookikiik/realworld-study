import { useContext, useState } from "react"
import { TodosContext, TodosDispatchContext } from "../contexts/TodosContext";

export default function Header() {
    const [inputValue, setInputValue] = useState('');
    const todos = useContext(TodosContext);
    const dispatch = useContext(TodosDispatchContext);

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    let lastId = todos.reduce((maxId, current) => {
        return Math.max(maxId, current.id);
    }, todos.length ? todos[0].id : 0)

    function getSequentialId() {
        return ++lastId;
    }

    function handleEnter(e) {
        if(e.key === 'Enter') {            
            dispatch({
                type: 'add',
                id: getSequentialId(),
                title: inputValue,
            })
        }
            setInputValue('');        
    }

    return (
        <header className="header">                                    
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                value={inputValue}
                onChange={handleChange}
                onKeyDown={handleEnter}
            />
      </header>   
    )
}