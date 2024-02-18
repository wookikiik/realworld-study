import { useState } from "react"

export default function Header({handleAdd}) {
    const [inputValue, setInputValue] = useState('');

    function handleChange(e) {
        setInputValue(e.target.value);
    }

    function handleEnter(e) {
        if(e.key === 'Enter') {
            handleAdd(inputValue);
            setInputValue('');
        }
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