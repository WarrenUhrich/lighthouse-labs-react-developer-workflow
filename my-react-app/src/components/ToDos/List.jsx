import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
    const heading = props?.heading;
    const todos = props.todos;
    const completeTodo = props.completeTodo;
    const todosLIs = Object.values(todos).map(todo => <ListItem key={todo.id} todo={todo} completeTodo={completeTodo} />);

    return (
        <section>
            <h3>{heading ? heading : 'To-Do List'}</h3>
            <ul>{todosLIs}</ul>
        </section>
    );
};

export default List;
