import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import todoReducer from '../reducers/todoReducer';
import { useState, useEffect, useReducer } from 'react';

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

    const [todos, dispatch] = useReducer(todoReducer, initialTodo);
    const [filteredTodos, setFilteredTodos] = useState(todos);
    const [filter, setFilter] = useState(FILTER_ALL);
    const filterCount = todos.filter(item => !item.completed).length;

    useEffect(() => {
        if(filter === FILTER_ALL) {
            setFilteredTodos(todos);
        } else if (filter === FILTER_ACTIVE) {
            setFilteredTodos(todos.filter(todo => todo.completed === false))
        } else if (filter === FILTER_COMPLETED) {
            setFilteredTodos(todos.filter(todo => todo.completed === true))
        }
    }, [filter, todos]);

    let lastId = todos.reduce((maxId, current) => {
        return Math.max(maxId, current.id);
    }, todos.length ? todos[0].id : 0)

    function getSequentialId() {
        return ++lastId;
    }
    
    function handleFilter(filter) {
        setFilter(filter);        
    }

    function handleAdd(title) {      
        dispatch({
            type: 'add',
            id: getSequentialId(),
            title: title,            
        })
    }
    
    function handleCompleted(editTodo) {    
        dispatch({
            type: 'toggleCompleted',
            todo: editTodo,
        })
    }
    
    function onDelete(deleteTodo) {    
        dispatch({
            type: 'delete',
            id: deleteTodo.id,
        })
    }
    
    function hadleToggleAll() {    
        dispatch({
            type: 'allCompleted',        
        })        
    }
    
    function handleClear() {    
        dispatch({
            type: 'clearCompleted',        
        })
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