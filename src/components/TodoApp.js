import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import { useState, useEffect } from 'react';

export default function TodoApp() {
    const FILTER_ALL = "All"
    const FILTER_ACTIVE = "Active"
    const FILTER_COMPLETED = "Completed" 

   
    const initialTodo = [
        {
            id: 1,
            title: 'example',
            completed: false,
        },
        {
            id: 2,
            title: 'example2',
            completed: true,
        }        
    ];

    const [todos, setTodos] = useState(initialTodo);
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [filter, setFilter] = useState(FILTER_ALL);
    const filterCount = todos.filter(item => !item.completed).length;

    useEffect(() => {
        if(filter === 'All') {
            setFilteredTodos(todos);
        } else if (filter === "Active") {
            setFilteredTodos(todos.filter(todo => todo.completed === false))
        } else {
            setFilteredTodos(todos.filter(todo => todo.completed === true))
        }
    }, [filter, todos]);


    let lastId = todos.reduce((maxId, current) => {
        return Math.max(maxId, current.id);
    }, todos.length ? todos[0].id : 0)

    function getSequentialId() {
        return ++lastId;
    }

    function handleAdd(title) {  
        setTodos([...todos, {
            id: getSequentialId(),
            title: title,
            completed: false,
        }])
    }

    function handleCompleted(editTodo) {
        setTodos(todos.map(todo => {
            if (editTodo.id === todo.id) {
                return { ...todo, completed: !editTodo.completed }
            }
            return todo;
        }))
    }

    function onDelete(deleteTodo) {
        setTodos(todos.filter(todo => deleteTodo.id !== todo.id))
    }

    function hadleToggleAll() {
        setTodos(todos.map(todo => {
            return {...todo, completed: true}
        }))        
    }

    function handleFilter(filter) {
        setFilter(filter);        
    }

    function handleClear() {
        setTodos(todos.filter(todo => !todo.completed))
    }

    return (
        <section className="todoapp">
            <Header handleAdd={handleAdd} />
            <MainSection
                todos={filteredTodos}
                handleCompleted={handleCompleted}
                onDelete={onDelete}
                onToggleAll={hadleToggleAll} />
            <Footer filterCount={filterCount} onFilter={handleFilter} onClear={handleClear}/>
        </section>
    )
}