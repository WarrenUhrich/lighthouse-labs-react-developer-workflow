import React from 'react';
import '../../styles/ToDos/ListItem.css';

const ListItem = (props) => {
    const todo = props.todo;
    const completeTodo = props.completeTodo;

    return (
        <li className={todo.completed ? 'strikethrough' : ''}>
            <h4 onClick={() => {
                completeTodo(todo.id);
                console.log('hi');
            }}>
                <input checked={todo.completed} type="checkbox" />&nbsp;
                {todo.title}
            </h4>
            <p>
                {todo.description}
            </p>
            <dl>
                <dt>Deadline</dt><dd><time>{todo.deadline}</time></dd>
                <dt>Created</dt><dd><time>{todo.createdOn}</time></dd>
            </dl>
        </li>
    );
};

export default ListItem;
