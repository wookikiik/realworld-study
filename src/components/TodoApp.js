import Header from './Header';
import Footer from './Footer';
import MainSection from './MainSection';
import todoReducer from '../reducers/todoReducer';
import { useState, useReducer } from 'react';
import { TodosContext, TodosDispatchContext } from '../contexts/TodosContext';
import { FilterContext, FilterDispatchContext } from '../contexts/FilterContext';
import { FILTER_ALL } from '../filterConstants';

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

    const [todos, dispatch] = useReducer(todoReducer, initialTodo);
    const [filter, setFilter] = useState(FILTER_ALL);

    return (
        <section className="todoapp">
            <TodosContext.Provider value={todos}>
                <TodosDispatchContext.Provider value={dispatch}>
                    <Header />
                    <FilterContext.Provider value={filter}>
                        <MainSection />
                        <FilterDispatchContext.Provider value={setFilter}>
                            <Footer />
                        </FilterDispatchContext.Provider>
                    </FilterContext.Provider>
                </TodosDispatchContext.Provider>
            </TodosContext.Provider>
        </section>
    )
}