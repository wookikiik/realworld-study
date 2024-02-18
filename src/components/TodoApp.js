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
    }, todos[0].id)

    function getSequentialId() {
        return ++lastId;
    }

    function handleAdd(title) {
        console.log("getSequentialId", getSequentialId());
        console.log(todos);
        setTodos([...todos, {
            id: getSequentialId(),
            title: title,
            completed: false,
        }])
    }

    return (
        <section className="todoapp">
            <Header handleAdd={handleAdd} />
            <MainSection todos={todos} />
            <Footer filterCount={filterCount} />
        </section>
    )
}