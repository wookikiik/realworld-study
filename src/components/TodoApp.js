import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import { useState } from 'react';

export default function TodoApp() {
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
    const filterCount = todos.filter(item => !item.completed).length;

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

    return (
        <section className="todoapp">
            <Header handleAdd={handleAdd} />
            <MainSection
                todos={todos}
                handleCompleted={handleCompleted}
                onDelete={onDelete}
                onToggleAll={hadleToggleAll} />
            <Footer filterCount={filterCount} />
        </section>
    )
}