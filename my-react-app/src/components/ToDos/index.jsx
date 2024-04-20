import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from './Form';
import List from './List';

const ToDos = (props) => {
    const heading = props?.heading;

    const [todos, setTodos] =  useState(() => {
        const initialId = uuidv4();
        return {
            [initialId]: {
                id: initialId,
                title: 'Buy milk',
                description: 'Go to Wal-Mart™ and buy some 2%!',
                priority: 2, // lower number = higher priority
                deadline: '2024-04-25',
                createdOn: '2024-04-18',
                completed: true, // or false
            }
        }
    });

    const addTodo = (newTodo) => {
        const newId = uuidv4();
        setTodos(prev => ({
            ...prev,
            [newId]: {
                id: newId,
                title: newTodo.title,
                description: newTodo.description,
                priority: newTodo.priority,
                deadline: newTodo.deadline,
                createdOn: `${(new Date()).getFullYear()}-${(new Date()).getMonth()}-${(new Date()).getDate()} ${(new Date()).getHours()}:${(new Date()).getMinutes()}`,
                completed: false
            }
        }));
    };

    const completeTodo = (id) => {
        setTodos(prev => {
            let updatedToDos = prev;
            if(updatedToDos[id]) {
                updatedToDos = {...prev};
                updatedToDos[id].completed = !updatedToDos[id].completed;
            }
            return updatedToDos;
        });
    };

    return (
        <section>
            <h2>{heading ? heading : 'To-Dos List'}</h2>
            <Form addTodo={addTodo} />
            <List todos={todos} completeTodo={completeTodo} />
        </section>
    );
};

export default ToDos;
